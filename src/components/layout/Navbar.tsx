import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

import useLanguage
  from '../../hooks/useLanguage'

function Navbar() {
  const {
    language,
    setLanguage,
    t
  } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.language}>
            <button
              type="button"
              onClick={() =>
                setLanguage('hu')
              }
              className={
                language === 'hu'
                  ? styles.activeLanguage
                  : ''
              }
              aria-pressed={
                language === 'hu'
              }
            >
              HU
            </button>

            <span>/</span>

            <button
              type="button"
              onClick={() =>
                setLanguage('en')
              }
              className={
                language === 'en'
                  ? styles.activeLanguage
                  : ''
              }
              aria-pressed={
                language === 'en'
              }
            >
              EN
            </button>
          </div>

          <div className={styles.links}>
            <Link
              to="/"
              onClick={scrollToTop}
            >
              {t.navbar.about}
            </Link>

            <Link
              to="/projects"
              onClick={scrollToTop}
            >
              {t.navbar.projects}
            </Link>

            <Link
              to="/certificates"
              onClick={scrollToTop}
            >
              {t.navbar.certificates}
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <Link
            to="/cv"
            className={styles.cvLink}
            onClick={scrollToTop}
          >
            {t.navbar.cv}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar