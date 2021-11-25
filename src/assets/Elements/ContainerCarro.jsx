import React from "react";
import ItemsCarrito from "../../components/ItemsCarrito";

function ContainerCarro({ carrito, setCarrito, setValor }) {

  return (
    <div className="xd">
      { carrito.length === 0 ? (
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
            imagen= {item.imagen}
            cantidad={item.cantidad}
            carrito={carrito}
            setCarrito={setCarrito}
            setValor={setValor}
          />
        ))
      )}
    </div>
  );
}

export default ContainerCarro;
