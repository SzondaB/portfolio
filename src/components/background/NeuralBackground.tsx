import {
  useEffect,
  useRef
} from 'react'

import styles from './NeuralBackground.module.css'

import type {
  HomeSection
} from '../../hooks/useActiveSection'

type BackgroundSection =
  | HomeSection
  | 'cv'

interface NeuralBackgroundProps {
  section: BackgroundSection
}

interface Node {
  x: number
  y: number

  vx: number
  vy: number

  radius: number
}

interface RGB {
  r: number
  g: number
  b: number
}

interface Theme {
  background: string
  accent: string
  rgb: RGB
}

const themes: Record<BackgroundSection, Theme> = {
  about: {
    background: '#0D1117',
    accent: '#58A6FF',

    rgb: {
      r: 88,
      g: 166,
      b: 255
    }
  },

  projects: {
    background: '#08171A',
    accent: '#2DD4BF',

    rgb: {
      r: 45,
      g: 212,
      b: 191
    }
  },

  certificates: {
    background: '#141122',
    accent: '#8B5CF6',

    rgb: {
      r: 139,
      g: 92,
      b: 246
    }
  },

  contact: {
    background: '#101318',
    accent: '#A5B4FC',

    rgb: {
      r: 165,
      g: 180,
      b: 252
    }
  },

  cv: {
    background: '#0D1220',
    accent: '#818CF8',

    rgb: {
      r: 129,
      g: 140,
      b: 248
    }
  }
}

function NeuralBackground({
  section
}: NeuralBackgroundProps) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null)

  /*
   * Aktuális és cél hálószín.
   * Refet használunk, mert ezt minden
   * animation frame-ben módosítjuk.
   */
  const currentColor = useRef<RGB>({
    ...themes.about.rgb
  })

  const targetColor = useRef<RGB>({
    ...themes.about.rgb
  })

  /*
   * Ha szekciót váltunk,
   * csak a cél szín változik.
   *
   * Maga az animate ciklus fokozatosan
   * interpolál az aktuális és a cél között.
   */
  useEffect(() => {
    targetColor.current = {
      ...themes[section].rgb
    }
  }, [section])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const context =
      canvas.getContext('2d')

    if (!context) return

    let animationFrame = 0

    const nodes: Node[] = []

    const nodeCount = 65
    const connectionDistance = 150

    const resizeCanvas = () => {
      const pixelRatio =
        Math.min(
          window.devicePixelRatio || 1,
          2
        )

      canvas.width =
        window.innerWidth *
        pixelRatio

      canvas.height =
        window.innerHeight *
        pixelRatio

      canvas.style.width =
        `${window.innerWidth}px`

      canvas.style.height =
        `${window.innerHeight}px`

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      )
    }

    const createNodes = () => {
      nodes.length = 0

      for (
        let i = 0;
        i < nodeCount;
        i++
      ) {
        nodes.push({
          x:
            Math.random() *
            window.innerWidth,

          y:
            Math.random() *
            window.innerHeight,

          vx:
            (Math.random() - 0.5) *
            0.22,

          vy:
            (Math.random() - 0.5) *
            0.22,

          radius:
            Math.random() * 1.4 +
            0.8
        })
      }
    }

    const updateColor = () => {
      /*
       * Minél kisebb ez az érték,
       * annál lassabb a színváltás.
       */
      const speed = 0.025

      currentColor.current.r +=
        (
          targetColor.current.r -
          currentColor.current.r
        ) * speed

      currentColor.current.g +=
        (
          targetColor.current.g -
          currentColor.current.g
        ) * speed

      currentColor.current.b +=
        (
          targetColor.current.b -
          currentColor.current.b
        ) * speed
    }

    const updateNodes = () => {
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (
          node.x <= 0 ||
          node.x >=
            window.innerWidth
        ) {
          node.vx *= -1
        }

        if (
          node.y <= 0 ||
          node.y >=
            window.innerHeight
        ) {
          node.vy *= -1
        }
      }
    }

    const drawConnections = () => {
      const {
        r,
        g,
        b
      } = currentColor.current

      for (
        let i = 0;
        i < nodes.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < nodes.length;
          j++
        ) {
          const first =
            nodes[i]

          const second =
            nodes[j]

          const dx =
            first.x -
            second.x

          const dy =
            first.y -
            second.y

          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            )

          if (
            distance <
            connectionDistance
          ) {
            const opacity =
              1 -
              distance /
                connectionDistance

            context.beginPath()

            context.moveTo(
              first.x,
              first.y
            )

            context.lineTo(
              second.x,
              second.y
            )

            context.strokeStyle =
              `rgba(
                ${Math.round(r)},
                ${Math.round(g)},
                ${Math.round(b)},
                ${opacity * 0.18}
              )`

            context.lineWidth = 1

            context.stroke()
          }
        }
      }
    }

    const drawNodes = () => {
      const {
        r,
        g,
        b
      } = currentColor.current

      for (const node of nodes) {
        context.beginPath()

        context.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        )

        context.fillStyle =
          `rgba(
            ${Math.round(r)},
            ${Math.round(g)},
            ${Math.round(b)},
            0.65
          )`

        context.fill()
      }
    }

    const animate = () => {
      context.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      )

      updateColor()
      updateNodes()

      drawConnections()
      drawNodes()

      animationFrame =
        requestAnimationFrame(
          animate
        )
    }

    const handleResize = () => {
      resizeCanvas()
      createNodes()
    }

    resizeCanvas()
    createNodes()
    animate()

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )

      cancelAnimationFrame(
        animationFrame
      )
    }
  }, [])

  const theme =
    themes[section]

  return (
    <div
      className={
        styles.background
      }
      style={{
        backgroundColor:
          theme.background,

        color:
          theme.accent
      }}
    >
      <canvas
        ref={canvasRef}
        className={
          styles.canvas
        }
      />

      <div
        className={
          styles.glow
        }
      />
    </div>
  )
}

export default NeuralBackground