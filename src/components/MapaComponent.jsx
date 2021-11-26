import React from "react";
import { Link } from "react-router-dom";
import "../containers/Home/Home.css";

function MapaComponent({ img, tittle, link }) {
  return (
    <Link style={{ color: "rgba(182, 6, 6, 0.8)" }} to={link}>
      <div className="p-2 text-center  ">
        <img
          src={img}
          className="card-img-top"
          style={{ maxWidth: "300px" }}
          alt={tittle}
        />
        <h4 className="text-dark m-2 card-title">{tittle}</h4>
      </div>
    </Link>
  );
}

export default MapaComponent;
