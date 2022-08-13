import React from "react";
import InputContact from "../ContacUs/InputContact";
import { useState, useEffect } from "react";
import ComentariosDiv from "../../components/ComentariosDiv";
import { Link } from "react-router-dom";
const expresiones = {
  descripcion: /^[a-zA-ZÀ-ÿ\s\W]{1,}$/, // Letras y espacios, pueden llevar acentos.
};

const style1 = {
  height: "500px",
  background: "#ffffff",
  overflowY: "scroll",
  wordWrap: "break-word",
};

function Comentarios() {
  const [mensaje, cambiarMensaje] = useState({ campo: "", valido: null });
  const [respuestas, cambiarRespuestas] = useState([]);

  useEffect(() => {
    console.log("si");
    obtenerComentarios();
  }, []);

  const obtenerComentarios = async () => {
    const data = await fetch(
      "https://localhost:5001/api/comentario"
    );
    const resp = await data.json();
    console.log(resp);
    cambiarRespuestas(resp);
  };

  return (
    <div className="mt-5 container ">
      <h2 className="p-4 d-flex justify-content-center">Comentarios</h2>

      {localStorage.getItem("isLogin") ? (
        <InputContact
          estado={mensaje}
          cambiarEstado={cambiarMensaje}
          label="Mensaje"
          placeholder="Deja tu mensaje"
          inputType="text"
          leyenda="Escriba un mensaje valido"
          expresionRegular={expresiones.descripcion}
          obtenerComentarios={obtenerComentarios}
        />
      ) : (
        <Link to="/login" className="mb-3 message-info">
          Inicia sesión para escribir un comentario
        </Link>
      )}
      <div>
        <div className="mt-5 shadow container rounded" style={style1}>
          <div className="m-3">
            {respuestas.map((resp) => (
              <ComentariosDiv
                key={resp.id}
                usuarioId={resp.cliente_id}
                nombre={resp.nombre_completo}
                mensaje={resp.comentario}
                fecha={resp.fecha}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comentarios;
