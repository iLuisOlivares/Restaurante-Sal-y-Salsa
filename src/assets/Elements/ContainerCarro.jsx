import React from "react";
import ItemsCarrito from "../../components/ItemsCarrito";

function ContainerCarro({ carrito, setValor, getPedidos }) {
 
  

  return (
    <div className="xd">
      { carrito.lenght === 0 ? (
        <p className="m-5 d-flex justify-content-center">
          No hay ningún producto en el carrito
        </p>
      ) : (
        carrito.map((item) => (
          <ItemsCarrito
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            id_plato={item.plato_id}
            id_pedido={item.id}
            key={item.id}
            imagen={item.imagen}
            cantidad={item.cantidad}
            carrito={carrito}
            setValor={setValor}
            getPedidos={getPedidos}
          />
        ))
      )}
    </div>
  );
}

export default ContainerCarro;
