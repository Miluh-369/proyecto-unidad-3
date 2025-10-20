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
            <a className="link" href="./index.html">
              Inicio{" "}
            </a>
          </li>
          <li>
            <a className="link" href="./assets/html/somos.html">
              Quiénes somos{" "}
            </a>
          </li>
          <li>
            <a className="link" href="./assets/html/misionyvision.html">
              Misión y Visión{" "}
            </a>
          </li>
          <li>
            <a className="link" href="./assets/html/contactos.html">
              Contacto{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
