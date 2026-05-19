import { useParams, Link } from "react-router-dom";
import wisataData from "../data/wisata";
import "./DetailWisata.css";

function DetailWisata() {
  const { id } = useParams();

  const wisata = wisataData.find(
    (item) => item.id === parseInt(id)
  );

  if (!wisata) {
    return (
      <div className="detail-not-found">
        <h1>Wisata tidak ditemukan</h1>
        <Link to="/wisata">Kembali ke halaman wisata</Link>
      </div>
    );
  }

  const relatedWisata = wisataData
    .filter(item => item.id !== wisata.id)
    .slice(0, 3);

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="detail-hero-overlay"></div>
        <img src={wisata.gambar} alt={wisata.nama} className="detail-hero-img" />
        <div className="detail-hero-text">
          <div className="breadcrumb">
            <Link to="/">Beranda</Link> &raquo; <Link to="/wisata">Wisata</Link> &raquo; <span>{wisata.nama}</span>
          </div>
          <h1>{wisata.nama}</h1>
          <p>📍 {wisata.lokasi}</p>
        </div>
      </section>

      <div className="container detail-container">
        <div className="detail-main">
          <section className="detail-section">
            <h2>Tentang {wisata.nama}</h2>
            <span className="detail-badge">{wisata.kategori}</span>
            <p className="detail-desc">{wisata.deskripsiPanjang || wisata.deskripsi}</p>
          </section>

          {wisata.gambarGaleri && wisata.gambarGaleri.length > 0 && (
            <section className="detail-section">
              <h2>Galeri</h2>
              <div className="detail-gallery">
                {wisata.gambarGaleri.map((img, idx) => (
                  <img key={idx} src={img} alt={`Galeri ${wisata.nama} ${idx + 1}`} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="detail-sidebar">
          <div className="info-card">
            <h3>Informasi Praktis</h3>
            <div className="info-item">
              <strong>🕒 Jam Buka:</strong>
              <p>{wisata.jamBuka || "24 Jam"}</p>
            </div>
            <div className="info-item">
              <strong>🎟️ Harga Tiket:</strong>
              <p>{wisata.hargaTiket || "Gratis"}</p>
            </div>
            <div className="info-item">
              <strong>🧭 Koordinat:</strong>
              <p>{wisata.koordinat || "N/A"}</p>
            </div>
          </div>

          <div className="related-wisata">
            <h3>Wisata Lainnya</h3>
            <div className="related-list">
              {relatedWisata.map(item => (
                <Link to={`/wisata/${item.id}`} className="related-card" key={item.id}>
                  <img src={item.gambar} alt={item.nama} />
                  <div className="related-info">
                    <h4>{item.nama}</h4>
                    <span>{item.kategori}</span>
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