import React from "react";
import "../assets/css/Mision.css";
import mujerImg from "../assets/image/mujer.png";
import doctorImg from "../assets/image/doctor.png";
import señoraImg from "../assets/image/seciora.png";
import emprendedorImg from "../assets/image/emprendedor.png";

function Mision() {
  return (
    <>
      <section>
        <div className="principal">
          <h1>Misión y Visión</h1>
          <p>de JELTIFY</p>
        </div>
      </section>

      <main>
        <section className="flex-container">
          <div className="custom-content">
            <h1>Misión</h1>
            <p>
              En JELTIFY creemos que <b>la salud no tiene fronteras</b>. Nuestra
              misión es acercar la atención médica de calidad a cualquier
              persona, en cualquier lugar y en cualquier momento, derribando las
              <b> barreras de distancia, tiempo y acceso</b>.
            </p>

            <p>
              A través de una plataforma de telemedicina integral, combinamos
              <b>
                {" "}
                tecnología avanzada, un equipo médico de excelencia y una
                experiencia de usuario intuitiva
              </b>{" "}
              para garantizar que cada consulta sea tan efectiva y humana como
              una atención presencial.
            </p>

            <p>
              Queremos que nuestros pacientes se sientan seguros, escuchados y
              acompañados, incluso a kilómetros de distancia.
            </p>
          </div>

          <div className="custom-content">
            <h1>Visión</h1>
            <p>
              Soñamos con un futuro donde la atención médica sea universal, sin
              esperas interminables ni limitaciones geográficas. Queremos que
              JELTIFY sea reconocido globalmente como
              <b>
                {" "}
                el puente entre la innovación tecnológica y el cuidado humano
              </b>
              , liderando la transformación digital de la salud.
            </p>

            <p>
              Nos visualizamos como la plataforma que no solo conecta pacientes
              y médicos, sino que{" "}
              <b>
                anticipa necesidades, previene enfermedades y fomenta hábitos
                saludables
              </b>
              , contribuyendo a una sociedad más sana, informada y empoderada.
            </p>
          </div>
        </section>

        <section className="puro">
          <div className="columnas">
            <h1>Nuestros Ejes</h1>
            <div>
              <h2>🩹 Seguridad y Confidencialidad 🩹</h2>
              <p>
                Protegemos los datos médicos con los más altos estándares de
                cifrado y cumplimos estrictamente con las normativas
                internacionales de privacidad, garantizando la confianza de
                pacientes y profesionales.
              </p>
            </div>
          </div>

          <div className="fila">
            <div>
              <h2>🩺 Innovación Tecnológica 🩺</h2>
              <p>
                Integramos herramientas de última generación como inteligencia
                artificial, big data y análisis predictivo para mejorar
                diagnósticos, optimizar tiempos de atención y personalizar la
                experiencia de cada paciente.
              </p>
            </div>

            <div>
              <h2>💉 Accesibilidad Global 💉</h2>
              <p>
                Trabajamos para que la atención médica no dependa de la
                ubicación geográfica. Nuestro objetivo es llegar a zonas
                rurales, comunidades aisladas y personas con movilidad reducida,
                eliminando barreras de distancia y tiempo.
              </p>
            </div>
          </div>

          <div className="columnas">
            <div>
              <h2>💊 Atención al Paciente 💊</h2>
              <p>
                Colocamos a las personas en el centro de todo lo que hacemos,
                fomentando un trato humano, empático y adaptado a las
                necesidades individuales de cada usuario.
              </p>
            </div>
          </div>
        </section>

        <div>
          <div className="logros">
            <h1>Logros Futuros</h1>
          </div>
          <div className="todos">
            <div className="grande">
              <p>
                En JELTIFY, creemos que la telemedicina no es solo una
                herramienta tecnológica, sino un puente que conecta a las
                personas con la atención médica que necesitan, sin importar su
                ubicación o circunstancias. Con nuestra plataforma, esperamos
                generar un impacto real y medible en la calidad de vida de miles
                de pacientes:
              </p>
            </div>

            <div className="chiquitos">
              <div>
                <h3>75%</h3>
                <p>
                  Reducción promedio en los tiempos de espera para recibir
                  atención médica.
                </p>
              </div>

              <div>
                <h3>60%</h3>
                <p>
                  Disminución en los costos de transporte y consultas para
                  pacientes en zonas alejadas.
                </p>
              </div>

              <div>
                <h3>85%</h3>
                <p>
                  Mejora en el seguimiento y control de tratamientos gracias a
                  consultas de seguimiento en línea.
                </p>
              </div>

              <div>
                <h3>90%</h3>
                <p>
                  Nivel de satisfacción proyectado entre los usuarios, basado en
                  accesibilidad y calidad de atención.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="row m-auto">
          <h1>Testimonios</h1>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h4>
              <b>María López – Paciente con movilidad reducida (Perú)</b>
            </h4>
            <p>
              Gracias a JELTIFY pude recibir atención médica especializada sin
              salir de casa. Antes tenía que viajar más de dos horas para ver a
              mi cardiólogo, ahora solo necesito una videollamada. Me siento más
              segura.
            </p>
            <div>
              <img src={mujerImg} alt="María López" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h4>
              <b>Dr. Javier Torres – Médico general (Argentina)</b>
            </h4>
            <p>
              JELTIFY me ha permitido atender a más pacientes en menos tiempo,
              manteniendo la calidad del diagnóstico y el seguimiento. El acceso
              a los historiales médicos electrónicos facilita mi trabajo.
            </p>
            <div>
              <img src={doctorImg} alt="Dr. Javier Torres" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h4>
              <b>Ana Fernández – Madre de dos niños (México)</b>
            </h4>
            <p>
              Cuando mi hijo tuvo fiebre en la madrugada, pude conectarme con un
              pediatra en minutos. La orientación fue clara y me evitó ir de
              urgencia a un hospital saturado. La plataforma es sencilla y muy
              rápida de usar.
            </p>
            <div>
              <img src={señoraImg} alt="Ana Fernández" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h4>
              <b>Carlos Ramírez – Emprendedor (Colombia)</b>
            </h4>
            <p>
              Como trabajo largas jornadas frente a la computadora, solía
              descuidar mis chequeos médicos. Con JELTIFY puedo agendar
              consultas rápidas en mis tiempos libres y hasta recibir
              recomendaciones personalizadas.
            </p>
            <div>
              <img src={emprendedorImg} alt="Carlos Ramírez" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Mision;
