import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./WeatherWidget.css";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Koordinat Banda Neira: -4.5267, 129.9011
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-4.5267&longitude=129.9011&current_weather=true"
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading || !weather) return null;

  // Mengubah kode cuaca (WMO) menjadi icon dan deskripsi sederhana
  const getWeatherInfo = (code) => {
    if (code === 0) return { icon: "☀️", textKey: "weatherSunny" };
    if (code === 1 || code === 2 || code === 3) return { icon: "⛅", textKey: "weatherCloudy" };
    if (code >= 45 && code <= 48) return { icon: "🌫️", textKey: "weatherFoggy" };
    if (code >= 51 && code <= 67) return { icon: "🌧️", textKey: "weatherRainy" };
    if (code >= 71 && code <= 77) return { icon: "❄️", textKey: "weatherSnowy" };
    if (code >= 80 && code <= 82) return { icon: "🌦️", textKey: "weatherHeavyRain" };
    if (code >= 95) return { icon: "⛈️", textKey: "weatherThunderstorm" };
    return { icon: "🌡️", textKey: "weatherNormal" };
  };

  const { icon, textKey } = getWeatherInfo(weather.weathercode);

  return (
    <div className="weather-widget">
      <div className="weather-icon">{icon}</div>
      <div className="weather-info">
        <span className="weather-temp">{Math.round(weather.temperature)}°C</span>
        <span className="weather-desc">{t(textKey)} {t("weatherInBanda")}</span>
      </div>
    </div>
  );
}

export default WeatherWidget;
