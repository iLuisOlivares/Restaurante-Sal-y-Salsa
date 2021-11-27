import React, { useState } from "react";
import emailjss from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ComponenteModal({ precio, carrito, eliminarItem }) {
 
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
 
  const MySwal = withReactContent(Swal);

  const sendAlert = (bool) => {
    MySwal.fire({
      title: <p>Juventic</p>,
      footer: "Copyright 2021",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      if (bool) {
        return Swal.fire({
          title: "Compra exitosa!",
          text: "Su compra ha sido exitosa",
          icon: "success",
          confirmButtonText: "Éxito",
        }).then((result=>{
          if(result.isConfirmed){
        window.location.pathname = "/"
          }

        }));
      } else {
        return Swal.fire({
          title: "Compra Rechazada!",
          text: "Rellene todos los valores correctamente",
          icon: "error",
          confirmButtonText: "Éxito",
        });
      }
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(nombre ==='' || correo === ''){
      sendAlert(false)
      
      
    }else{
      emailjss
      .sendForm(
        "service_abyircw",
        "template_quhzvbj",
        e.target,
        "user_D3SnG2Ug2C29tarRbxdi0"
        )
        .then(
          (result) => {
            console.log(result.text);
            sendAlert(true);
            eliminarItem();
            e.target.reset();
            
        },
        (error) => {
          sendAlert(false);
          console.log(error.text);
        }
      );
    }
  };

  const eliminarAllItems = async () => {
    const lista = carrito.filter((item) => item.id === 0);
    // await fetch(
    //   "https://store-express-greg.herokuapp.com/api/v1/orders/",
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  };

  return (
    <>
      <button
        style={{ backgroundColor: "rgb(196 55 55)" }}
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Pagar
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Procedimiento de pago
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Correo electronico al que desea le llegue la factura
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange ={(e)=>{setCorreo(e.target.value);  }}
                    onClick ={ (e)=>{setCorreo(e.target.value); }}

                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="nombre"
                    onChange ={(e)=>{setNombre(e.target.value); }}
                    onClick ={ (e)=>{setNombre(e.target.value); }}
                  />
                </div>

                <input
                  type="text"
                  className="form-control"
                  name="lol"
                  defaultValue= {precio}
                  // disabled
                  style={{ display: "none" }}
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    value="send"
                    type="submit"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Pagar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponenteModal;
