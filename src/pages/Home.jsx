import { Link } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";
import { useLanguage } from "../context/LanguageContext";
import "./Home.css";

function Home() {
  const { t } = useLanguage();

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            {t("welcome")} <br />
            {t("welcomeSub")}
          </h1>

          <div className="hero-actions">
            <Link to="/wisata" className="hero-button">
              {t("exploreBtn")}
            </Link>
            
            <div className="weather-container">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section container">
        <div className="about-content">
          <h2>{t("aboutTitle")}</h2>
          <p>{t("aboutP1")}</p>
          <p>{t("aboutP2")}</p>
        </div>
        <div className="about-image">
          <img src="/images/wisata/istana-mini.jpg" alt="Pemandangan Banda Neira" />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="page-header">
            <h2>{t("exploreBanda")}</h2>
            <p>{t("exploreBandaSub")}</p>
          </div>
          
          <div className="categories-grid">
            <Link to="/wisata" className="category-card">
              <div className="category-icon">🏛️</div>
              <h3>{t("destTitle")}</h3>
              <p>{t("destDesc")}</p>
            </Link>
            <Link to="/akomodasi" className="category-card">
              <div className="category-icon">🏨</div>
              <h3>{t("accomTitle")}</h3>
              <p>{t("accomDesc")}</p>
            </Link>
            <Link to="/kuliner" className="category-card">
              <div className="category-icon">🍽️</div>
              <h3>{t("culinaryTitle")}</h3>
              <p>{t("culinaryDesc")}</p>
            </Link>
            <Link to="/transportasi" className="category-card">
              <div className="category-icon">🚢</div>
              <h3>{t("transTitle")}</h3>
              <p>{t("transDesc")}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-container">
          <div className="stat-item">
            <span className="stat-number">400+</span>
            <span className="stat-label">{t("statHistory")}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">11</span>
            <span className="stat-label">{t("statIslands")}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">{t("statSpots")}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;