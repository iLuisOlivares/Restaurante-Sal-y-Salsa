import React from 'react'
import { InputStyled, LabelStyled, LeyendaStyled } from './Formularios'

const hoy = new Date();
const minFecha = hoy.toISOString().split('T')[0];


function InputDate({estado,cambiarEstado, label,leyenda,name}) {

    const validacion = (e) => {
      
        if(e.target.validity.valid === true){
        cambiarEstado('true');
        }else if(e.target.validity.rangeOverflow === true || e.target.validity.rangeUnderflow === true){
        cambiarEstado('false');
      }
    }

    return(
        <div style={{minHeight: "100px"}} className="mb-0" id="grupo_fecha">
            <LabelStyled valido={estado} htmlFor="" className="form-label">{label}</LabelStyled>
            <InputStyled name={name} valido={estado} type="date" min={minFecha} defaultValue={minFecha} onChange={validacion} onKeyUp = {validacion} onBlur={validacion} className="item-formulario form-control "/>                
            <LeyendaStyled valido={estado} className="form-text msg_ok">{leyenda}</LeyendaStyled>
        </div>
  
      )
}

export default InputDate
