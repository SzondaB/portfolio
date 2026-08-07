import styles from './ContactSection.module.css'

import useSectionProgress from '../../hooks/useSectionProgress'
import useSectionMagnet from '../../hooks/useSectionMagnet'

function ContactSection() {
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
      id="contact"
    >
      <div
        className={styles.content}
        style={{
          opacity: visibility,
          transform: `translateY(${translateY}px)`
        }}
      >
        <p className={styles.eyebrow}>
          Kapcsolat
        </p>

        <h2 className={styles.title}>
          Elérhetőségek
        </h2>

        <p className={styles.description}>
          Itt lesznek majd az elérhetőségeim és
          a szakmai profiljaim.
        </p>

        <div className={styles.links}>
          <a href="mailto:pelda@email.hu">
            E-mail
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection