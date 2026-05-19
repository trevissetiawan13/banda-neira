import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Welcome To <br />
            Banda Neira Island
          </h1>

          <Link to="/wisata" className="hero-button">
            Jelajah Wisata
          </Link>
        </div>
      </section>

      <section className="about-section container">
        <div className="about-content">
          <h2>Surga Kecil di Timur Indonesia</h2>
          <p>
            Banda Neira adalah sebuah pulau bersejarah di Kepulauan Banda, Maluku Tengah. 
            Pernah menjadi pusat perdagangan pala dunia, pulau ini menyimpan pesona 
            alam yang memukau dan peninggalan kolonial yang masih berdiri kokoh.
          </p>
          <p>
            Dari keindahan taman lautnya hingga kemegahan Benteng Belgica, 
            Banda Neira menawarkan pengalaman liburan yang tak terlupakan 
            bagi pecinta alam dan sejarah.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/wisata/istana-mini.jpg" alt="Pemandangan Banda Neira" />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="page-header">
            <h2>Jelajahi Banda Neira</h2>
            <p>Temukan berbagai hal menarik yang bisa Anda nikmati selama berada di Kepulauan Banda.</p>
          </div>
          
          <div className="categories-grid">
            <Link to="/wisata" className="category-card">
              <div className="category-icon">🏛️</div>
              <h3>Destinasi Wisata</h3>
              <p>Eksplorasi benteng bersejarah dan alam laut.</p>
            </Link>
            <Link to="/akomodasi" className="category-card">
              <div className="category-icon">🏨</div>
              <h3>Akomodasi</h3>
              <p>Pilihan penginapan nyaman untuk Anda.</p>
            </Link>
            <Link to="/kuliner" className="category-card">
              <div className="category-icon">🍽️</div>
              <h3>Kuliner Khas</h3>
              <p>Cicipi lezatnya hidangan berbumbu pala & kenari.</p>
            </Link>
            <Link to="/transportasi" className="category-card">
              <div className="category-icon">🚢</div>
              <h3>Panduan Transportasi</h3>
              <p>Informasi rute dan cara menuju Banda Neira.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-container">
          <div className="stat-item">
            <span className="stat-number">400+</span>
            <span className="stat-label">Tahun Sejarah</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">11</span>
            <span className="stat-label">Pulau Indah</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Spot Menyelam</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;