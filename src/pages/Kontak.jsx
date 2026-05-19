import { useState } from "react";
import "./Kontak.css";

function Kontak() {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.nama && formData.email && formData.pesan) {
      setIsSubmitting(true);
      setErrorMsg(null);

      try {
        const response = await fetch("https://formspree.io/f/xgoqvpko", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ nama: "", email: "", pesan: "" });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          setErrorMsg("Gagal mengirim pesan, silakan coba lagi.");
        }
      } catch (error) {
        setErrorMsg("Terjadi kesalahan jaringan.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="kontak-page">
      <section className="page-header">
        <h1>Hubungi Kami</h1>
        <p>
          Punya pertanyaan seputar wisata di Banda Neira? Jangan ragu untuk
          menghubungi kami melalui form di bawah ini atau kunjungi kantor
          informasi kami.
        </p>
      </section>

      <div className="container">
        <div className="kontak-wrapper">
          <section className="kontak-info-section">
            <h2>Informasi Kontak</h2>
            <div className="kontak-info-list">
              <div className="kontak-item">
                <span className="kontak-icon">📍</span>
                <div>
                  <strong>Alamat</strong>
                  <p>Jl. Pelabuhan Banda Neira, Nusantara, Maluku Tengah, Maluku 97593</p>
                </div>
              </div>
              <div className="kontak-item">
                <span className="kontak-icon">📞</span>
                <div>
                  <strong>Telepon</strong>
                  <p>+62 811-2233-4455</p>
                </div>
              </div>
              <div className="kontak-item">
                <span className="kontak-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@wisatabandaneira.id</p>
                </div>
              </div>
            </div>

            <div className="kontak-map">
              <iframe
                title="Peta Banda Neira"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15876.536965851478!2d129.890695!3d-4.527376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d14f44f50f2f3f1%3A0x6e9a6c7c2b6f4c9c!2sBanda%20Neira!5e0!3m2!1sen!2sid!4v1689304381023!5m2!1sen!2sid"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          <section className="kontak-form-section">
            <h2>Kirim Pesan</h2>
            {isSubmitted && (
              <div className="alert-success">
                ✅ Pesan Anda telah berhasil dikirim. Kami akan membalas secepatnya!
              </div>
            )}
            {errorMsg && (
              <div className="alert-error" style={{ color: "red", backgroundColor: "#fee2e2", padding: "12px", borderRadius: "8px", marginBottom: "20px" }}>
                ❌ {errorMsg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="kontak-form">
              <div className="form-group">
                <label htmlFor="nama">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email aktif"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pesan">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows="6"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Kontak;