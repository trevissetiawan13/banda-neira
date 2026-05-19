import { useState } from "react";
import akomodasiData from "../data/akomodasi";
import "./Akomodasi.css";

function Akomodasi() {
  const [filter, setFilter] = useState("Semua");

  const filteredData =
    filter === "Semua"
      ? akomodasiData
      : akomodasiData.filter((item) => item.tipe === filter);

  return (
    <main className="akomodasi-page">
      <section className="page-header">
        <h1>Akomodasi di Banda Neira</h1>
        <p>
          Pilih penginapan terbaik untuk kenyamanan liburan Anda, mulai dari
          hotel dengan pemandangan laut hingga homestay yang nyaman.
        </p>
      </section>

      <section className="filter-tab">
        {["Semua", "Hotel", "Guesthouse", "Homestay"].map((tipe) => (
          <button
            key={tipe}
            className={`filter-btn ${filter === tipe ? "active" : ""}`}
            onClick={() => setFilter(tipe)}
          >
            {tipe}
          </button>
        ))}
      </section>

      <section className="akomodasi-grid">
        {filteredData.map((item) => (
          <article className="akomodasi-card" key={item.id}>
            <img src={item.gambar} alt={item.nama} />
            <div className="akomodasi-card-content">
              <div className="akomodasi-meta">
                <span className="akomodasi-badge">{item.tipe}</span>
                <span className="akomodasi-rating">⭐ {item.rating}</span>
              </div>
              <h2>{item.nama}</h2>
              <p className="akomodasi-desc">{item.deskripsi}</p>
              
              <div className="akomodasi-fasilitas">
                {item.fasilitas.map((f, i) => (
                  <span key={i} className="fasilitas-tag">{f}</span>
                ))}
              </div>

              <div className="akomodasi-footer">
                <span className="akomodasi-harga">
                  Rp {item.harga.toLocaleString("id-ID")}<span>/malam</span>
                </span>
                <button className="akomodasi-btn">Pesan Sekarang</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Akomodasi;