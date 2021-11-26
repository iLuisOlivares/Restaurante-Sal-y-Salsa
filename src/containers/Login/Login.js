import React, { useState } from "react";
import { useHistory } from "react-router";
import UseAuth from "./auth/useAuth";
import "./login.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AuthData from "./auth/AuthData";

const MySwal = withReactContent(Swal);

export default function Login() {
  const history = useHistory();

  const auth = UseAuth();
  let userId = 0;
  let userType = "";

  const instance = new AuthData();

  const handleLogin = () => {
    // auth.login();

    if (userType === "U") {
      let isLogin = true;
      instance.login(isLogin, userId);
      history.push("/carta");
    } else if (userType === "A") {
      let isLogin = true;
      instance.loginAdmin(isLogin, userId);
      history.push("/inicioAdmin");
    }

    window.location.reload(false);
  };

  const getUser = () => {
    if (userName.length === 0 || password.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los espacios pendientes",
      });
    } else {
      // console.log("la contraseña es:", password);
      // console.log("la usuario es:", userName);
      fetch(
        `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/cliente/${userName}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          if (data.length === 0) {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "El usuario no existe",
              confirmButtonColor: "#3085d6",
            });
          } else {
            let dbUser = data[0].nombre_usuario;
            let dbPass = data[0].contrasena;
            userId = data[0].id;
            userType = data[0].tipo_usuario;

            if (dbUser === userName && dbPass === password) {
              MySwal.fire({
                title: "Inicio de sesión éxitoso",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Aceptar",
              }).then(async (result) => {
                if (result.isConfirmed) {
                  handleLogin();
                }
              });
            } else {
              MySwal.fire({
                icon: "error",
                title: "La contraseña es incorrecta",
                confirmButtonColor: "#3085d6",
              });
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <form className="formulario-container">
        <h1 className="titulo">Inicio de sesión</h1>
        <input
          type="name"
          placeholder="Nombre de usuario"
          className="input-formulario"
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="input-formulario"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={getUser} className="btn-r">
          Ingresar
        </button>
      </form>
    </section>
  );
}
