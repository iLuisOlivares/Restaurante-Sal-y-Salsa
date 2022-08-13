import React from "react";
import { LabelStyled } from "./Formularios";

function SelectElement({ estado, cambiarEstado }) {
  const validacion = (e) => {
    const valor = e.target.value;
    console.log(valor);

    if (valor.length === 0) {
      cambiarEstado({ ...estado, valido: "false" });
    } else {
      cambiarEstado({ campo: valor, valido: "true" });
    }
  };
  return (
    <div className="mb-4 " id="grupo_select">
      <LabelStyled className="form-label ">Seleccione el servicio</LabelStyled>
      <select
        onChange={validacion}
        defaultValue="Reunion"
        name="select"
        id="select-id"
        className="item-formulario form-select"
      >
        <option value="5"> Reunión</option>
        <option value="2"> Celebración de cumpleaños </option>
        <option value="1"> Aniversarios </option>
        <option value="3"> Fiestas infantiles </option>
        <option value="4"> Cena con amigos </option>
      </select>
    </div>
  );
}

export default SelectElement;
