import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Rólam</Link>
        <Link to="/projects">Projektek</Link>
        <Link to="/certificates">Tanúsítványok</Link>
      </nav>
    </header>
  )
}

export default Navbar