import transportasiData from "../data/transportasi";
import { useLanguage } from "../context/LanguageContext";
import "./Transportasi.css";

function Transportasi() {
  const { language, t } = useLanguage();

  const menujuBanda = transportasiData.filter(item => item.moda !== "Speedboat");
  const lokal = transportasiData.filter(item => item.moda === "Speedboat");

  const renderTransportList = (list) => {
    return list.map(item => {
      const modaLabel = language === "en" ? item.moda_en || item.moda : item.moda;
      const namaLabel = language === "en" ? item.nama_en || item.nama : item.nama;
      const ruteLabel = language === "en" ? item.rute_en || item.rute : item.rute;
      const deskripsiLabel = language === "en" ? item.deskripsi_en || item.deskripsi : item.deskripsi;
      const hargaLabel = language === "en" ? item.harga_en || item.harga : item.harga;

      return (
        <article className="transportasi-card" key={item.id}>
          <img src={item.gambar} alt={namaLabel} />
          <div className="transportasi-info">
            <span className="transportasi-badge">{modaLabel}</span>
            <h3>{namaLabel}</h3>
            <p className="rute-info"><strong>{t("route")}:</strong> {ruteLabel}</p>
            <p>{deskripsiLabel}</p>
            <p className="harga-info"><strong>{t("estPrice")}:</strong> {hargaLabel}</p>
          </div>
        </article>
      );
    });
  };

  return (
    <main className="transportasi-page">
      <section className="page-header">
        <h1>{t("transPageTitle")}</h1>
        <p>{t("transPageSub")}</p>
      </section>

      <div className="container">
        <div className="transportasi-content">
          <section className="transportasi-section">
            <h2 className="section-title">🚢 {t("howToGet")}</h2>
            <div className="transportasi-list">
              {renderTransportList(menujuBanda)}
            </div>
          </section>

          <section className="transportasi-section">
            <h2 className="section-title">🚤 {t("localTrans")}</h2>
            <div className="transportasi-list">
              {renderTransportList(lokal)}
            </div>
          </section>
        </div>

        <section className="tips-perjalanan">
          <h2>💡 {t("tipsTitle")}</h2>
          <ul>
            <li>{t("tip1")}</li>
            <li>{t("tip2")}</li>
            <li>{t("tip3")}</li>
            <li>{t("tip4")}</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Transportasi;