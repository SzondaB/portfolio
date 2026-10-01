import styles
  from './ProjectStatusBadge.module.css'

import type {
  ProjectStatus
} from '../../types/project'

import useLanguage
  from '../../hooks/useLanguage'

interface ProjectStatusBadgeProps {
  status: ProjectStatus
}

function ProjectStatusBadge({
  status
}: ProjectStatusBadgeProps) {
  const { t } = useLanguage()

  return (
    <span
      className={`
        ${styles.status}
        ${styles[status]}
      `}
    >
      <span className={styles.dot} />

      {t.projects.statuses[status]}
    </span>
  )
}

export default ProjectStatusBadge