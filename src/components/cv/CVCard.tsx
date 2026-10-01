import {
  useEffect,
  useRef,
  useState
} from 'react'

import {
  Document,
  Page,
  pdfjs
} from 'react-pdf'

import styles from './CVCard.module.css'

import type {
  CVDocument
} from '../../types/cv'

import useLanguage
  from '../../hooks/useLanguage'

pdfjs.GlobalWorkerOptions.workerSrc =
  new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString()

interface CVCardProps {
  cv: CVDocument
}

function CVCard({
  cv
}: CVCardProps) {
  const { t } = useLanguage()

  const previewRef =
    useRef<HTMLDivElement | null>(null)

  const [pdfWidth, setPdfWidth] =
    useState(380)

  const documentText =
    cv.id === 'hu'
      ? t.cv.documents.hu
      : t.cv.documents.en

  useEffect(() => {
    const preview = previewRef.current

    if (!preview) {
      return
    }

    const updatePdfWidth = () => {
      const availableWidth =
        preview.clientWidth - 32

      setPdfWidth(
        Math.min(
          Math.max(availableWidth, 200),
          380
        )
      )
    }

    updatePdfWidth()

    const resizeObserver =
      new ResizeObserver(updatePdfWidth)

    resizeObserver.observe(preview)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <article
      className={`${styles.card} ${
        !cv.available
          ? styles.unavailable
          : ''
      }`}
    >
      <div className={styles.header}>
        <div className={styles.heading}>
          <p className={styles.language}>
            {documentText.language}
          </p>

          <h2 className={styles.title}>
            {documentText.title}
          </h2>
        </div>

        {cv.available ? (
          <span
            className={styles.activeBadge}
          >
            {t.cv.current}
          </span>
        ) : (
          <span
            className={styles.soonBadge}
          >
            {t.cv.comingSoon}
          </span>
        )}
      </div>

      {cv.available && cv.file ? (
        <>
          <div
            ref={previewRef}
            className={styles.preview}
          >
            <Document
              file={cv.file}
              loading={
                <p
                  className={styles.message}
                >
                  {t.cv.loading}
                </p>
              }
              error={
                <p
                  className={styles.message}
                >
                  {t.cv.loadError}
                </p>
              }
            >
              <Page
                pageNumber={1}
                width={pdfWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className={styles.page}
              />
            </Document>
          </div>

          <div className={styles.footer}>
            <div className={styles.meta}>
              <span>
                {t.cv.pdfDocument}
              </span>

              <span>
                {cv.year}
              </span>
            </div>

            <div className={styles.actions}>
              <a
                href={cv.file}
                target="_blank"
                rel="noreferrer"
                className={
                  styles.secondaryButton
                }
              >
                {t.cv.open}
              </a>

              <a
                href={cv.file}
                download
                className={
                  styles.primaryButton
                }
              >
                {t.cv.download}
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.comingSoon}>
          <div
            className={
              styles.placeholderIcon
            }
          >
            EN
          </div>

          <p>
            {t.cv.englishComingSoon}
          </p>

          <button
            type="button"
            disabled
            className={
              styles.disabledButton
            }
          >
            {t.cv.availableSoon}
          </button>
        </div>
      )}
    </article>
  )
}

export default CVCard