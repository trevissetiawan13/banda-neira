import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`navbar ${isHome ? "navbar--transparent" : "navbar--solid"}`}>
      <Link to="/" className="navbar-logo" aria-label="Beranda Banda Neira">
        Kepulauan Banda
      </Link>

      <nav className="navbar-menu" aria-label="Navigasi Utama">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Beranda</Link>
        <Link to="/wisata" className={location.pathname.startsWith("/wisata") ? "active" : ""}>Wisata</Link>
        <Link to="/akomodasi" className={location.pathname.startsWith("/akomodasi") ? "active" : ""}>Akomodasi</Link>
        <Link to="/kuliner" className={location.pathname.startsWith("/kuliner") ? "active" : ""}>Kuliner</Link>
        <Link to="/transportasi" className={location.pathname.startsWith("/transportasi") ? "active" : ""}>Transportasi</Link>
        <Link to="/kontak" className={location.pathname.startsWith("/kontak") ? "active" : ""}>Kontak</Link>
      </nav>
    </header>
  );
}

export default Navbar;