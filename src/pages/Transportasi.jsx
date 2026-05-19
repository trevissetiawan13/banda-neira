import transportasiData from "../data/transportasi";
import "./Transportasi.css";

function Transportasi() {
  const menujuBanda = transportasiData.filter(item => item.moda !== "Speedboat");
  const lokal = transportasiData.filter(item => item.moda === "Speedboat");

  return (
    <main className="transportasi-page">
      <section className="page-header">
        <h1>Panduan Transportasi</h1>
        <p>
          Temukan cara terbaik menuju Banda Neira dan pilihan transportasi 
          untuk menjelajahi pulau-pulau di sekitarnya.
        </p>
      </section>

      <div className="container">
        <div className="transportasi-content">
          <section className="transportasi-section">
            <h2 className="section-title">🚢 Cara Menuju Banda Neira</h2>
            <div className="transportasi-list">
              {menujuBanda.map(item => (
                <article className="transportasi-card" key={item.id}>
                  <img src={item.gambar} alt={item.nama} />
                  <div className="transportasi-info">
                    <span className="transportasi-badge">{item.moda}</span>
                    <h3>{item.nama}</h3>
                    <p className="rute-info"><strong>Rute:</strong> {item.rute}</p>
                    <p>{item.deskripsi}</p>
                    <p className="harga-info"><strong>Estimasi Harga:</strong> {item.harga}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="transportasi-section">
            <h2 className="section-title">🚤 Transportasi Lokal (Antar Pulau)</h2>
            <div className="transportasi-list">
              {lokal.map(item => (
                <article className="transportasi-card" key={item.id}>
                  <img src={item.gambar} alt={item.nama} />
                  <div className="transportasi-info">
                    <span className="transportasi-badge">{item.moda}</span>
                    <h3>{item.nama}</h3>
                    <p className="rute-info"><strong>Rute:</strong> {item.rute}</p>
                    <p>{item.deskripsi}</p>
                    <p className="harga-info"><strong>Estimasi Harga:</strong> {item.harga}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="tips-perjalanan">
          <h2>💡 Tips Perjalanan</h2>
          <ul>
            <li>Cek jadwal kapal Pelni secara berkala karena jadwal sering berubah.</li>
            <li>Pemesanan tiket pesawat perintis (Susi Air/Sam Air) biasanya harus dilakukan langsung di bandara.</li>
            <li>Bawa uang tunai yang cukup, karena mesin ATM terbatas di Banda Neira.</li>
            <li>Perjalanan laut ke Banda Neira sangat bergantung pada cuaca dan musim (hindari musim ombak tinggi di bulan Juli-Agustus).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Transportasi;