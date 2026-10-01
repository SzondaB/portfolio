import styles from './Certificates.module.css'

import NeuralBackground
  from '../../components/background/NeuralBackground'

import CertificateCard
  from '../../components/certificate/CertificateCard'

import {
  certificates
} from '../../data/certificates'

import {
  certificatesEn
} from '../../data/certificates.en'

import useLanguage
  from '../../hooks/useLanguage'

function Certificates() {
  const {
    language,
    t
  } = useLanguage()

  const currentCertificates =
    language === 'hu'
      ? certificates
      : certificatesEn

  return (
    <main className={styles.page}>
      <NeuralBackground
        section="certificates"
      />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            {t.certificates.eyebrow}
          </p>

          <h1 className={styles.title}>
            {t.certificates.title}
          </h1>

          <p className={styles.introduction}>
            {t.certificates.introduction}
          </p>
        </header>

        <section className={styles.grid}>
          {currentCertificates.map(
            certificate => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            )
          )}
        </section>
      </div>
    </main>
  )
}

export default Certificates