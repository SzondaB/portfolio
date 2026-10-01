import styles from './CV.module.css'

import NeuralBackground
  from '../../components/background/NeuralBackground'

import CVCard
  from '../../components/cv/CVCard'

import {
  cvDocuments
} from '../../data/cv'

import useLanguage
  from '../../hooks/useLanguage'

function CV() {
  const { t } = useLanguage()

  return (
    <main className={styles.page}>
      <NeuralBackground
        section="cv"
      />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            {t.cv.eyebrow}
          </p>

          <h1 className={styles.title}>
            {t.cv.title}
          </h1>

          <p className={styles.introduction}>
            {t.cv.introduction}
          </p>
        </header>

        <section className={styles.grid}>
          {cvDocuments.map(cv => (
            <CVCard
              key={cv.id}
              cv={cv}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default CV