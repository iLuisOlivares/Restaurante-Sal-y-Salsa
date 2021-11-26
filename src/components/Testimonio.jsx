import React from "react";

export default function Testimonio({ img, name, descripcion }) {
  return (
    <div className="">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start testimonio-img"
            alt="Testimonio"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
