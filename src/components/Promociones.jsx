import promocion1 from "../assets/image/promocion.jpeg";
import promocion2 from "../assets/image/promocion2.jpeg";
import promocion3 from "../assets/image/promocion3.png";
import promocion4 from "../assets/image/promocion4.png";
import promocion5 from "../assets/image/promocion5.png";
import promocion6 from "../assets/image/promocion6.png";

import "../assets/css/Promociones.css";


const promociones = [
  {
    img: promocion1,
    titulo: "Consulta médica online",
    descripcion:
      "Atención rápida y segura desde casa con profesionales de la salud.",
    detalle: "Descuento especial por tiempo limitado"
  },
  {
    img: promocion2,
    titulo: "Chequeo médico general",
    descripcion:
      "Evaluación completa para prevenir y cuidar tu salud.",
    detalle: "50% de descuento"
  },
   {
    img: promocion3,
    titulo: "Chequeo Pedriatrico",
    descripcion:
      "Evaluación completa para prevenir y cuidar la salud de tus niños.",
    detalle: "con el 35% de descuento y 45% de descuento en consultas dobles"
  },

  {
    img: promocion4,
    titulo: "Chequeo Familiar",
    descripcion:
      "Evaluación completa para prevenir y cuidar la salud de tu familia.",
    detalle: "con el 30% de descuento y 45% de descuento en consultas con mas de 5 miembros de la familia"
  },
   {
    img: promocion5,
    titulo: "Descuento en chequeo cardiológico",
    descripcion:
      "Evaluación completa para prevenir y cuidar de tu salud.",
    detalle: "con el 36% de descuento"
  },

   {
    img: promocion6,
    titulo: "Descuento en chequeo oncológico",
    descripcion:
      "Evaluación completa para prevenir y cuidar de tu salud de cualquier tipo de cáncer.",
    detalle: "con el 45% de descuento"
  }
];

const Promociones = () => {
  return (
    <div className="promos-container">
      <h1 className="promos-title">🔥 Promociones</h1>

      <div className="promos-grid">
        {promociones.map((promo, index) => (
          <div className="promo-card" key={index}>
            <img
              src={promo.img}
              alt={promo.titulo}
              className="promo-img"
            />
            <h3>{promo.titulo}</h3>
            <p>{promo.descripcion}</p>
            <span>{promo.detalle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promociones;