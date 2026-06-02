import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Kontak.css";

function Kontak() {
  const { t } = useLanguage();
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
        const response = await fetch("https://formspree.io/f/xjgznrwk", {
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
          setErrorMsg(t("sendError"));
        }
      } catch {
        setErrorMsg(t("networkError"));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="kontak-page">
      <section className="page-hero" style={{ backgroundImage: "url('/images/umum/hero-banda.jpg')" }}>
        <div className="page-hero-content">
          <h1>{t("contactPageTitle")}</h1>
          <p>{t("contactPageSub")}</p>
        </div>
      </section>

      <div className="container">
        <div className="kontak-wrapper">
          <section className="kontak-info-section">
            <h2>{t("contactInfo")}</h2>
            <div className="kontak-info-list">
              <div className="kontak-item">
                <span className="kontak-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/>
                    <circle cx="12" cy="10" r="2"/>
                  </svg>
                </span>
                <div>
                  <strong>{t("address")}</strong>
                  <p>Jl. Pelabuhan Banda Neira, Nusantara, Maluku Tengah, Maluku 97593</p>
                </div>
              </div>
              <div className="kontak-item">
                <span className="kontak-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <strong>{t("phone")}</strong>
                  <p>+62 811-9131-332</p>
                </div>
              </div>
              <div className="kontak-item">
                <span className="kontak-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <div>
                  <strong>{t("email")}</strong>
                  <p>web.banda.neira@gmail.com</p>
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
            <h2>{t("sendMessage")}</h2>
            {isSubmitted && (
              <div className="alert-success">
                ✅ {t("sendSuccess")}
              </div>
            )}
            {errorMsg && (
              <div className="alert-error" style={{ color: "red", backgroundColor: "#fee2e2", padding: "12px", borderRadius: "8px", marginBottom: "20px" }}>
                ❌ {errorMsg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="kontak-form">
              <div className="form-group">
                <label htmlFor="nama">{t("fullName")}</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t("emailAddr")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pesan">{t("message")}</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows="6"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? t("sending") : t("sendMessage")}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Kontak;