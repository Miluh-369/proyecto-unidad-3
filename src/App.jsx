import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Somos from "./Somos";
import Mision from "./Mision";
import Contacto from "./Contacto";

export default function App() {
  return (
    <Router>
      {/* Header fijo arriba */}
      <Header />

      {/* Aquí cambian las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Footer fijo abajo */}
      <Footer />
    </Router>
  );
}
