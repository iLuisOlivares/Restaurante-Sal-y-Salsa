import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


function ItemContactanos({id,nombre,correo ,asunto,descripcion,contactanos,cambiar}) {

    console.log('1');
  const eliminarItem = (id) => {
    const lista = contactanos.filter((item) => item.id !== id);
    eliminarContactanos(id);
    console.log(lista);
    if(lista !== ''){
      cambiar(lista);
    }else{
      cambiar([]);
    }
    };

    
    const eliminarContactanos = async(id) =>{
        const resp = await fetch("https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/contactanos/"+ id,{
        method: 'DELETE'
        }
        );
        return(resp.ok) ? 'Borrado':'No se elimino';
    
      }
    return (
        <div style = {{backgroundColor: "rgba(28, 27, 29, 0.836)"}}className="conte text-light">
    
        <div className="d-flex justify-content-around">
        <p style={{width: "120px", fontSize: "13px"}} className="m-2 ">Nombre:  {nombre}</p>

        <p className="m-2 fw-lighter fw-lighter">{correo}</p>
            <button onClick={()=>{eliminarItem(id)}} className="m-2 btn btn-danger">   <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
        
        <div style={{backgroundColor:"#f1eded"}} className=" text-dark d-flex justify-content-around">

        <p className="m-0 p-3">{descripcion}</p>    

        </div>

    </div>

    )
}

export default ItemContactanos
