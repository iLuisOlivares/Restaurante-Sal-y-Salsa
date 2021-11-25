import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComponentePago from "../../components/ComponentePago";
import ContainerCarro from "../../assets/Elements/ContainerCarro";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  // const [carrito, setCarrito] = useState(JSON.parse(window.localStorage.getItem("Carrito")));
  useEffect(() => {
    // let data = localStorage.getItem("Carrito");
    // if (data != null) {
    //   setCarrito(JSON.parse(data));
    // }
    getPlatos(20);
  }, []);

  const getPlatos = async (id) => {
    await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/pedido/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // data.map()
        // setCarrito(data);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   alert("Primero");
  //   // localStorage.setItem("Carrito", JSON.stringify(carrito));
  // }, [carrito]);

  return (
    <div className="my-5 container-xxl" style={{ minHeight: "74vh" }}>
      <h2 className="d-flex pb-4 justify-content-center fw-bold">
        Carrito de compra
      </h2>

      {/* Contenedor de los items  */}
      <main className="container">
        <div className="row">
          <div className="card col-8 p-1">
            <ContainerCarro carrito={carrito} setCarrito={setCarrito} />
          </div>

          {/* < Contenedor para pagar todo  */}
          <ComponentePago carrito={carrito} setCarrito={setCarrito} />
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
};

export default Carrito;
