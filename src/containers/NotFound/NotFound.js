import React, { Fragment, useEffect, useState } from "react";
import "./NotFound.css";

/* 
  Container para mostrar el diseño de la página Not Found
*/

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      setTitle("Error 404");
      setText("Página no encontrada");
    }, 3000);
  }, [""]);

  const [title, setTitle] = useState("Cargando...");
  const [text, setText] = useState("Espera un momento");
  return (
    <Fragment>
      <section className="container__error">
        <section className="container__error--details">
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      </section>
    </Fragment>
  );
};

export default NotFound;
