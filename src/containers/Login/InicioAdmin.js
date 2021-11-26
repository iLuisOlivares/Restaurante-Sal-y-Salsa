import React from "react";
import "./login.css";
export default function InicioAdmin() {
  return (
    <section className="admin-home-container">
      <h1>Inicio del administrador</h1>

      <p>En esta sección puedes:</p>
      <ol>
        <li>Actualizar el menú</li>
        <li>Administrar reservas</li>
        <li>Administrar comentarios</li>
        <li>Administrar nosotros</li>
        <li>Administrar contáctanos</li>
        <li>Administrar servicios</li>
      </ol>
    </section>
  );
}
