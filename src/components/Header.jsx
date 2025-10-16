import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#111", color: "white", padding: "1rem" }}>
      <h1>JELTIFY</h1>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/somos">Quiénes somos</Link></li>
          <li><Link to="/mision">Misión y Visión</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

