import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/css/Home.css";
import imageninicio from "../assets/image/imageninicio.jpg";

export default function Home() {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleAgendar = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate("/agendar"); // Redirige cuando el login es exitoso
    }
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
        <section className="start text-center py-10">
          <div>
            <div>
              <h1 className="text-3xl font-bold mb-2">BIENVENIDOS A JELTIFY</h1>
            </div>

            <div>
              <p className="text-gray-700">
                "Conéctate con médicos y especialistas desde cualquier lugar.
                Porque tu salud no espera."
              </p>
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="info flex flex-col md:flex-row items-center gap-6 my-10">
          <div className="mainimg md:w-1/2">
            <img src={imageninicio} alt="imagen relacionada a la salud" className="rounded-lg shadow-md"/>
          </div>

          <div className="texto md:w-1/2 text-gray-700">
            <p>
              ¡Hola! 👋 Bienvenido a JELTIFY. Aquí la salud es simple: hablas con
              un médico desde tu celular, recibes tu receta en segundos y llevas
              tu historial clínico siempre contigo. Sin filas, sin estrés, sin
              complicaciones… solo tú cuidando de ti, fácil y rápido.
            </p>
          </div>
        </section>

        {/* Medio */}
        <section className="medio my-10 text-gray-700">
          <h1 className="text-2xl font-bold mb-4">JELTIFY</h1>

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
        <section className="target my-10 flex flex-col md:flex-row gap-6 text-gray-700">
          <div>
            <p className="font-semibold mb-2">Características:</p>
            <ul className="list-disc ml-5">
              <li>Teleconsultas en tiempo real</li>
              <li>Telediagnóstico y seguimiento</li>
              <li>Monitoreo remoto</li>
              <li>Registros médicos electrónicos</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Ventajas:</p>
            <ul className="list-disc ml-5">
              <li>Acceso ampliado a atención especializada</li>
              <li>Reducción de costos y tiempos</li>
              <li>Mayor eficiencia en la atención</li>
              <li>Más comodidad para los pacientes</li>
            </ul>
          </div>
        </section>

        {/* Conócenos y Agendar */}
        <section className="start my-10 flex flex-col md:flex-row gap-10">
          <div className="text-center md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">CONÓCENOS</h1>
            <p className="text-gray-700 mb-4">
              "Conéctate con médicos y especialistas desde cualquier lugar.
              Porque tu salud no espera."
            </p>

            <Link to="/galeria">
              <button className="btn-galeria bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition">
                Ver galería
              </button>
            </Link>
          </div>

          <div className="text-center md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Programar cita 😷</h1>
            <p className="text-gray-700 mb-4">Haga click para programar su cita</p>

            <button
              onClick={handleAgendar}
              className="btn-agendar bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition"
            >
              Agendar
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
