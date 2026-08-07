import styles from './AboutSection.module.css'

import useSectionProgress from '../../hooks/useSectionProgress'
import useSectionMagnet from '../../hooks/useSectionMagnet'

function AboutSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

  useSectionMagnet(ref, 70, 140)

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
    </section>
  )
}

export default AboutSection