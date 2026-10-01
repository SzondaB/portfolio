import styles from './AboutSection.module.css'

import profileImage
  from '../../assets/images/profil5.jpg'

import useSectionProgress
  from '../../hooks/useSectionProgress'

import useLanguage
  from '../../hooks/useLanguage'

function AboutSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

  const { t } = useLanguage()

  const translateY =
    (1 - visibility) * 60

  return (
    <section
      ref={ref}
      className={styles.section}
      id="about"
    >
      <div
        className={styles.content}
        style={{
          opacity: visibility,
          transform:
            `translateY(${translateY}px)`
        }}
      >
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            {t.home.about.eyebrow}
          </p>

          <h1 className={styles.title}>
            Szonda <br /> Benjamin Márk
          </h1>

          <h2 className={styles.subtitle}>
            {t.home.about.profession}
          </h2>

          <p className={styles.description}>
            {t.home.about.description.map(
              (paragraph, index) => (
                <span key={paragraph}>
                  {paragraph}

                  {index <
                    t.home.about.description.length -
                      1 && (
                    <>
                      <br />
                    </>
                  )}
                </span>
              )
            )}
          </p>
        </div>

        <div className={styles.photoWrapper}>
          <img
            src={profileImage}
            alt={
              t.home.about.portraitAlt
            }
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection