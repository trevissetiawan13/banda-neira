import { useState } from "react";
import akomodasiData from "../data/akomodasi";
import { useLanguage } from "../context/LanguageContext";
import "./Akomodasi.css";

function Akomodasi() {
  const [filter, setFilter] = useState("Semua");
  const { language, t } = useLanguage();

  const filteredData =
    filter === "Semua"
      ? akomodasiData
      : akomodasiData.filter((item) => item.tipe === filter);

  const categories = [
    { key: "Semua", labelKey: "all" },
    { key: "Hotel", labelKey: "hotel" },
    { key: "Guesthouse", labelKey: "guesthouse" },
    { key: "Homestay", labelKey: "homestay" }
  ];

  return (
    <main className="akomodasi-page">
      <section className="page-hero" style={{ backgroundImage: "url('/images/akomodasi/cilu-bintang.jpg')" }}>
        <div className="page-hero-content">
          <h1>{t("accomPageTitle")}</h1>
          <p>{t("accomPageSub")}</p>
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

        <section className="akomodasi-grid">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const tipeLabel = t(item.tipe.toLowerCase());
              const deskripsiLabel = language === "en" ? item.deskripsi_en || item.deskripsi : item.deskripsi;
              const fasilitasItems = language === "en" ? item.fasilitas_en || item.fasilitas : item.fasilitas;
              const hargaLabel = language === "en" ? item.harga_en || item.harga : item.harga;
              const lokasiLabel = language === "en" ? item.lokasi_en || item.lokasi : item.lokasi;

              return (
                <article className="akomodasi-card" key={item.id}>
                  <img src={item.gambar} alt={item.nama} />
                  <div className="akomodasi-card-content">
                    <div className="akomodasi-meta">
                      <span className="akomodasi-badge">{tipeLabel}</span>
                      <span className="akomodasi-rating">⭐ {item.rating}</span>
                    </div>
                    <h2>{item.nama}</h2>
                    <p className="akomodasi-desc">{deskripsiLabel}</p>
                    
                    <div className="akomodasi-fasilitas">
                      {fasilitasItems.map((f, i) => (
                        <span key={i} className="fasilitas-tag">{f}</span>
                      ))}
                    </div>

                    <div className="akomodasi-footer">
                      <div className="akomodasi-info-item">
                        <span className="info-label">💰 {t("estimation")}:</span>
                        <span className="info-value">{hargaLabel}</span>
                      </div>
                      <div className="akomodasi-info-item">
                        <span className="info-label">📍 {t("location")}:</span>
                        <span className="info-value">{lokasiLabel}</span>
                      </div>
                      <div className="akomodasi-info-item">
                        <span className="info-label">📞 {t("contact")}:</span>
                        <a href={`tel:${item.kontak}`} className="info-link">{item.kontak}</a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="no-results">{t("noAccom")}</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Akomodasi;