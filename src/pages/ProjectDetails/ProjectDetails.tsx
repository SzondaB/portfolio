import {
  Link,
  useParams
} from 'react-router-dom'

import styles
  from './ProjectDetails.module.css'

import NeuralBackground
  from '../../components/background/NeuralBackground'

import ProjectStatusBadge
  from '../../components/project/ProjectStatusBadge'

import {
  projects
} from '../../data/projects'

import {
  projectsEn
} from '../../data/projects.en'

import useLanguage
  from '../../hooks/useLanguage'

function ProjectDetails() {
  const { projectId } = useParams()

  const {
    language,
    t
  } = useLanguage()

  const currentProjects =
    language === 'hu'
      ? projects
      : projectsEn

  const project =
    currentProjects.find(
      project =>
        project.id === projectId
    )

  if (!project) {
    return (
      <main className={styles.notFound}>
        <h1>
          {t.projects.notFound}
        </h1>

        <Link
          to="/projects"
          className={styles.backLink}
        >
          {t.projects.back}
        </Link>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <NeuralBackground
        section="projects"
      />

      <div className={styles.content}>
        <Link
          to="/projects"
          className={styles.backLink}
        >
          {t.projects.back}
        </Link>

        <header className={styles.hero}>
          <div className={styles.heroTop}>
            <div>
              <p className={styles.category}>
                {project.category}
              </p>

              {project.featured && (
                <p className={styles.featured}>
                  {t.projects.featured}
                </p>
              )}
            </div>

            <ProjectStatusBadge
              status={project.status}
            />
          </div>

          <h1 className={styles.title}>
            {project.title}
          </h1>

          <p className={styles.description}>
            {
              project.fullDescription ??
              project.description
            }
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

          {(project.github ||
            project.demo) && (
            <div className={styles.actions}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    styles.primaryButton
                  }
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    styles.secondaryButton
                  }
                >
                  {t.projects.liveDemo}
                </a>
              )}
            </div>
          )}
        </header>

        {project.highlights &&
          project.highlights.length > 0 && (
            <section
              className={
                styles.highlightsSection
              }
            >
              <p
                className={
                  styles.sectionEyebrow
                }
              >
                {
                  t.projects
                    .highlightsEyebrow
                }
              </p>

              <h2
                className={
                  styles.sectionTitle
                }
              >
                {
                  t.projects
                    .highlightsTitle
                }
              </h2>

              <div
                className={styles.highlights}
              >
                {project.highlights.map(
                  highlight => (
                    <div
                      key={highlight}
                      className={
                        styles.highlight
                      }
                    >
                      <span
                        className={
                          styles.highlightDot
                        }
                      />

                      <span>
                        {highlight}
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

        {project.image && (
          <section
            className={styles.mediaSection}
          >
            <img
              src={project.image}
              alt={project.title}
              className={
                styles.projectImage
              }
            />
          </section>
        )}

        {project.video && (
          <section
            className={styles.mediaSection}
          >
            <video
              className={styles.video}
              controls
              playsInline
            >
              <source
                src={project.video}
                type="video/mp4"
              />
            </video>
          </section>
        )}

        {project.sections &&
          project.sections.length > 0 && (
            <div className={styles.sections}>
              {project.sections.map(
                (section, index) => (
                  <section
                    key={section.title}
                    className={
                      styles.detailSection
                    }
                  >
                    <div
                      className={
                        styles.sectionNumber
                      }
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </div>

                    <div
                      className={
                        styles.sectionContent
                      }
                    >
                      <h2>
                        {section.title}
                      </h2>

                      <p>
                        {section.content}
                      </p>
                    </div>
                  </section>
                )
              )}
            </div>
          )}

        <footer className={styles.footer}>
          <Link
            to="/projects"
            className={styles.backButton}
          >
            {t.projects.allProjects}
          </Link>
        </footer>
      </div>
    </main>
  )
}

export default ProjectDetails