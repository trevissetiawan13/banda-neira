import { useState } from "react";
import kulinerData from "../data/kuliner";
import "./Kuliner.css";

function Kuliner() {
  const [filter, setFilter] = useState("Semua");

  const filteredData =
    filter === "Semua"
      ? kulinerData
      : kulinerData.filter((item) => item.jenis === filter);

  return (
    <main className="kuliner-page">
      <section className="kuliner-hero">
        <div className="kuliner-hero-content">
          <h1>Kuliner Khas Banda Neira</h1>
          <p>
            Jelajahi kelezatan kuliner lokal dengan cita rasa rempah-rempah
            asli Banda Neira yang menggugah selera.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="filter-tab kuliner-filter">
          {["Semua", "Makanan Utama", "Cemilan", "Minuman"].map((jenis) => (
            <button
              key={jenis}
              className={`filter-btn ${filter === jenis ? "active" : ""}`}
              onClick={() => setFilter(jenis)}
            >
              {jenis}
            </button>
          ))}
        </section>

        <section className="kuliner-grid">
          {filteredData.map((item) => (
            <article className="kuliner-card" key={item.id}>
              <img src={item.gambar} alt={item.nama} />
              <div className="kuliner-card-content">
                <span className="kuliner-badge">{item.jenis}</span>
                <h2>{item.nama}</h2>
                <p className="kuliner-desc">{item.deskripsi}</p>
                <p className="kuliner-lokasi">📍 {item.lokasi}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Kuliner;