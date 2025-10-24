import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>JELTIFY</h3>
          <p>Conectando tu salud con un clic</p>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>
          <Link to="/">Inicio</Link>
          <Link to="/somos">Quiénes somos</Link>
          <Link to="/mision">Misión y Visión</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <a href="mailto:healthify@telemedicina.com">
              📧 healthify@telemedicina.com
            </a>
          </p>
          <p>
            <a href="tel:+51922384589">📞 +51 922-384-589</a>
          </p>
        </div>

        <div className="footer-legal">
          <h4>Legal</h4>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Jeltify. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
