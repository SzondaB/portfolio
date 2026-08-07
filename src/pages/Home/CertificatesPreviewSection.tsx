import { Link } from 'react-router-dom'

import styles from './CertificatesPreviewSection.module.css'

import useSectionProgress from '../../hooks/useSectionProgress'
import useSectionMagnet from '../../hooks/useSectionMagnet'

function CertificatesPreviewSection() {
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
      id="certificates-preview"
    >
      <div
        className={styles.content}
        style={{
          opacity: visibility,
          transform: `translateY(${translateY}px)`
        }}
      >
        <p className={styles.eyebrow}>
          Tanúsítványok
        </p>

        <h2 className={styles.title}>
          Folyamatos szakmai fejlődés
        </h2>

        <p className={styles.description}>
          Tanulmányaim mellett különböző
          mesterséges intelligencia és deep
          learning témájú szakmai képzéseken is
          részt vettem.
        </p>

        <div className={styles.previewCard}>
          <p className={styles.cardLabel}>
            NVIDIA Deep Learning Institute
          </p>

          <h3>
            Fundamentals of Deep Learning
          </h3>

          <p>
            Egyike a megszerzett NVIDIA
            tanúsítványaimnak.
          </p>
        </div>

        <Link
          to="/certificates"
          className={styles.button}
        >
          Tanúsítványok megtekintése
        </Link>
      </div>
    </section>
  )
}

export default CertificatesPreviewSection