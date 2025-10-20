import "../assets/css/Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <h3>JELTIFY</h3>
          <p>Conectando tu salud con un clic</p>
        </div>

        <div class="footer-links">
          <h4>Enlaces</h4>
          <a href="#">Inicio</a>
          <a href="#">Quiénes somos</a>
          <a href="#">Mision y Vision</a>
          <a href="#">Contacto</a>
        </div>

        <div class="footer-contact">
          <h4>Contacto</h4>
          <p>
            <a href="healthify@telemedicina.com">
              📧 healthify@telemedicina.com
            </a>
          </p>
          <p>
            <a href="tel: +51 922-384-589">📞 +51 922-384-589</a>
          </p>
        </div>

        <div class="footer-legal">
          <h4>Legal</h4>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Jeltify. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
