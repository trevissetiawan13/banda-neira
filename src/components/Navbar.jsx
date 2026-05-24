import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className={`navbar ${isHome ? "navbar--transparent" : "navbar--solid"}`}>
      <Link to="/" className="navbar-logo" aria-label="Beranda Banda Neira">
        {t("logo")}
      </Link>

      <nav className="navbar-menu" aria-label="Navigasi Utama">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          {t("home")}
        </Link>
        <Link to="/wisata" className={location.pathname.startsWith("/wisata") ? "active" : ""}>
          {t("wisata")}
        </Link>
        <Link to="/akomodasi" className={location.pathname.startsWith("/akomodasi") ? "active" : ""}>
          {t("akomodasi")}
        </Link>
        <Link to="/kuliner" className={location.pathname.startsWith("/kuliner") ? "active" : ""}>
          {t("kuliner")}
        </Link>
        <Link to="/transportasi" className={location.pathname.startsWith("/transportasi") ? "active" : ""}>
          {t("transportasi")}
        </Link>
        <Link to="/kontak" className={location.pathname.startsWith("/kontak") ? "active" : ""}>
          {t("kontak")}
        </Link>

        <div className="language-selector">
          <button
            onClick={() => setLanguage("id")}
            className={`lang-btn ${language === "id" ? "active" : ""}`}
            aria-label="Bahasa Indonesia"
          >
            ID
          </button>
          <span className="lang-separator">|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`lang-btn ${language === "en" ? "active" : ""}`}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;