import React from 'react'


const styleUs = {
    width: "18rem"
}


function EmpleadoComponent({nombre,foto,descripcion}) {
    return (
        <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
        <div className="card col-4" style={styleUs}>
          <div ><img style= {{width:"286px", height:"286px",objectFit:"cover" }} src={foto} className="card-img-top" alt="..."/></div>
          <div className="card-body">
            <h3 className="card-text d-flex justify-content-center">{nombre}</h3>
            <p className="card-text d-flex justify-content-center">{descripcion}</p>
          </div>
        </div>
      </div>
    )
}

export default EmpleadoComponent
