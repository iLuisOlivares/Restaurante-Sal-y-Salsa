import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ItemPlato({ platoId, nombre, descripcion, precio, imagen }) {
  // const eliminarItem = (id) => {
  //   const lista = respuestas.filter((item) => item.id !== id);
  //   eliminarComentarios(cliente);
  //   console.log(lista);
  //   if (lista !== "") {
  //     cambiar(lista);
  //   } else {
  //     cambiar([]);
  //   }
  // };

  // const eliminarComentarios = async (id) => {
  //   const resp = await fetch(
  //     "https://61955d6c74c1bd00176c6d13.mockapi.io/api/v1/comments/" + id,
  //     {
  //       method: "DELETE",
  //     }
  //   );
  //   return resp.ok ? "Borrado" : "No se elimino";
  // };

  const eliminarPlato = async (id) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

    // await fetch(
    //   "https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/plato/" +
    //     id,
    //   {
    //     method: "DELETE",
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {

    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ backgroundColor: "rgba(28, 27, 29, 0.836)" }}
      className="conte text-light"
    >
      <div className="d-flex justify-content-around">
        <p className="m-2 ">Plato: {platoId}</p>

        <p className="m-2 fw-lighter fw-lighter">{nombre}</p>
        <button
          onClick={() => {
            eliminarPlato(platoId);
          }}
          className="m-2 btn btn-danger"
        >
          {" "}
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>
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
