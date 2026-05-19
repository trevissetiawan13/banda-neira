import { Link } from "react-router-dom";
import wisataData from "../data/wisata";
import "./Wisata.css";

function Wisata() {
  return (
    <main className="wisata-page">
      <section className="wisata-header">
        <h1>Destinasi Wisata Banda Neira</h1>
        <p>
          Temukan berbagai destinasi wisata sejarah dan alam yang menjadi daya
          tarik utama Pulau Banda Neira.
        </p>
      </section>

      <section className="wisata-grid">
        {wisataData.map((wisata) => (
          <article className="wisata-card" key={wisata.id}>
            <img src={wisata.gambar} alt={wisata.nama} />

            <div className="wisata-card-content">
              <span className="wisata-kategori">{wisata.kategori}</span>
              <h2>{wisata.nama}</h2>
              <p>{wisata.deskripsi}</p>
              <p className="wisata-lokasi">{wisata.lokasi}</p>

              <Link to={`/wisata/${wisata.id}`} className="wisata-button">
                Lihat Detail
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Wisata;