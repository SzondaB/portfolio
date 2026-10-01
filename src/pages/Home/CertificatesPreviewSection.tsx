import { Link } from 'react-router-dom'

import styles
  from './CertificatesPreviewSection.module.css'

import useSectionProgress
  from '../../hooks/useSectionProgress'

import useSectionMagnet
  from '../../hooks/useSectionMagnet'

import useLanguage
  from '../../hooks/useLanguage'

function CertificatesPreviewSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

  const { t } = useLanguage()

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
          transform:
            `translateY(${translateY}px)`
        }}
      >
        <p className={styles.eyebrow}>
          {t.home.certificates.eyebrow}
        </p>

        <h2 className={styles.title}>
          {t.home.certificates.title}
        </h2>

        <p className={styles.description}>
          {t.home.certificates.description}
        </p>

        <div className={styles.previewCard}>
          <p className={styles.cardLabel}>
            NVIDIA Deep Learning Institute
          </p>

          <h3>
            Fundamentals of Deep Learning
          </h3>

          <p>
            {
              t.home.certificates
                .featuredDescription
            }
          </p>
        </div>

        <Link
          to="/certificates"
          className={styles.button}
        >
          {t.home.certificates.button}
        </Link>
      </div>
    </section>
  )
}

export default CertificatesPreviewSection