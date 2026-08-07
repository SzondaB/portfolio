import styles from './AboutSection.module.css'

import profileImage from '../../assets/images/profil1.jpg'

import useSectionProgress from '../../hooks/useSectionProgress'

function AboutSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

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
          transform: `translateY(${translateY}px)`
        }}
      >
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            Rólam
          </p>

          <h1 className={styles.title}>
            Szonda Benjamin Márk
          </h1>

          <h2 className={styles.subtitle}>
            Mérnökinformatikus
          </h2>

          <p className={styles.description}>
            Érdeklődésem középpontjában a
            mesterséges intelligencia, a neurális
            hálózatok és az automatizálás áll.
          </p>
        </div>

        <div className={styles.photoWrapper}>
          <img
            src={profileImage}
            alt="Portré"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection