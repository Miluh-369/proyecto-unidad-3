import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Home.css";
import imageninicio from "../assets/image/imageninicio.jpg";

export default function Home() {
  const navigate = useNavigate();

  // Redirige directamente a la página de agendar
  const handleAgendar = () => {
    navigate("/agendar");
  };

  return (
    <>
      {/* Sección principal */}
      <section>
        <div className="principal">
          <h1>Inicio</h1>
          <p>de Jeltify</p>
        </div>
      </section>

      <main>
        {/* Bienvenida */}
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

        {/* Información sobre la plataforma */}
        <section className="info">
          <div className="mainimg">
            <img src={imageninicio} alt="imagen relacionada a la salud" />
          </div>
          <div className="texto">
            <p>
              ¡Hola! 👋 Bienvenido a JELTIFY. Aquí la salud es simple: hablas con
              un médico desde tu celular, recibes tu receta en segundos y llevas
              tu historial clínico siempre contigo. Sin filas, sin estrés, sin
              complicaciones… solo tú cuidando de ti, fácil y rápido.
            </p>
          </div>
        </section>

        {/* Medio */}
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
              reduciendo tiempos de espera y eliminando barreras geográficas.
            </p>
          </div>
        </section>

        {/* Características y ventajas */}
        <section className="target">
          <div>
            <p>Características:</p>
            <ul>
              <li>Teleconsultas en tiempo real</li>
              <li>Telediagnóstico y seguimiento</li>
              <li>Monitoreo remoto</li>
              <li>Registros médicos electrónicos</li>
            </ul>
          </div>
          <div>
            <p>Ventajas:</p>
            <ul>
              <li>Acceso ampliado a atención especializada</li>
              <li>Reducción de costos y tiempos</li>
              <li>Mayor eficiencia en la atención</li>
              <li>Más comodidad para los pacientes</li>
            </ul>
          </div>
        </section>

        {/* Conócenos y Agendar */}
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
              <Link to="/galeria">
                <button className="btn-galeria">Ver galería</button>
              </Link>
            </div>
          </div>

          <div>
            <div>
              <h1>Programar cita 😷</h1>
            </div>
            <div>
              <p>Haga click para programar su cita</p>
              <button className="btn-agendar" onClick={handleAgendar}>
                Agendar
              </button>
            </div>
          </div>
          
          <div className="promo-home">
  <div>
    <h1>Promociones 💥</h1>
  </div>

  <div>
    <p>No te pierdas nuestras ofertas especiales por tiempo limitado</p>
    <button className="btn-promos" onClick={handlePromociones}>
      Ver promociones
    </button>
  </div>
</div>
    

        </section>
      </main>
    </>
  );
}
