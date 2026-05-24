import { useParams, Link } from "react-router-dom";
import wisataData from "../data/wisata";
import { useLanguage } from "../context/LanguageContext";
import "./DetailWisata.css";

function DetailWisata() {
  const { id } = useParams();
  const { language, t } = useLanguage();

  const wisata = wisataData.find(
    (item) => item.id === parseInt(id)
  );

  if (!wisata) {
    return (
      <div className="detail-not-found">
        <h1>{t("notFoundWisata")}</h1>
        <Link to="/wisata">{t("backToHome")}</Link>
      </div>
    );
  }

  const relatedWisata = wisataData
    .filter(item => item.id !== wisata.id)
    .slice(0, 3);

  const namaWisata = language === "en" ? wisata.nama_en || wisata.nama : wisata.nama;
  const lokasiWisata = language === "en" ? wisata.lokasi_en || wisata.lokasi : wisata.lokasi;
  const kategoriWisata = t(wisata.kategori === "Sejarah" ? "history" : "nature");
  const deskripsiWisata = language === "en"
    ? wisata.deskripsiPanjang_en || wisata.deskripsiPanjang || wisata.deskripsi_en || wisata.deskripsi
    : wisata.deskripsiPanjang || wisata.deskripsi;
  const jamBukaWisata = language === "en" ? wisata.jamBuka_en || wisata.jamBuka : wisata.jamBuka;
  const hargaTiketWisata = language === "en" ? wisata.hargaTiket_en || wisata.hargaTiket : wisata.hargaTiket;

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="detail-hero-overlay"></div>
        <img src={wisata.gambar} alt={namaWisata} className="detail-hero-img" />
        <div className="detail-hero-text">
          <div className="breadcrumb">
            <Link to="/">{t("home")}</Link> &raquo; <Link to="/wisata">{t("wisata")}</Link> &raquo; <span>{namaWisata}</span>
          </div>
          <h1>{namaWisata}</h1>
          <p>📍 {lokasiWisata}</p>
        </div>
      </section>

      <div className="container detail-container">
        <div className="detail-main">
          <section className="detail-section">
            <h2>{t("aboutWisata")} {namaWisata}</h2>
            <span className="detail-badge">{kategoriWisata}</span>
            <p className="detail-desc">{deskripsiWisata}</p>
          </section>

          {wisata.gambarGaleri && wisata.gambarGaleri.length > 0 && (
            <section className="detail-section">
              <h2>{t("photoGallery")}</h2>
              <div className="detail-gallery">
                {wisata.gambarGaleri.map((img, idx) => (
                  <img key={idx} src={img} alt={`Galeri ${namaWisata} ${idx + 1}`} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="detail-sidebar">
          <div className="info-card">
            <h3>{t("practicalInfo")}</h3>
            <div className="info-item">
              <strong>🕒 {t("openHours")}:</strong>
              <p>{jamBukaWisata || "24 Jam"}</p>
            </div>
            <div className="info-item">
              <strong>🎟️ {t("ticketPrice")}:</strong>
              <p>{hargaTiketWisata || "Gratis"}</p>
            </div>
            <div className="info-item">
              <strong>🧭 {t("coordinates")}:</strong>
              <p>{wisata.koordinat || "N/A"}</p>
            </div>
          </div>

          <div className="related-wisata">
            <h3>{t("otherWisata")}</h3>
            <div className="related-list">
              {relatedWisata.map(item => (
                <Link to={`/wisata/${item.id}`} className="related-card" key={item.id}>
                  <img src={item.gambar} alt={language === "en" ? item.nama_en || item.nama : item.nama} />
                  <div className="related-info">
                    <h4>{language === "en" ? item.nama_en || item.nama : item.nama}</h4>
                    <span>{t(item.kategori === "Sejarah" ? "history" : "nature")}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default DetailWisata;