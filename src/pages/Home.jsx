import "../assets/css/Home.css";
import imageninicio from "../assets/image/imageninicio.jpg";
import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <section>
        <div className="principal">
          <h1>Inicio</h1>
          <p>de Jeltify</p>
        </div>
      </section>

      <main>
        <section className="start">
          <div>
            <div>
              <h1>BIENVENIDOS A JELTIFY</h1>
            </div>

            <div>
              <p>
                "Conéctate con médicos y especialistas desde cualquier lugar.
                Porque tu salud no espera."
              </p>
            </div>
          </div>
        </section>

        <section className="info">
          <div className="mainimg">
            <img src={imageninicio} alt="imagen relacionada a la salud" />
          </div>

          <div className="texto">
            <p>
              ¡Hola! 👋 Bienvenido a JELTIFY Aquí la salud es simple: hablas con
              un médico desde tu celular, recibes tu receta en segundos y llevas
              tu historial clínico siempre contigo. Sin filas, sin estrés, sin
              complicaciones… solo tú cuidando de ti, fácil y rápido.
            </p>
          </div>
        </section>

        <section className="medio">
          <h1>JELTIFY</h1>

          <div>
            <p>
              🩺 Es una plataforma de telemedicina que conecta a pacientes con
              profesionales de la salud de forma rápida, segura y sin
              complicaciones. Ofrecemos atención médica a distancia para
              consultas generales y especializadas, recetas electrónicas,
              seguimiento de tratamientos y acceso a tu historial clínico en un
              solo lugar. Nuestro objetivo es acercar la salud a todos,
              reduciendo tiempos de espera y eliminando barreras geográficas,
              para que recibir atención médica sea tan fácil como abrir una
              app.🩺
            </p>
          </div>
        </section>

        <section className="target">
          <div>
            <p>Características:</p>

            <ul>
              <li>Teleconsultas en tiempo</li>
              <li>Telediagnóstico y seguimiento de pacientes</li>
              <li>Monitoreo remoto de pacientes</li>
              <li>Acceso a registros médicos electrónicos</li>
            </ul>
          </div>

          <div>
            <p>Ventajas:</p>

            <ul>
              <li>Acceso ampliado a la atención médica especializada</li>
              <li>Reducción de costos y tiempos de espera</li>
              <li>Mayor eficiencia y calidad en la atención médica</li>
              <li>Mayor comodidad y flexibilidad para los pacientes</li>
            </ul>
          </div>
        </section>
        <section className="start">
  <div>
    <div>
      <h1>CONÓCENOS</h1>
    </div>

    <div>
      <p>
        "Conéctate con médicos y especialistas desde cualquier lugar.
        Porque tu salud no espera."
      </p>

      {/* 🔽 Botón que lleva a la galería */}
      <Link to="/galeria">
        <button className="btn-galeria">Ver galería</button>
      </Link>
    </div>
  </div>
</section>

      </main>
    </>
  );
}