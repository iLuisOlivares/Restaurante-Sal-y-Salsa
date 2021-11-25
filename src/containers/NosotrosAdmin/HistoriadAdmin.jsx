import React from 'react'
import { useState } from 'react'
import "./styleNosotros.css"

function HistoriadAdmin({nombre,foto,descripcion,historia}) {


  const [nombreR, setNombreR] = useState(nombre);
  const [imagenR, setImagenR] = useState(foto);
  const [descripcionR, setDescripcionR] = useState(descripcion);
  const [historiaR, setHistoriaR] = useState(historia);

  const onChange = (e,setEstado) => {
      setEstado(e.target.value);
  }

  const updateEstado = async(object)=>{

    const resp = await fetch("https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/restaurante",{
        method: 'PUT',
        body: JSON.stringify(object),
        headers:{'Content-Type': 'application/json'}
        });

        return(resp.ok) ? 'Actualizado' : 'No Actualizado'
}

  const onClick = () => {

    const nosotrosO = {
      id: 1,
      nombre: nombreR,
      imagen: imagenR,
      descripcion: descripcionR,
      historia: historiaR
    }
    updateEstado(nosotrosO).then(console.log);
  }


    return (
        <div className="fondo card mb-3 p-3 bg" style={{maxWidth: "1800px", minHeight: "500px"}}>
        <div className="row">
          <div className="col-lg-6 ">
            <img src={imagenR} className="img-fluid rounded-start" alt="..."/>
            <div ><textarea onChange={(e)=>{onChange(e,setImagenR)}} name="imagen" defaultValue= {foto} className="textareas2 text-dark   mt-2" /></div>

          </div>
          <div className="p-0 col-lg-6 rounded-3">
            <div className="p-3 card-body rounded-3 fondo">
              <textarea onChange={(e)=>{onChange(e,setNombreR)}} name="nombre" defaultValue= {nombre} className="textitulos text-dark  card-title text-light pb-4" />
              <textarea onChange={(e)=>{onChange(e,setHistoriaR)}}  name="historia" defaultValue= {historia} className="textareas text-dark  card-text text-light fs-5"/>
            </div>
            <div className="p-3 card-body rounded-3 fondo">
              <h3 className="text-dark  card-title text-light pb-3"> <b className="msg__in">¿Quienes somos?</b></h3>
              <textarea onChange={(e)=>{onChange(e,setDescripcionR)}}   name="descripcion" defaultValue = {descripcion} className="textareas text-dark  card-text text-light fs-5"/>
            </div>
          </div>

        </div>
        <div className="d-flex justify-content-end">
        <button onClick={()=>{onClick()}} className="text-light btn btn-info ">Actualizar</button>

        </div>
      </div>
    )
}

export default HistoriadAdmin
