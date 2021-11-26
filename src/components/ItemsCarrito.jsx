import React from "react";
import imagen from "../assets/Img/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerImgStyled,
  ImagenStyled,
  InputCompraStyled,
} from "../assets/Elements/Carrito";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../containers/Carrito/carrito.css";

function ItemsCarrito({
  nombre,
  descripcion,
  imagen,
  precio,
  id_plato,
  cantidad,
  id_pedido,
  carrito,
  setValor,
  getPedidos,
}) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const MySwal = withReactContent(Swal);

  const deleteAlert = () => {
    MySwal.fire({
      title: <p>Juventic</p>,
      footer: "Copyright 2021",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return Toast.fire({
        title: "¡Eliminado!",
        text: "Se ha eliminado el platillo",
        icon: "error",
        confirmButtonText: "Cool",
      });
    });
  };

  const eliminarItem = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "¿Estas seguro?",
      text: "No podrás revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminalo",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(
          `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido/${id_pedido}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            getPedidos(parseInt(localStorage.getItem("ui")));
            deleteAlert();
            calcularTotal();
          })

          .catch((err) => console.log(err));
      }
    });
  };

  const modificarItem = (e) => {
    putData(e.target.value);
    console.log(e.target.value);
  };

  const putData = async (valor) => {
    const response = await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido`,
      {
        method: "PUT",
        body: JSON.stringify({
          cliente_id: parseInt(localStorage.getItem("ui")),
          plato_id: id_plato,
          cantidad: valor,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resp = await response.json();

    console.log(resp);

    Swal.fire({
      title: "Se actualizó el producto",
      text: "¡Se actualizó el carrito!",
      icon: "success",
      confirmButtonColor: "#3085d6",
    });
    calcularTotal();
  };

  const calcularTotal = () => {
    getPedidosToUpdated(parseInt(localStorage.getItem("ui")));
  };

  const getPedidosToUpdated = async (id) => {
    await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        let aux = 0;
        console.log(data);

        for (const iterator of data) {
          aux += iterator.precio * iterator.cantidad;
        }
        // setValor({ totalPrice: aux });
        localStorage.setItem("totalPrice", aux);
        document.getElementById("costo-total").value =
          localStorage.getItem("totalPrice");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card mb-3" data-id={id_plato}>
      <div className="row g-0">
        <ContainerImgStyled className="col-md-4">
          <ImagenStyled
            src={imagen}
            className="rounded-center"
            alt={descripcion}
          />
        </ContainerImgStyled>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{nombre}</h5>
              <button
                type="button"
                onClick={() => eliminarItem(id_plato)}
                className="button"
              >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </button>
            </div>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">{precio}</p>
            <InputCompraStyled
              type="number"
              id={id_plato}
              className="shoppingImput"
              defaultValue={cantidad}
              onChange={modificarItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCarrito;
