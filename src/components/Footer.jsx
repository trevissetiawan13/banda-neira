import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            Banda Neira
          </Link>
          <p className="footer-slogan">
            {t("footerSlogan") || "Jelajahi keindahan sejarah dan pesona alam tersembunyi di Kepulauan Banda."}
          </p>
        </div>

        <div className="footer-links">
          <h4>{t("quickLinks") || "Tautan Pintas"}</h4>
          <nav aria-label="Navigasi Footer">
            <Link to="/">{t("home")}</Link>
            <Link to="/wisata">{t("wisata")}</Link>
            <Link to="/akomodasi">{t("akomodasi")}</Link>
            <Link to="/kuliner">{t("kuliner")}</Link>
            <Link to="/transportasi">{t("transportasi")}</Link>
            <Link to="/kontak">{t("kontak")}</Link>
          </nav>
        </div>

        <div className="footer-contact">
          <h4>{t("contactInfo") || "Informasi Kontak"}</h4>
          <p>📍 Jl. Pelabuhan Banda Neira, Maluku Tengah</p>
          <p>📞 +62 811-9131-332</p>
          <p>✉️ web.banda.neira@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {currentYear} Visit Banda Neira. All rights reserved.</p>
          <div className="social-links">
            <span className="social-text">@visitbandaneira</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
