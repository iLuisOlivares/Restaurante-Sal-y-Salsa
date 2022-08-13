import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UpdateModal from "./UpdateModal";

function ItemPlato({
  platoId,
  nombre,
  descripcion,
  precio,
  imagen,
  platillos,
  funGetPlato,
}) {
  // Detele Plato
  const eliminarPlato = async (id) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "¿Estas seguro?",
      text: "No podrás revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(
          "https://localhost:5001/api/plato/" +
            id,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            Swal.fire("¡Eliminado!", "El plato ha sido eliminado.", "success");
            funGetPlato();
          })

          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div
      style={{ backgroundColor: "rgba(28, 27, 29, 0.836)" }}
      className="conte text-light"
    >
      <div className="d-flex justify-content-around">
        <p style={{ width: "160px", textAlign: "center" }} className="m-2 ">
          Plato: {platoId}
        </p>

        <p
          style={{ width: "160px", textAlign: "center" }}
          className="m-2 fw-lighter fw-lighter"
        >
          {nombre}
        </p>
        <div className="d-flex" style={{ width: "160px" }}>
          <UpdateModal
            id={"identidad" + platoId}
            ids={platoId}
            nombre1={nombre}
            descripcion={descripcion}
            precio1={precio}
            imagen1={imagen}
            platillos={platillos}
            funGetPlato={funGetPlato}
            api="https://localhost:5001/api/plato"
          />
          <button
            onClick={() => {
              eliminarPlato(platoId);
            }}
            className="m-2 btn btn-danger"
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <section
        style={{ backgroundColor: "#f1eded" }}
        className="text-dark container-plato-info"
      >
        <section className="container-plato-dp">
          <p className="m-0 p-3">Descripción: {descripcion}</p>
          <p className="m-0 p-3">Precio: {precio}</p>
        </section>
        <img src={imagen} className="img-update-admin" alt={descripcion} />
      </section>
    </div>
  );
}

export default ItemPlato;
