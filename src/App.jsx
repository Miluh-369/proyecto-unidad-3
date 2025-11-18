import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Somos from "./pages/Somos";
import Mision from "./pages/Mision";
import Contacto from "./pages/Contacto";
import Galeria from "./components/galeria"; // 👈 nuevo import
import ProgramarCitas from "./components/AgendarCitas";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<Galeria />} /> {/* 👈 nueva ruta */}
        <Route path="/agendar" element={<AgendarCitas/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
