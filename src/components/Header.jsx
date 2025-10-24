import "../assets/css/Header.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* Cambié el <a> por Link */}
          <Link to="/">
            <img src={logo} alt="Logo de Healthify" />
          </Link>
        </div>

        <ul className="links">
          <li>
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/somos">
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link className="link" to="/mision">
              Misión y Visión
            </Link>
          </li>
          <li>
            <Link className="link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
