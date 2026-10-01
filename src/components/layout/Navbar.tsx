import {
  useEffect,
  useState
} from 'react'

import {
  Link,
  useLocation
} from 'react-router-dom'

import styles from './Navbar.module.css'

import useLanguage
  from '../../hooks/useLanguage'

function Navbar() {
  const {
    language,
    setLanguage,
    t
  } = useLanguage()

  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  const location = useLocation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavigation = () => {
    setIsMenuOpen(false)
    scrollToTop()
  }

  const toggleMenu = () => {
    setIsMenuOpen(
      current => !current
    )
  }

  /*
   * Ha valamilyen más módon változik
   * az útvonal, a mobilmenü akkor is
   * automatikusan bezáródik.
   */
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  /*
   * Nyitott mobilmenünél megakadályozzuk,
   * hogy a háttérben görögjön az oldal.
   */
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

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

        <button
          type="button"
          className={`${styles.menuButton} ${
            isMenuOpen
              ? styles.menuButtonOpen
              : ''
          }`}
          onClick={toggleMenu}
          aria-label={
            isMenuOpen
              ? 'Menü bezárása'
              : 'Menü megnyitása'
          }
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen
            ? styles.mobileMenuOpen
            : ''
        }`}
      >
        <div className={styles.mobileLinks}>
          <Link
            to="/"
            onClick={handleNavigation}
          >
            {t.navbar.about}
          </Link>

          <Link
            to="/projects"
            onClick={handleNavigation}
          >
            {t.navbar.projects}
          </Link>

          <Link
            to="/certificates"
            onClick={handleNavigation}
          >
            {t.navbar.certificates}
          </Link>

          <Link
            to="/cv"
            className={styles.mobileCvLink}
            onClick={handleNavigation}
          >
            {t.navbar.cv}
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className={styles.overlay}
          onClick={() =>
            setIsMenuOpen(false)
          }
          aria-label="Menü bezárása"
        />
      )}
    </header>
  )
}

export default Navbar