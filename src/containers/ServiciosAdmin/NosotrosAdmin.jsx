import React from "react";
import { Fragment, useState, useEffect } from "react";
import HistoriadAdmin from "./ServiciosAdmin";
import EmpleadoAdmin from "./EmpleadoAdmin";
import BootsModal from "./BootsModal";

function NosotrosAdmin() {
  const [servicios, setServicios] = useState([]);
  const [restaurante, setRestaurante] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
    obtenerRestaurante(1);
  }, []);

  const obtenerEmpleados = async () => {
    const data = await fetch(
      "https://localhost:5001/api/servicio"
    );
    const resp = await data.json();
    console.log(resp);
    setServicios(resp);
  };

  const obtenerRestaurante = async (id) => {
    const data = await fetch(
      "https://localhost:5001/api/restaurante/" + id
    );
    const resp = await data.json();
    setRestaurante(resp);
  };

  return (
    <div>
      <section className="page-section">
        {/* Contenedor */}
        <div className="container rounded-3 bg-dark pb-4">
          {/* <!-- Primera parte -->  */}
          <div className="row p-3  mt-5 rounded d-flex justify-content-end ">
            <div className="col-12 col-lg-6 text-end p-3 p-ms-2 fondo rounded rounded-pill">
              <h2 className="text-light">
                Nuestra <b style={{ color: "rgb(191 38 38)" }}>Historia </b>{" "}
              </h2>
            </div>
          </div>

          {/* <!-- Card Historia -->  */}

          {
            restaurante.map((item)=>(
              <HistoriadAdmin
                key ={item.id}
                foto={item.imagen}
                nombre={item.nombre}
                descripcion={item.descripcion}
                historia={item.historia}
              ></HistoriadAdmin>
            ))
          }
        </div>
      </section>

      {/* <!-- Personal -->  */}
      <section className="page-section" id="personal">
        {/* <!-- contenedor -->  */}
        <div className="container">
          <div className="col-12 text-center p-5 p-lg-5 m-ms-1 p-ms-2">
            <h2 className="text">Personal</h2>
            <hr className="divider" />
          </div>

          {/* <!-- row principal -->  */}
          <div className="row pb-5">
            <div className="col-12  col-lg-12">
              {/* <!-- sub-row1 -->  */}
              <div className="m-2 row 1 d-flex justify-content-center row cok-12 bg-dark rounded m-lg-2 m-0 m-md-1">
                {servicios.map((item) => (
                  <EmpleadoAdmin
                    key={item.nombre}
                    id= {item.id}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    foto={item.imagen}
                    cargo={item.cargo}
                    servicios ={servicios}
                    setServicios = {setServicios}
                    obtenerEmpleados = {obtenerEmpleados}
                  ></EmpleadoAdmin>
                ))}
                <div className="d-flex justify-content-end">
                  <BootsModal
               servicios ={servicios}
               setServicios = {setServicios}
                  ></BootsModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NosotrosAdmin;
