import React from 'react'
import Swal from 'sweetalert2';
import ActualizarModal from './ActualizarModal';


function ServicioAdmin({id, nombre,foto,descripcion,cargo,obtenerEmpleados,servicios, setServicios}) {

  const identficador =  "identificador"+id ;
  
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
    const resp = await fetch("https://localhost:5001/api/servicio/"+ id,{
    method: 'DELETE'
    }
    );
    return(resp.ok) ? Swal.fire({
      title: 'Borrado',
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    }): Swal.fire({
      title: 'No se elimino',
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });

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
    <div className="m-3 p-0 card my-3" style={{maxWidth: "600px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{objectFit:"cover", width:"226px", height:"156px"}} src={foto} className="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{cargo}</p>
        <p className="card-text"><small className="text-muted">{descripcion}</small></p>
      </div>
      <div  className="d-flex justify-content-end">
    <ActualizarModal
      ids = {id}
      id = {identficador} 
      nombre1 = {nombre}
      ima = {foto}
      api = "https://localhost:5001/api/servicio"
      servicios = {servicios}
      setServicios = {setServicios}
      descripcion = {descripcion} ></ActualizarModal>
    <button  onClick={()=>{eliminarItem(id)}} className="m-1 text-light btn btn-danger ">Eliminar</button>
    </div>

    </div>
    
  </div>
  
</div>

    )
}

export default ServicioAdmin
