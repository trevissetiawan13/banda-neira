import { useState } from "react";
import { Link } from "react-router-dom";
import wisataData from "../data/wisata";
import { useLanguage } from "../context/LanguageContext";
import "./Wisata.css";

function Wisata() {
  const [filter, setFilter] = useState("Semua");
  const { language, t } = useLanguage();

  const filteredData =
    filter === "Semua"
      ? wisataData
      : wisataData.filter((item) => item.kategori === filter);

  const categories = [
    { key: "Semua", labelKey: "all" },
    { key: "Sejarah", labelKey: "history" },
    { key: "Alam", labelKey: "nature" }
  ];

  return (
    <main className="wisata-page">
      <section className="page-hero" style={{ backgroundImage: "url('/images/wisata/benteng-belgica.jpg')" }}>
        <div className="page-hero-content">
          <h1>{t("wisataTitle")}</h1>
          <p>{t("wisataSub")}</p>
        </div>
      </section>

      <div className="container">
        <section className="filter-tab">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${filter === cat.key ? "active" : ""}`}
              onClick={() => setFilter(cat.key)}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </section>

        <section className="wisata-grid">
          {filteredData.length > 0 ? (
            filteredData.map((wisata) => (
              <article className="wisata-card" key={wisata.id}>
                <img src={wisata.gambar} alt={language === "en" ? wisata.nama_en || wisata.nama : wisata.nama} />

                <div className="wisata-card-content">
                  <span className="wisata-kategori">
                    {t(wisata.kategori === "Sejarah" ? "history" : "nature")}
                  </span>
                  <h2>{language === "en" ? wisata.nama_en || wisata.nama : wisata.nama}</h2>
                  <p>{language === "en" ? wisata.deskripsi_en || wisata.deskripsi : wisata.deskripsi}</p>
                  <p className="wisata-lokasi">
                    📍 {language === "en" ? wisata.lokasi_en || wisata.lokasi : wisata.lokasi}
                  </p>

                  <Link to={`/wisata/${wisata.id}`} className="wisata-button">
                    {t("detailBtn")}
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="no-results">{t("noWisata")}</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Wisata;