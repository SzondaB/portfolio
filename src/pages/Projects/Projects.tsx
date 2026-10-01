import styles from './Projects.module.css'

import NeuralBackground
  from '../../components/background/NeuralBackground'

import FeaturedProjectCard
  from '../../components/project/FeaturedProjectCard'

import ProjectCard
  from '../../components/project/ProjectCard'

import {
  projects
} from '../../data/projects'

import {
  projectsEn
} from '../../data/projects.en'

import useLanguage
  from '../../hooks/useLanguage'

function Projects() {
  const {
    language,
    t
  } = useLanguage()

  const currentProjects =
    language === 'hu'
      ? projects
      : projectsEn

  const featuredProject =
    currentProjects.find(
      project => project.featured
    )

  const otherProjects =
    currentProjects.filter(
      project => !project.featured
    )

  return (
    <main className={styles.page}>
      <NeuralBackground
        section="projects"
      />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            {t.projects.eyebrow}
          </p>

          <h1 className={styles.title}>
            {t.projects.title}
          </h1>

          <p className={styles.introduction}>
            {t.projects.introduction}
          </p>
        </header>

        {featuredProject && (
          <section
            className={styles.featured}
          >
            <FeaturedProjectCard
              project={featuredProject}
            />
          </section>
        )}

        <section
          className={styles.projectsSection}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>
              {t.projects.moreEyebrow}
            </p>

            <h2>
              {t.projects.moreTitle}
            </h2>
          </div>

          <div className={styles.grid}>
            {otherProjects.map(
              project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              )
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects