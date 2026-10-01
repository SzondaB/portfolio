import { Link } from 'react-router-dom'

import styles
  from './FeaturedProjectCard.module.css'

import ProjectStatusBadge
  from './ProjectStatusBadge'

import type {
  Project
} from '../../types/project'

import useLanguage
  from '../../hooks/useLanguage'

interface FeaturedProjectCardProps {
  project: Project
}

function FeaturedProjectCard({
  project
}: FeaturedProjectCardProps) {
  const { t } = useLanguage()

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>
            {t.projects.featuredResearch}
          </p>

          <p className={styles.category}>
            {project.category}
          </p>
        </div>

        <ProjectStatusBadge
          status={project.status}
        />
      </div>

      <h2 className={styles.title}>
        {project.title}
      </h2>

      <p className={styles.description}>
        {project.description}
      </p>

      <div className={styles.technologies}>
        {project.technologies.map(
          technology => (
            <span
              key={technology}
              className={styles.technology}
            >
              {technology}
            </span>
          )
        )}
      </div>

      <div className={styles.actions}>
        <Link
          to={`/projects/${project.id}`}
          className={styles.primaryButton}
        >
          {t.projects.projectDetails}
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryButton}
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default FeaturedProjectCard