import { useEffect, useState } from 'react'

export type HomeSection =
  | 'about'
  | 'projects'
  | 'certificates'
  | 'contact'

function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState<HomeSection>('about')

  useEffect(() => {
    const sections: {
      id: string
      name: HomeSection
    }[] = [
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

    const observers: IntersectionObserver[] = []

    sections.forEach(section => {
      const element =
        document.getElementById(section.id)

      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.name)
          }
        },
        {
          /*
           * Csak a képernyő középső
           * 30%-át tekintjük aktív zónának.
           */
          rootMargin: '-35% 0px -35% 0px',
          threshold: 0
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => {
        observer.disconnect()
      })
    }
  }, [])

  return activeSection
}

export default useActiveSection