import { Link } from 'react-router-dom'

import styles
  from './ProjectsPreviewSection.module.css'

import useSectionProgress
  from '../../hooks/useSectionProgress'

import useSectionMagnet
  from '../../hooks/useSectionMagnet'

import useLanguage
  from '../../hooks/useLanguage'

function ProjectsPreviewSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

  const { t } = useLanguage()

  useSectionMagnet(ref, 50, 140)

  const translateY =
    (1 - visibility) * 60

  return (
    <section
      ref={ref}
      className={styles.section}
      id="projects-preview"
    >
      <div
        className={styles.content}
        style={{
          opacity: visibility,
          transform:
            `translateY(${translateY}px)`
        }}
      >
        <p className={styles.eyebrow}>
          {t.home.projects.eyebrow}
        </p>

        <h2 className={styles.title}>
          {t.home.projects.title}
        </h2>

        <p className={styles.description}>
          {t.home.projects.description}
        </p>

        <div className={styles.previewCard}>
          <p className={styles.cardLabel}>
            {t.home.projects.featuredLabel}
          </p>

          <h3>
            {t.home.projects.featuredTitle}
          </h3>

          <p>
            {
              t.home.projects
                .featuredDescription
            }
          </p>
        </div>

        <Link
          to="/projects"
          className={styles.button}
        >
          {t.home.projects.button}
        </Link>
      </div>
    </section>
  )
}

export default ProjectsPreviewSection