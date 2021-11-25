import React from 'react'



function ServicioAdmin({id, nombre,foto,descripcion,cargo,obtenerEmpleados,servicios, setServicios}) {


  
  const eliminarItem = (id) => {
    const lista = servicios.filter((item) => item.id !== id);
    eliminarEmpleado(id);
    console.log(lista);
    if(lista !== ''){
      setServicios(lista);
    }else{
      setServicios([]);
    }
    };

  const eliminarEmpleado = async(id) =>{
    const resp = await fetch("https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/servicio/"+ id,{
    method: 'DELETE'
    }
    );
    return(resp.ok) ? 'Borrado':'No se elimino';

  }




    return (
    //     <div className="col-12 col-lg-4 col-md-6 d-flex p-3 align-items-center justify-content-center">
    //     <div className="card col-4" style={styleUs}>
    //       <img src={foto} className="card-img-top" alt="..."/>
    //       <div className="card-body">
    //         <h3 className="card-text d-flex justify-content-center"></h3>
    //         <p className="card-text d-flex justify-content-center"></p>
    //       </div>
    //     </div>
    //   </div>
    <div className="m-3 card my-3" style={{maxWidth: "600px"}}>
  <div className="row g-0">
    <div className="col-md-3">
      <img style={{objectFit:"cover", width:"126px", height:"126px"}} src={foto} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{cargo}</p>
        <p className="card-text"><small className="text-muted">{descripcion}</small></p>
      </div>
    </div>
    <div  className="d-flex justify-content-end">
    {/* <button className="m-1 text-light btn btn-info ">Actualizar</button> */}
    <button  onClick={()=>{eliminarItem(id)}} className="m-1 text-light btn btn-danger ">Eliminar</button>
    </div>

  </div>
  
</div>

    )
}

export default ServicioAdmin
