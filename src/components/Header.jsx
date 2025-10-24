import "../assets/css/Header.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="./index.html">
            <img src={logo} alt="Logo de Healthify" />
          </a>
        </div>

        <ul className="links">
          <li>
            <a className="link" href="../assets/pages/Home.jsx">
              Inicio{" "}
            </a>
          </li>
          <li>
            <a className="link" href="./assets/pages/somos.jsx">
              Quiénes somos{" "}
            </a>
          </li>
          <li>
            <a className="link" href="./assets/pages/mision.jsx">
              Misión y Visión{" "}
            </a>
          </li>
          <li>
            <a className="link" href="./assets/pages/contacto.jsx">
              Contacto{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
