import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComponenteServicio from "../../components/ComponenteServicio";

function Servicios() {

  const [servicios,setServicios] = useState([]);

  useEffect(() => {
    obtenerServicios();
  }, []);

  const obtenerServicios = async () => {
    const data = await fetch(
      "https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/servicio"
    );
    const resp = await data.json();
    console.log(resp);
    setServicios(resp);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="col-12 text-center p-5 p-lg-5 pb-lg-4 m-ms-1 p-ms-2">
          <h2 className="text fw-bold">Servicios</h2>
          <hr className="divider" />
        </div>

        <div className="row pb-5">
          <div className="col-12 col-lg-12">
            <div className="row1 row col-12 fondo rounded m-2 bg-light shadow-lg p-3">
              <div className="row p-3">
                <div className="col-6 d-flex p-1 justify-content-end">
                  <a href="https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@'">
                    <button className="botones">
                      {" "}
                      <i className="fab fa-whatsapp"></i> Contáctanos: Via
                      Whatsapp
                    </button>
                  </a>
                </div>
                <div className="col-6 d-flex p-1 justify-content-start">
                  <Link to="reserva">
                    <button className="botones btn-dark">
                      {" "}
                      <i className="fas fa-calendar-day"></i> Contáctanos: Haz
                      tu Reserva{" "}
                    </button>
                  </Link>
                </div>
              </div>
              {
                servicios.map((item)=>(
                  <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
                  <ComponenteServicio
                  key={item.id}
                  nombre= {item.nombre}
                  leyenda={item.descripcion}
                  imagen= {item.imagen}
                ></ComponenteServicio>
                  </div>
                ))
              }

            
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Servicios;
