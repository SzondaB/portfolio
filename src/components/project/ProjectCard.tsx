import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'

import ProjectStatusBadge
  from './ProjectStatusBadge'

import type {
  Project
} from '../../types/project'

import useLanguage
  from '../../hooks/useLanguage'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({
  project
}: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <p className={styles.category}>
          {project.category}
        </p>

        <ProjectStatusBadge
          status={project.status}
        />
      </div>

      <h3 className={styles.title}>
        {project.title}
      </h3>

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

      <div className={styles.footer}>
        <Link
          to={`/projects/${project.id}`}
          className={styles.details}
        >
          {t.projects.details}
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard