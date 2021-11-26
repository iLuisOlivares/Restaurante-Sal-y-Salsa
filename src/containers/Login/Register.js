import React from "react";
import "./login.css";

export default function Register() {
  // add post method in fetch


  handleSubmit = async e => {
    e.preventDefault()

  try{
    let config = {
      method: 'POST',
      headers: {
        'Acecept':'aplicaction/json'
      },
      body: JSON.stringify(this.state.form)
    }

    let res = await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/cliente/`, config
    )

    let json= await res.json()

    console.log(json);
  } catch (error){

  }}  
  


  return (
    <form className="formulario-container">
      <h1 className="titulo">Registro</h1>
      <input
        type="name"
        placeholder="Nombre de usuario"
        className="input-formulario"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="input-formulario"
        required
      />
      <input
        type="password"
        placeholder="Confirma contraseña"
        className="input-formulario"
        required
      />
      <label className="subTitulo">Datos personales</label>
      <input
        placeholder="Nombre y apellidos completos"
        className="input-formulario"
        required
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        className="input-formulario"
        required
      />
      <label className="check-terms">
        <input
          name="isGoing"
          type="checkbox"
          className="check-terms"
          required
        />
        <label className="check-terms-text"> Téminos y condiciones, </label>
        <a href="food.com.co" className="check-terms-text">
          haz click aquí para verlos.
        </a>
      </label>
      <button type="submit" className="btn-r">
        Registrarse
      </button>
    </form>
  );
}
