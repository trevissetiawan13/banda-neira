import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Wisata from "./pages/Wisata";
import DetailWisata from "./pages/DetailWisata";
import Akomodasi from "./pages/Akomodasi";
import Kuliner from "./pages/Kuliner";
import Transportasi from "./pages/Transportasi";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/wisata/:id" element={<DetailWisata />} />
        <Route path="/akomodasi" element={<Akomodasi />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/transportasi" element={<Transportasi />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </>
  );
}

export default App;