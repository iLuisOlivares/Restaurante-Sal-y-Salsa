import React, {useEffect, useState} from 'react'
import ItemContactanos from './ItemContactanos';

function ContactanosAdmin() {

    const [ contactanos, setContactanos] = useState([]);

    useEffect(()=>{
      console.log('si');
      obtenerContactanos();
    
    }, [])

    

    const obtenerContactanos = async () =>{
      const data = await fetch('https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/contactanos');
      const resp = await data.json();
      console.log(resp);
      setContactanos(resp);
    }

    return (
        <div className="m-3">
        <div className="container">
          <div style={{ minHeight: "200px" }} className="srow">
            <div className="col-12">
              <div className="">
                <div className="nav-r">
                  <div className="text-light px-2 py-2 d-flex  justify-content-around ">
                    <h5 className="m-0">Administrar contactanos</h5>
                  </div>
                </div>
  
                <div  style={{minHeight:"600px"}} className="body-r">
                 
                    {
                        contactanos.map((item)=>(

                            <ItemContactanos
                            key  = {item.id}
                            id = {item.id}
                            nombre = {item.nombre}
                            correo ={item.correo}
                            asunto = {item.asunto}
                            descripcion = {item.descripcion}
                            contactanos = {contactanos}
                            cambiar = {setContactanos}
                            ></ItemContactanos>

                        ))

                    }
                 
        
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactanosAdmin
