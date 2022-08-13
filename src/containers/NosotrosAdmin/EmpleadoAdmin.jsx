import React from "react";
import ActualizarModal from "../ServiciosAdmin/ActualizarModal";
import Swal from "sweetalert2";

function EmpleadoAdmin({
  id,
  nombre,
  foto,
  descripcion,
  cargo,
  obtenerEmpleados,
  empleados,
  setEmpleados,
}) {
  const identficador = "identificador" + id;

  const eliminarItem = (id) => {
    const lista = empleados.filter((item) => item.id !== id);
    eliminarEmpleado(id);
    console.log(lista);
    if (lista !== "") {
      setEmpleados(lista);
    } else {
      setEmpleados([]);
    }
  };

  const eliminarEmpleado = async (id) => {
    const resp = await fetch(
      "https://localhost:5001/api/empleado/" +
        id,
      {
        method: "DELETE",
      }
    );
     return(resp.ok) ?   Swal.fire({
      title: "Eliminado",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    })  : Swal.fire({
      title: "Error no eliminado",
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    }) ;
  };

  return (
    //     <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
    //     <div className="card col-4" style={styleUs}>
    //       <img src={foto} className="card-img-top" alt="..."/>
    //       <div className="card-body">
    //         <h3 className="card-text d-flex justify-content-center"></h3>
    //         <p className="card-text d-flex justify-content-center"></p>
    //       </div>
    //     </div>
    //   </div>
    <div className="m-3 card my-3" style={{ maxWidth: "600px" }}>
      <div className="row g-0">
        <div className="col-md-3">
          <img
            style={{ objectFit: "cover", width: "126px", height: "126px" }}
            src={foto}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{cargo}</p>
            <p className="card-text">
              <small className="text-muted">{descripcion}</small>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          {/* <button className="m-1 text-light btn btn-info ">Actualizar</button> */}
          <ActualizarModal
            ids={id}
            id={identficador}
            ima={foto}
            nombre1={nombre}
            api="https://localhost:5001/api/empleado"
            servicios={empleados}
            setServicios={setEmpleados}
            descripcion={descripcion}
          />
          <button
            onClick={() => {
              eliminarItem(id);
            }}
            className="m-1 text-light btn btn-danger "
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoAdmin;
