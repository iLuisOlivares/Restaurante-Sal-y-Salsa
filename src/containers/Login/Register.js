import React, { Component } from "react";
import "./login.css";
import Swal from "sweetalert2";
export default class Register extends Component {
  // add post method in fetch

  constructor() {
    super();

    this.state = {
      userName: "",
      userPassword: "",
      userPasswordConfirm: "",
      completedName: "",
      email: "",
      check: false,
      valid: false,
    };
  }

  handleSubmit = async () => {
    if (this.state.userPassword === this.state.userPasswordConfirm) {
      if (
        this.state.userName.length === 0 ||
        this.state.userPassword.length === 0 ||
        this.state.userPasswordConfirm.length === 0 ||
        this.state.completedName.length === 0 ||
        this.state.email.length === 0 ||
        this.state.check === false
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Llena todos los espacios pendientes",
        });
      } else {
        let config = {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            nombre_usuario: this.state.userName,
            contrasena: this.state.userPassword,
            nombre_completo: this.state.completedName,
            correo: this.state.email,
          }),
        };

        await fetch(
          `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/cliente/`,
          config
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Registro éxitoso",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Aceptar",
            }).then(async (result) => {
              if (result.isConfirmed) {
                this.menuScreen();
              }
            });
          });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no son iguales",
      });
    }
  };

  menuScreen = () => {
    window.location.pathname = "/";
    setTimeout(() => window.location.reload(false), 2000);
  };

  render() {
    return (
      <form className="formulario-container">
        <h1 className="titulo">Registro</h1>
        <input
          type="name"
          placeholder="Nombre de usuario"
          className="input-formulario"
          onChange={(e) => this.setState({ userName: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="input-formulario"
          onChange={(e) => this.setState({ userPassword: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirma contraseña"
          className="input-formulario"
          onChange={(e) =>
            this.setState({ userPasswordConfirm: e.target.value })
          }
          required
        />
        <label className="subTitulo">Datos personales</label>
        <input
          placeholder="Nombre y apellidos completos"
          className="input-formulario"
          onChange={(e) => this.setState({ completedName: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          className="input-formulario"
          onChange={(e) => this.setState({ email: e.target.value })}
          required
        />
        <label className="check-terms">
          <input
            name="isGoing"
            type="checkbox"
            className="check-terms"
            onChange={(e) => this.setState({ check: e.target.checked })}
            required
          />
          <label className="check-terms-text"> Téminos y condiciones, </label>
          <a href="/" className="check-terms-text">
            haz click aquí para verlos.
          </a>
        </label>
        <button type="button" onClick={this.handleSubmit} className="btn-r">
          Registrarse
        </button>
      </form>
    );
  }
}
