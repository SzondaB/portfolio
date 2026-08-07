import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div className={styles.left}>
          <div className={styles.language}>
            <button type="button">
              HU
            </button>

            <span>/</span>

            <button type="button">
              EN
            </button>
          </div>

          <div className={styles.links}>
            <Link to="/">
              Rólam
            </Link>

            <Link to="/projects">
              Projektek
            </Link>

            <Link to="/certificates">
              Tanúsítványok
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <Link
            to="/cv"
            className={styles.cvLink}
          >
            Önéletrajz letöltése
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar