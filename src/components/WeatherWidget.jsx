import { useState, useEffect } from "react";
import "./WeatherWidget.css";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

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
    if (code === 0) return { icon: "☀️", text: "Cerah" };
    if (code === 1 || code === 2 || code === 3) return { icon: "⛅", text: "Berawan" };
    if (code >= 45 && code <= 48) return { icon: "🌫️", text: "Berkabut" };
    if (code >= 51 && code <= 67) return { icon: "🌧️", text: "Hujan" };
    if (code >= 71 && code <= 77) return { icon: "❄️", text: "Salju" };
    if (code >= 80 && code <= 82) return { icon: "🌦️", text: "Hujan Deras" };
    if (code >= 95) return { icon: "⛈️", text: "Badai Petir" };
    return { icon: "🌡️", text: "Normal" };
  };

  const { icon, text } = getWeatherInfo(weather.weathercode);

  return (
    <div className="weather-widget">
      <div className="weather-icon">{icon}</div>
      <div className="weather-info">
        <span className="weather-temp">{Math.round(weather.temperature)}°C</span>
        <span className="weather-desc">{text} di Banda Neira</span>
      </div>
    </div>
  );
}

export default WeatherWidget;
