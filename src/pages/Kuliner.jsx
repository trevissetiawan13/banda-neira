import { useState } from "react";
import kulinerData from "../data/kuliner";
import { useLanguage } from "../context/LanguageContext";
import "./Kuliner.css";

function Kuliner() {
  const [filter, setFilter] = useState("Semua");
  const { language, t } = useLanguage();

  const filteredData =
    filter === "Semua"
      ? kulinerData
      : kulinerData.filter((item) => item.jenis === filter);

  const categories = [
    { key: "Semua", labelKey: "all" },
    { key: "Makanan Utama", labelKey: "mainDish" },
    { key: "Cemilan", labelKey: "snack" },
    { key: "Minuman", labelKey: "beverage" }
  ];

  const getJenisLabel = (jenis) => {
    if (jenis === "Makanan Utama") return t("mainDish");
    if (jenis === "Cemilan") return t("snack");
    if (jenis === "Minuman") return t("beverage");
    return jenis;
  };

  return (
    <main className="kuliner-page">
      <section className="kuliner-hero">
        <div className="kuliner-hero-content">
          <h1>{t("culinaryPageTitle")}</h1>
          <p>{t("culinaryPageSub")}</p>
        </div>
      </section>

      <div className="container">
        <section className="filter-tab kuliner-filter">
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

        <section className="kuliner-grid">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const namaLabel = language === "en" ? item.nama_en || item.nama : item.nama;
              const jenisLabel = getJenisLabel(item.jenis);
              const deskripsiLabel = language === "en" ? item.deskripsi_en || item.deskripsi : item.deskripsi;
              const lokasiLabel = language === "en" ? item.lokasi_en || item.lokasi : item.lokasi;

              return (
                <article className="kuliner-card" key={item.id}>
                  <img src={item.gambar} alt={namaLabel} />
                  <div className="kuliner-card-content">
                    <span className="kuliner-badge">{jenisLabel}</span>
                    <h2>{namaLabel}</h2>
                    <p className="kuliner-desc">{deskripsiLabel}</p>
                    <p className="kuliner-lokasi">📍 {lokasiLabel}</p>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="no-results">{t("noCulinary")}</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Kuliner;