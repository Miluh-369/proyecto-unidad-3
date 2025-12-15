import promocion1 from "../assets/image/promocion.jpeg";
import promocion2 from "../assets/image/promocion2.jpeg";
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
    detalle: "20% de descuento"
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