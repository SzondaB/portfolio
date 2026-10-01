import {
  useState
} from 'react'

import {
  Document,
  Page,
  pdfjs
} from 'react-pdf'

import styles
  from './CertificateCard.module.css'

import type {
  Certificate
} from '../../types/certificate'

import useLanguage
  from '../../hooks/useLanguage'

pdfjs.GlobalWorkerOptions.workerSrc =
  new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString()

interface CertificateCardProps {
  certificate: Certificate
}

function CertificateCard({
  certificate
}: CertificateCardProps) {
  const { t } = useLanguage()

  const [isFlipped, setIsFlipped] =
    useState(false)

  return (
    <article className={styles.card}>
      <div
        className={`${styles.inner} ${
          isFlipped
            ? styles.flipped
            : ''
        }`}
      >
        <section className={styles.front}>
          <div>
            <p className={styles.provider}>
              {certificate.provider}
            </p>

            <p className={styles.year}>
              {certificate.year}
            </p>
          </div>

          <h2 className={styles.title}>
            {certificate.title}
          </h2>

          <p className={styles.description}>
            {certificate.description}
          </p>

          <div className={styles.tags}>
            {certificate.tags.map(
              tag => (
                <span
                  key={tag}
                  className={styles.tag}
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div
            className={styles.frontFooter}
          >
            <button
              type="button"
              className={
                styles.primaryButton
              }
              onClick={() =>
                setIsFlipped(true)
              }
            >
              {
                t.certificates
                  .viewCertificate
              }
            </button>
          </div>
        </section>

        <section className={styles.back}>
          <div
            className={styles.backHeader}
          >
            <button
              type="button"
              className={
                styles.backButton
              }
              onClick={() =>
                setIsFlipped(false)
              }
            >
              {t.certificates.back}
            </button>
          </div>

          <div
            className={styles.pdfWrapper}
          >
            <Document
              file={certificate.pdf}
              loading={
                <p
                  className={
                    styles.pdfMessage
                  }
                >
                  {
                    t.certificates
                      .loading
                  }
                </p>
              }
              error={
                <p
                  className={
                    styles.pdfMessage
                  }
                >
                  {
                    t.certificates
                      .loadError
                  }
                </p>
              }
            >
              <Page
                pageNumber={1}
                width={380}
                renderTextLayer={false}
                renderAnnotationLayer={
                  false
                }
                className={
                  styles.pdfPage
                }
              />
            </Document>
          </div>

          <div className={styles.actions}>
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noreferrer"
              className={
                styles.secondaryButton
              }
            >
              {t.certificates.open}
            </a>

            <a
              href={certificate.pdf}
              download
              className={
                styles.primaryButton
              }
            >
              {t.certificates.download}
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default CertificateCard