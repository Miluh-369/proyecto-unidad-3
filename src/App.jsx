import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Somos from "./pages/Somos";
import Mision from "./pages/Mision";
import Contacto from "./pages/Contacto";
import Galeria from "./components/galeria";
import ProgramarCitas from "./components/ProgramarCitas";
import Promociones from "./pages/Promociones";

// Componente que decide la vista según el rol del usuario
function ProtectedAgendar() {
  const { user } = useAuth();

  if (!user) return <Home />; // Usuario no logueado: mostramos Home

  // Redirigir según rol
  return user.role === "integrante" ? <ProgramarCitas /> : <ProgramarCitas />;
  // Aquí puedes crear un componente diferente para "cliente" si quieres
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/somos" element={<Somos />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/agendar" element={
            <RequireAuth>
              <ProtectedAgendar />
            </RequireAuth>
          } />
          <Route path="/Promociones" element={<Promociones />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
