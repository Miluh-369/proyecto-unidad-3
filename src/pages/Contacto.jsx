import "../assets/css/contacto.css";
import React, { useState } from "react";

export default function Contacto() {
  const [resultado, setResultado] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const nombre = data.get("nombre") || "usuario";
    setResultado(
      `Solicitud recibida. Gracias, ${nombre}. Nos contactaremos pronto.`
    );
    e.target.reset();
  }

  return (
    <>
      <section>
        <div className="principal">
          <h1>Contacto</h1>
          <p>de JELTIFY</p>
        </div>
      </section>

      <main>
        <div className="contenedor">
          <h1>Información de Contacto</h1>
          <p>💬 Whatsapp: +51 922-384-589</p>
          <p>📞 Teléfono: +01 459-3333</p>

          <h1>Redes Sociales</h1>
          <div className="redes">
            <a
              href="https://www.instagram.com/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/"
              className="youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/"
              className="tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
            <a
              href="https://www.twitter.com/"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>

          <p>Correo electrónico: healthify@telemedicina.com</p>
          <h3>
            <strong>Nuestras oficinas están en estos lugares</strong>
          </h3>
          <p>Dirección: Calle 335, San Isidro, Lima</p>
          <p>Dirección: Calle 123, Los Olivos, Lima</p>

          <section>
            <h1>Solicitud de Consulta</h1>

            <form id="consultaform" onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre completo:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                required
              />

              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@mail.com"
                required
              />

              <label htmlFor="telefono">Teléfono (opcional):</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Tu teléfono"
              />

              <label htmlFor="tipoConsulta">Tipo de consulta:</label>
              <select id="tipoConsulta" name="tipoConsulta" required>
                <option value="">Selecciona una opción</option>
                <option value="general">Médica general</option>
                <option value="especialista">Especialista</option>
                <option value="seguimiento">Seguimiento</option>
              </select>

              <label htmlFor="fecha">Fecha preferida:</label>
              <input type="date" id="fecha" name="fecha" />

              <label htmlFor="mensaje">Mensaje / motivo de consulta:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu consulta aquí..."
                required
              ></textarea>

              <button type="submit">Enviar solicitud</button>
            </form>

            <div id="resultado">{resultado}</div>
          </section>
        </div>
      </main>
    </>
  );
}
