import React, { useEffect, useState } from "react";
import ComponenteModal from "./ComponenteModal";

function ComponentePago({ eliminarItem, precio,}) {
  const [total, setTotal] = useState(0);

  const calcularPrecio = () => {
    
  };

  useEffect(() => {
    let valor = calcularPrecio();
    console.log("total", valor);
  }, [total]);

  return (
    <div className="col-4">
   
          <div className=" d-flex justify-content-center  ">
            <ComponenteModal
              eliminarItem = {eliminarItem}
              precio={precio}
            ></ComponenteModal>
      </div>
    </div>
  );
}

export default ComponentePago;
