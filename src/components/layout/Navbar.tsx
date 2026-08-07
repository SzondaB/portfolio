import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Rólam</Link>

        <Link to="/projects">
          Projektek
        </Link>

        <Link to="/certificates">
          Tanúsítványok
        </Link>
      </nav>
    </header>
  )
}

export default Navbar