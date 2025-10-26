import React, { useState } from "react";
import data from "../data/galeria.json";
import "../assets/css/galeria.css";

// Importar imágenes directamente
import oncologo from "../assets/image/oncologo.jpg";
import pediatra from "../assets/image/pediatra.jpg";
import nutricionista from "../assets/image/nutricionista.jpg";
import gastroenterologa from "../assets/image/gastroenterologa.jpg";
import cardiologa from "../assets/image/cardiologa.jpg";
import cirujano from "../assets/image/cirujano general.jpg";

// Creamos un objeto para reemplazar las rutas del JSON por los imports reales
const imagenes = {
  "../assets/image/cardiologa.jpg": cardiologa,
  "../assets/image/cirujano general.jpg": cirujano,
  "../assets/image/oncologo.jpg": oncologo,
  "../assets/image/pediatra.jpg": pediatra,
  "../assets/image/nutricionista.jpg": nutricionista,
  "../assets/image/gastroenterologa.jpg": gastroenterologa,
};

const Gallery = () => {
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <section className="galeria">
      <h2 className="titulo-galeria">Galería de Profesionales</h2>

      <div className="contenedor-galeria">
        {data.map((item) => (
          <div
            key={item.id}
            className="tarjeta-imagen"
            onClick={() => setSeleccionada(item)}
          >
            <img src={imagenes[item.src]} alt={item.alt} />
            <p>{item.titulo}</p>
          </div>
        ))}
      </div>

      {seleccionada && (
        <div className="modal" onClick={() => setSeleccionada(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={() => setSeleccionada(null)}>✕</button>
            <img src={imagenes[seleccionada.src]} alt={seleccionada.alt} />
            <h3>{seleccionada.titulo}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
