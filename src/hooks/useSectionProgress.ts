import { useEffect, useRef, useState } from 'react'

function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visibility, setVisibility] = useState(0)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    let animationFrame: number | null = null

    const updateVisibility = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }

      animationFrame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()

        const viewportHeight = window.innerHeight
        const viewportCenter = viewportHeight / 2

        const sectionCenter =
          rect.top + rect.height / 2

        const distanceFromCenter =
          Math.abs(sectionCenter - viewportCenter)

        const maxDistance =
          viewportHeight * 0.85

        const progress =
          1 - distanceFromCenter / maxDistance

        const clampedProgress =
          Math.max(0, Math.min(1, progress))

        setVisibility(clampedProgress)
      })
    }

    updateVisibility()

    window.addEventListener(
      'scroll',
      updateVisibility,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      updateVisibility
    )

    return () => {
      window.removeEventListener(
        'scroll',
        updateVisibility
      )

      window.removeEventListener(
        'resize',
        updateVisibility
      )

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return {
    ref,
    visibility
  }
}

export default useSectionProgress