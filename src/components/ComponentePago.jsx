import React, { useEffect, useState } from "react";
import ComponenteModal from "./ComponenteModal";

function ComponentePago({ carrito, setCarrito }) {
  
  const [total, setTotal] = useState(0);
  

  // const calcularPrecio = () => {
  //   let precio = 0;
  //   for (const iterator of carrito) {
  //     let total = iterator.precio * iterator.cantidad;
  //     precio = total + precio;
  //   }
  //   return precio;
    
  // };

  // for (const iterator of carrito) {
  //   console.log(iterator.cantidad * iterator.precio);
  //   let sum=iterator.cantidad * iterator.precio
  //   setTotal(total + sum)
  // }
  
  const calcularPrecio = () => {
    setTimeout(() => console.log("k trate?", carrito), 0)
    
  };
  
  useEffect(() => {
    let valor = calcularPrecio();
    console.log("total",valor)
  }, [total]);

  return (
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
            defaultValue={total}
            id="costo-total"
            className="text-dark d-flex justify-content-center card-text"
          />
          <div className=" d-flex justify-content-center  ">
            <ComponenteModal
              precio={total}
              carrito={carrito}
              setCarrito={setCarrito}
            ></ComponenteModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentePago;
