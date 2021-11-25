import React from "react";
import { useHistory } from "react-router";
import UseAuth from "./auth/useAuth";
import "./login.css";

export default function Login() {
  const history = useHistory();

  const auth = UseAuth();

  const handleLogin = () => {
    auth.login();
    history.push("/inicioAdmin");
  };

  const getUser = () => {
    fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/cliente`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <form className="formulario-container">
        <h1 className="titulo">Inicio de sesión</h1>
        <input
          type="name"
          placeholder="Nombre de usuario"
          className="input-formulario"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="input-formulario"
        />
        <button type="button" onClick={handleLogin} className="btn-r">
          Entrar
        </button>
      </form>
    </section>
  );
}
