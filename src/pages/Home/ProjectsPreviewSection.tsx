import { Link } from 'react-router-dom'

import styles from './ProjectsPreviewSection.module.css'

import useSectionProgress from '../../hooks/useSectionProgress'
import useSectionMagnet from '../../hooks/useSectionMagnet'

function ProjectsPreviewSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

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
          transform: `translateY(${translateY}px)`
        }}
      >
        <p className={styles.eyebrow}>
          Projektek
        </p>

        <h2 className={styles.title}>
          Saját fejlesztések és kutatási munkák
        </h2>

        <p className={styles.description}>
          Projektjeim során többek között
          mesterséges intelligenciával,
          neurális hálózatokkal,
          webfejlesztéssel és automatizálással
          foglalkozom.
        </p>

        <div className={styles.previewCard}>
          <p className={styles.cardLabel}>
            Kiemelt projekt
          </p>

          <h3>
            Alice–Bob–Eve neurális kommunikáció
          </h3>

          <p>
            Versengő neurális hálózatokon alapuló
            kutatási projekt, amelyben a
            mintázatfelismerés és annak
            kihasználása kiemelt szerepet kap.
          </p>
        </div>

        <Link
          to="/projects"
          className={styles.button}
        >
          Projektek megtekintése
        </Link>
      </div>
    </section>
  )
}

export default ProjectsPreviewSection