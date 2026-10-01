import {
  useEffect,
  useState
} from 'react'

export type HomeSection =
  | 'about'
  | 'projects'
  | 'certificates'
  | 'contact'
  | 'cv'

interface SectionDefinition {
  id: string
  name: HomeSection
}

const sections: SectionDefinition[] = [
  {
    id: 'about',
    name: 'about'
  },
  {
    id: 'projects-preview',
    name: 'projects'
  },
  {
    id: 'certificates-preview',
    name: 'certificates'
  },
  {
    id: 'contact',
    name: 'contact'
  }
]

function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState<HomeSection>('about')

  useEffect(() => {
    let animationFrame = 0

    const updateActiveSection = () => {
      const viewportCenter =
        window.innerHeight / 2

      let closestSection:
        HomeSection = 'about'

      let smallestDistance =
        Number.POSITIVE_INFINITY

      for (const section of sections) {
        const element =
          document.getElementById(
            section.id
          )

        if (!element) continue

        const rect =
          element.getBoundingClientRect()

        /*
         * A szekció vizuális középpontja.
         */
        const sectionCenter =
          rect.top +
          rect.height / 2

        const distance =
          Math.abs(
            sectionCenter -
            viewportCenter
          )

        if (
          distance <
          smallestDistance
        ) {
          smallestDistance =
            distance

          closestSection =
            section.name
        }
      }

      setActiveSection(
        closestSection
      )
    }

    const handleScroll = () => {
      cancelAnimationFrame(
        animationFrame
      )

      animationFrame =
        requestAnimationFrame(
          updateActiveSection
        )
    }

    const handleResize = () => {
      handleScroll()
    }

    updateActiveSection()

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true
      }
    )

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [])

  return activeSection
}

export default useActiveSection