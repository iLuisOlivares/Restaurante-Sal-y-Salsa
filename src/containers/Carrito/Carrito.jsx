import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import ComponentePago from "../../components/ComponentePago";
import ContainerCarro from "../../assets/Elements/ContainerCarro";
import { render } from "react-dom";
// import ComponenteModal from "./ComponenteModal";

class Carrito extends Component {
  constructor() {
    super();
    this.state = {
      carrito: [],
      totalPrice: 0,
    };
  }

  componentWillMount() {
    this.getPedidos(parseInt(localStorage.getItem("ui")));

    setTimeout(() => this.calcularTotal(), 1000);
  }

  calcularTotal() {
    let aux = 0;
    // console.log("02", this.state.carrito);
    for (const iterator of this.state.carrito) {
      aux += iterator.precio * iterator.cantidad;
    }
    console.log(aux);
    localStorage.setItem("totalPrice", aux);
    document.getElementById("costo-total").value =
      localStorage.getItem("totalPrice");
    // this.setState({ totalPrice: aux });
  }

  getPedidos = async (id) => {
    await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // data.map()
        // setCarrito(data);
        this.setState({ carrito: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="my-5 container-xxl" style={{ minHeight: "74vh" }}>
        <h2 className="d-flex pb-4 justify-content-center fw-bold">
          Carrito de compra
        </h2>

        {/* Contenedor de los items  */}
        <main className="container">
          <div className="row">
            <div className="card col-8 p-1">
              <ContainerCarro
                carrito={this.state.carrito}
                setValor={this.setState}
              />
            </div>

            {/* < Contenedor para pagar todo  */}
            <div className="col-4">
              <div className=" card d-flex align-content-center ">
                <div
                  style={{ backgroundColor: "rgb(0 0 0 / 80%)" }}
                  className="card-body  "
                >
                  <h5 className="card-title text-light d-flex justify-content-center ">
                    Total
                  </h5>
                  <input
                    value={this.state.totalPrice}
                    id="costo-total"
                    className="input-carrito-ls"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Boton seguir comprando */}
          <div className="m-3 d-flex justify-content-center">
            <Link
              style={{
                width: "20rem",
                color: "white",
                backgroundColor: "rgba(182, 6, 6, 0.8)",
              }}
              className="btn btn-light "
              to="/carta"
            >
              Continuar comprando
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Carrito;
