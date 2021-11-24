import React from "react";
import { useHistory } from "react-router";
import UseAuth from "../Login/auth/useAuth";
import "./login.css";

export default function Login() {
  const history = useHistory();

  const auth = UseAuth();

  const handleLogin = () => {
    auth.login();
    history.push("/inicioAdmin");
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

        <button onClick={handleLogin} className="btn-r">
          Entrar
        </button>
      </form>
    </section>
  );
}
