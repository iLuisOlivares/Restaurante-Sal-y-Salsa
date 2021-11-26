import React, { Fragment } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NumericInput from "react-numeric-input";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ItemPlato = ({
  tituloPlato,
  descripcionPlato,
  imgPlato,
  precioPlato,
  idPlato,
}) => {
  const verifyRepeatData = async () => {
    // CHANGE THE userId BY THE LOGIN DATA
    let userId = parseInt(localStorage.getItem("ui"));
    const response = await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido/${userId}`
    );
    const resp = await response.json();
    console.log(resp);

    if (resp.length === 0) {
      postData();
      // alert("Crealo totalmente");
    } else {
      // verify if the product is in plato_id
      let updateData = false;
      let saveItem;

      resp.map((item) => {
        if (item.plato_id == idPlato) {
          updateData = true;
          saveItem = item;
        }
      });
      if (updateData) {
        putData(saveItem);
      } else {
        return postData();
      }
    }
  };

  const putData = async (item) => {
    let amount = parseInt(document.getElementById("id_cantidad").value);

    const response = await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido`,
      {
        method: "PUT",
        body: JSON.stringify({
          cliente_id: item.cliente_id,
          plato_id: idPlato,
          cantidad: amount,
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

    setOpen(false);
  };

  const postData = async () => {
    let amount = parseInt(document.getElementById("id_cantidad").value);

    // CHANGE THE userId BY THE LOGIN DATA
    const response = await fetch(
      "https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          cliente_id: parseInt(localStorage.getItem("ui")),
          plato_id: idPlato,
          cantidad: amount,
        }),
      }
    );
    const resp = await response.json();
    console.log(resp);
    Swal.fire({
      title: "Producto agregado",
      text: "¡Se agregó al carrito!",
      icon: "success",
      confirmButtonColor: "#3085d6",
    });
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const verificarInicio = () => {
    if (localStorage.getItem("isLogin")) {
      handleOpen();
    } else {
      Swal.fire({
        title: "Falta iniciar sesión",
        text: "Debes iniciar sesión para agregar producto al carrito",
        icon: "question",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <Fragment>
      <div className="col">
        <div className="card text-center text-white bg-dark shadow-5 h-100">
          <img src={imgPlato} className="card-img-top" alt={tituloPlato} />
          <div className="card-body text-light">
            <h4 className="m-2 card-title">{tituloPlato}</h4>
            <p className="card-text text-secondary">{descripcionPlato}</p>
          </div>
          <button className="btn btn-dark" onClick={verificarInicio}>
            Agregar al carrito <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <h1 id="o-value-plato-titulo">{tituloPlato}</h1>
          {/* <span id="o-value-plato">num</span> */}
          <p id="o-value-plato-descripcion">{descripcionPlato}</p>
          <div className="d-flex justify-content-center">
            <img
              id="o-value-plato-image"
              src={imgPlato}
              className="img-thumbnail rounded o-img-modal-container"
              style={{ height: 220 }}
              alt="imagen de plato"
            />
          </div>
          <div className="o-information-cost">
            {/* Precio */}
            <p>Precio</p>
            <span id="o-value-plato-price">{precioPlato}</span>
            <section className="o-style-btn-add-carrito">
              {/* Open whatsapp to send a message */}
              <button
                type="button"
                className="botones"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@",
                    "_blank"
                  );
                }}
              >
                Ver contacto
              </button>
              <button
                id="btn__agregar"
                onClick={() => verifyRepeatData()}
                type="button"
                className="botones"
              >
                Agregar al carrito <i className="fas fa-shopping-cart" />
              </button>

              <NumericInput
                id="id_cantidad"
                className="shopping-input"
                min={1}
                max={100}
                value={1}
              />
            </section>
          </div>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default ItemPlato;
