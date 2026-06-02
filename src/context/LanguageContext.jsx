/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const translations = {
  id: {
    // Navbar
    home: "Beranda",
    wisata: "Wisata",
    akomodasi: "Akomodasi",
    kuliner: "Kuliner",
    transportasi: "Transportasi",
    kontak: "Kontak",
    logo: "Kepulauan Banda",
    
    // Home
    welcome: "Selamat Datang di",
    welcomeSub: "Pulau Banda Neira",
    exploreBtn: "Jelajah Wisata",
    aboutTitle: "Surga Kecil di Timur Indonesia",
    aboutP1: "Banda Neira adalah sebuah pulau bersejarah di Kepulauan Banda, Maluku Tengah. Pernah menjadi pusat perdagangan pala dunia, pulau ini menyimpan pesona alam yang memukau dan peninggalan kolonial yang masih berdiri kokoh.",
    aboutP2: "Dari keindahan taman lautnya hingga kemegahan Benteng Belgica, Banda Neira menawarkan pengalaman liburan yang tak terlupakan bagi pecinta alam dan sejarah.",
    exploreBanda: "Jelajahi Banda Neira",
    exploreBandaSub: "Temukan berbagai hal menarik yang bisa Anda nikmati selama berada di Kepulauan Banda.",
    destTitle: "Destinasi Wisata",
    destDesc: "Eksplorasi benteng bersejarah dan alam laut.",
    accomTitle: "Akomodasi",
    accomDesc: "Pilihan penginapan nyaman untuk Anda.",
    culinaryTitle: "Kuliner Khas",
    culinaryDesc: "Cicipi lezatnya hidangan berbumbu pala & kenari.",
    transTitle: "Panduan Transportasi",
    transDesc: "Informasi rute dan cara menuju Banda Neira.",
    statHistory: "Tahun Sejarah",
    statIslands: "Pulau Indah",
    statSpots: "Spot Menyelam",
    
    // Wisata
    wisataTitle: "Destinasi Wisata Banda Neira",
    wisataSub: "Temukan berbagai destinasi wisata sejarah dan alam yang menjadi daya tarik utama Pulau Banda Neira.",
    searchWisata: "Cari destinasi wisata...",
    all: "Semua",
    history: "Sejarah",
    nature: "Alam",
    detailBtn: "Lihat Detail",
    noWisata: "Wisata tidak ditemukan.",

    // Detail Wisata
    backWisata: "Kembali ke Wisata",
    aboutWisata: "Tentang",
    photoGallery: "Galeri Foto",
    practicalInfo: "Informasi Praktis",
    openHours: "Jam Buka",
    ticketPrice: "Harga Tiket",
    coordinates: "Koordinat",
    otherWisata: "Wisata Lainnya",
    notFoundWisata: "Wisata tidak ditemukan",
    backToHome: "Kembali ke halaman wisata",

    // Akomodasi
    accomPageTitle: "Akomodasi di Banda Neira",
    accomPageSub: "Pilih penginapan terbaik untuk kenyamanan liburan Anda, mulai dari hotel dengan pemandangan laut hingga homestay yang nyaman.",
    facilities: "Fasilitas",
    estimation: "Estimasi",
    location: "Lokasi",
    contact: "Kontak",
    whatsapp: "Hubungi via WhatsApp",
    noAccom: "Akomodasi tidak ditemukan.",
    hotel: "Hotel",
    guesthouse: "Guesthouse",
    homestay: "Homestay",

    // Kuliner
    culinaryPageTitle: "Kuliner Khas Banda Neira",
    culinaryPageSub: "Jelajahi kelezatan kuliner lokal dengan cita rasa rempah-rempah asli Banda Neira yang menggugah selera.",
    mainDish: "Makanan Utama",
    snack: "Cemilan",
    beverage: "Minuman",
    noCulinary: "Kuliner tidak ditemukan.",

    // Transportasi
    transPageTitle: "Panduan Transportasi",
    transPageSub: "Temukan cara terbaik menuju Banda Neira dan pilihan transportasi untuk menjelajahi pulau-pulau di sekitarnya.",
    howToGet: "Cara Menuju Banda Neira",
    localTrans: "Transportasi Lokal (Antar Pulau)",
    route: "Rute",
    estPrice: "Estimasi Harga",
    tipsTitle: "Tips Perjalanan",
    tip1: "Cek jadwal kapal Pelni secara berkala karena jadwal sering berubah.",
    tip2: "Pemesanan tiket pesawat perintis (Susi Air/Sam Air) biasanya harus dilakukan langsung di bandara.",
    tip3: "Bawa uang tunai yang cukup, karena mesin ATM terbatas di Banda Neira.",
    tip4: "Perjalanan laut ke Banda Neira sangat bergantung pada cuaca dan musim (hindari musim ombak tinggi di bulan Juli-Agustus).",

    // Kontak
    contactPageTitle: "Hubungi Kami",
    contactPageSub: "Punya pertanyaan seputar wisata di Banda Neira? Jangan ragu untuk menghubungi kami melalui form di bawah ini atau kunjungi kantor informasi kami.",
    contactInfo: "Informasi Kontak",
    address: "Alamat",
    phone: "Telepon",
    email: "Email",
    sendMessage: "Kirim Pesan",
    fullName: "Nama Lengkap",
    emailAddr: "Alamat Email",
    message: "Pesan",
    namePlaceholder: "Masukkan nama Anda",
    emailPlaceholder: "Masukkan email aktif",
    messagePlaceholder: "Tulis pesan atau pertanyaan Anda di sini...",
    sending: "Mengirim...",
    sendSuccess: "Pesan Anda telah berhasil dikirim. Kami akan membalas secepatnya!",
    sendError: "Gagal mengirim pesan, silakan coba lagi.",
    networkError: "Terjadi kesalahan jaringan.",

    // Weather widget
    weatherInBanda: "di Banda Neira",
    weatherNormal: "Normal",
    weatherSunny: "Cerah",
    weatherCloudy: "Berawan",
    weatherFoggy: "Berkabut",
    weatherRainy: "Hujan",
    weatherSnowy: "Salju",
    weatherHeavyRain: "Hujan Deras",
    weatherThunderstorm: "Badai Petir",

    // Footer
    footerSlogan: "Jelajahi keindahan sejarah dan pesona alam tersembunyi di Kepulauan Banda.",
    quickLinks: "Tautan Pintas",
  },
  en: {
    // Navbar
    home: "Home",
    wisata: "Tourism",
    akomodasi: "Accommodation",
    kuliner: "Culinary",
    transportasi: "Transportation",
    kontak: "Contact",
    logo: "Banda Islands",

    // Home
    welcome: "Welcome To",
    welcomeSub: "Banda Neira Island",
    exploreBtn: "Explore Tourism",
    aboutTitle: "A Tiny Paradise in Eastern Indonesia",
    aboutP1: "Banda Neira is a historical island in the Banda Islands, Central Maluku. Once the center of the world's nutmeg trade, this island preserves stunning natural charm and colonial heritage that still stands strong.",
    aboutP2: "From the beauty of its marine park to the grandeur of Fort Belgica, Banda Neira offers an unforgettable holiday experience for nature and history lovers.",
    exploreBanda: "Explore Banda Neira",
    exploreBandaSub: "Find various interesting things you can enjoy during your stay in the Banda Islands.",
    destTitle: "Tourist Destinations",
    destDesc: "Explore historical forts and marine nature.",
    accomTitle: "Accommodations",
    accomDesc: "Comfortable lodging choices for you.",
    culinaryTitle: "Local Culinary",
    culinaryDesc: "Taste the delicious dishes seasoned with nutmeg & walnut.",
    transTitle: "Transportation Guide",
    transDesc: "Information on routes and how to get to Banda Neira.",
    statHistory: "Years of History",
    statIslands: "Beautiful Islands",
    statSpots: "Diving Spots",

    // Wisata
    wisataTitle: "Banda Neira Tourist Destinations",
    wisataSub: "Discover various historical and natural tourist destinations that are the main attractions of Banda Neira Island.",
    searchWisata: "Search destinations...",
    all: "All",
    history: "History",
    nature: "Nature",
    detailBtn: "View Details",
    noWisata: "Destinations not found.",

    // Detail Wisata
    backWisata: "Back to Tourism",
    aboutWisata: "About",
    photoGallery: "Gallery",
    practicalInfo: "Practical Information",
    openHours: "Open Hours",
    ticketPrice: "Ticket Price",
    coordinates: "Coordinates",
    otherWisata: "Other Tourist Spots",
    notFoundWisata: "Tourism spot not found",
    backToHome: "Back to tourism page",

    // Akomodasi
    accomPageTitle: "Accommodations in Banda Neira",
    accomPageSub: "Choose the best lodging for your holiday comfort, ranging from seaside hotels to cozy homestays.",
    facilities: "Facilities",
    estimation: "Estimation",
    location: "Location",
    contact: "Contact",
    whatsapp: "Contact via WhatsApp",
    noAccom: "Accommodation not found.",
    hotel: "Hotel",
    guesthouse: "Guesthouse",
    homestay: "Homestay",

    // Kuliner
    culinaryPageTitle: "Banda Neira Local Culinary",
    culinaryPageSub: "Explore the deliciousness of local culinary with the authentic spices of Banda Neira that whet your appetite.",
    mainDish: "Main Course",
    snack: "Snack",
    beverage: "Drink",
    noCulinary: "Culinary not found.",

    // Transportasi
    transPageTitle: "Transportation Guide",
    transPageSub: "Find the best way to get to Banda Neira and transportation options to explore the surrounding islands.",
    howToGet: "How to Get to Banda Neira",
    localTrans: "Local Transportation (Inter-Island)",
    route: "Route",
    estPrice: "Estimated Price",
    tipsTitle: "Travel Tips",
    tip1: "Check the Pelni ship schedule regularly as schedules change frequently.",
    tip2: "Booking pioneer flight tickets (Susi Air/Sam Air) usually has to be done directly at the airport.",
    tip3: "Bring enough cash, as ATM machines are limited in Banda Neira.",
    tip4: "Sea travel to Banda Neira highly depends on the weather and season (avoid high waves season in July-August).",

    // Kontak
    contactPageTitle: "Contact Us",
    contactPageSub: "Have questions about tourism in Banda Neira? Do not hesitate to contact us through the form below or visit our information office.",
    contactInfo: "Contact Information",
    address: "Address",
    phone: "Phone",
    email: "Email",
    sendMessage: "Send Message",
    fullName: "Full Name",
    emailAddr: "Email Address",
    message: "Message",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your active email",
    messagePlaceholder: "Write your message or question here...",
    sending: "Sending...",
    sendSuccess: "Your message has been sent successfully. We will reply as soon as possible!",
    sendError: "Failed to send message, please try again.",
    networkError: "A network error occurred.",

    // Weather widget
    weatherInBanda: "in Banda Neira",
    weatherNormal: "Normal",
    weatherSunny: "Sunny",
    weatherCloudy: "Cloudy",
    weatherFoggy: "Foggy",
    weatherRainy: "Rainy",
    weatherSnowy: "Snowy",
    weatherHeavyRain: "Heavy Rain",
    weatherThunderstorm: "Thunderstorm",

    // Footer
    footerSlogan: "Explore the historical beauty and hidden natural charms of the Banda Islands.",
    quickLinks: "Quick Links",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("language") || "id";
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
