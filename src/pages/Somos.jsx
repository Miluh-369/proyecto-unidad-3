import React from "react";
import "../assets/css/somos.css";
import nina1 from "../assets/image/niña1.jpeg";
import nina2 from "../assets/image/niña2.jpeg";
import nina3 from "../assets/image/niña3.jpeg";
import nina4 from "../assets/image/niña4.jpeg";

export default function Somos() {
  return (
    <>
      <div>
        <div id="texto">
          <h1>¿Quiénes somos?</h1>
          <div className="subtexto">
            <p>de JELTIFY</p>
          </div>
        </div>

        <main>
          <section className="relleno">
            <div className="somos">
              <p>
                Somos un equipo de profesionales apasionados por la innovación y
                la tecnología en la atención médica. Nuestra misión es
                proporcionar una plataforma de telemedicina segura, eficiente y
                accesible que conecte a pacientes y profesionales de la salud en
                todo momento. Nuestro equipo está compuesto por profesionales de
                la salud, desarrolladores de software y expertos en tecnología
                que trabajan juntos para brindar la mejor experiencia posible a
                nuestros pacientes y profesionales de la salud. Estamos
                comprometidos con la excelencia y la innovación en todo lo que
                hacemos.
              </p>
            </div>

            <div className="equipo">
              <div className="integrante">
                <img src={nina1} alt="Dr. Sasha Raqui" />
                <div className="nombre-integrante">🩺 Dr. Sasha Raqui</div>
                <div className="descripcion-integrante">
                  <p>
                    Doctora con especialidad en neuroplásticas con más de 30
                    años en el sector de salud pública.
                  </p>
                </div>
              </div>

              <div className="integrante">
                <img src={nina2} alt="Luhana Rojas" />
                <div className="nombre-integrante">
                  💻 Program. Luhana Rojas
                </div>
                <div className="descripcion-integrante">
                  <p>
                    Se graduó de la Universidad de Oxford y actualmente es CEO
                    en Apple y Jeltify.
                  </p>
                </div>
              </div>

              <div className="integrante">
                <img src={nina3} alt="Grace Sanchez" />
                <div className="nombre-integrante">
                  💻 Program. Grace Sanchez
                </div>
                <div className="descripcion-integrante">
                  <p>
                    Actualmente es catedrática en Harvard y cuenta con 20 años
                    de experiencia en BackEnd.
                  </p>
                </div>
              </div>

              <div className="integrante">
                <img src={nina4} alt="Antonella Arias" />
                <div className="nombre-integrante">
                  💻 Program. Antonella Arias
                </div>
                <div className="descripcion-integrante">
                  <p>
                    CEO de dos proyectos sociales enfocados en la salud pública
                    en zonas vulnerables.
                  </p>
                </div>
              </div>
            </div>

            <div className="historia">
              <h1 id="nuestra">Nuestra historia</h1>
              <p>
                Todo comenzó con una idea simple, pero poderosa: la salud no
                debería tener límites. Un grupo de profesionales de la salud,
                apasionados por la innovación y la tecnología, se unió con un
                propósito claro: acercar la atención médica a cada persona, sin
                importar dónde esté. Lo que empezó como un sueño en una mesa de
                trabajo pronto se convirtió en una plataforma de telemedicina
                segura, eficiente y accesible. Un lugar donde pacientes y
                profesionales de la salud pueden encontrarse en cualquier
                momento, con la confianza de que sus datos y su bienestar están
                protegidos. Hoy, seguimos impulsados por la misma visión:
                revolucionar la manera en que se brinda la atención médica,
                combinando la calidez humana con la fuerza de la tecnología.
                Nuestro equipo de médicos, desarrolladores y expertos en
                tecnología trabaja cada día para que recibir atención médica sea
                tan fácil como abrir una ventana de conexión. Porque para
                nosotros, la innovación, la accesibilidad, la seguridad y el
                profesionalismo no son solo valores: son la esencia de quienes
                somos.
              </p>
            </div>

            <div className="botones">
              <button className="boton">Galería</button>
              <button className="certificado">Certificados</button>
            </div>

            <div className="seguir">
              <p>Síguenos:</p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube"
              >
                Youtube
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
