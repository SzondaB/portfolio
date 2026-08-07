import { useEffect, type RefObject } from 'react'

function useSectionMagnet<T extends HTMLElement>(
  ref: RefObject<T | null>,
  magnetDistance = 30,
  delay = 120
) {
  useEffect(() => {
    let timeout: number | null = null

    const handleScroll = () => {
      if (timeout !== null) {
        window.clearTimeout(timeout)
      }

      timeout = window.setTimeout(() => {
        const element = ref.current

        if (!element) return

        const rect = element.getBoundingClientRect()

        const viewportCenter =
          window.innerHeight / 2

        const sectionCenter =
          rect.top + rect.height / 2

        const distanceFromCenter =
          sectionCenter - viewportCenter

        if (
          Math.abs(distanceFromCenter)
          <= magnetDistance
        ) {
          window.scrollBy({
            top: distanceFromCenter,
            behavior: 'smooth'
          })
        }
      }, delay)
    }

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )

      if (timeout !== null) {
        window.clearTimeout(timeout)
      }
    }
  }, [ref, magnetDistance, delay])
}

export default useSectionMagnet