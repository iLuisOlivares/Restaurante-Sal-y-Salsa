import React from 'react'
import { useState } from "react";
import { Button } from "bootstrap";
import InputModal from "./InputModal";
import Swal from "sweetalert2";


function ActualizarModal({ids, id, servicios, setServicios,nombre1,descripcion, ima ,api}) {
    const presetCloud = 'jkby2ddk';
    const apiCLoud = 'https://api.cloudinary.com/v1_1/iluiss/upload'
    
    const [url,setUrl] = useState(ima);
    const [nombre,setNombre] = useState(nombre1);
    const [cargo,setCargo] = useState(descripcion);

    
    const agregarItem = (servicio) => {
        const lista = servicios.filter((item) => item.id !== ids);
        putServicio(servicio);
        if(lista !== ''){
            setServicios([...lista, servicio]);
          }else{
            setServicios([]);
          }
          };
      
        


    const putServicio = async (servicio) => {const resp = await fetch(api,{
        method: 'PUT',
        body: JSON.stringify(servicio),
        headers:{'Content-Type': 'application/json'}
        });

        return(resp.ok) ?   Swal.fire({
          title: "Actualizado",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Aceptar",
        })  :  Swal.fire({
          title: "Error no eliminado",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Aceptar",
        });
    };

    const SubirEmpleado = () =>{
        if(url === 'Subiendo'){
          Swal.fire({
            title: "Espere que se suba la imagen",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
          });
        }else if(!url || !nombre || !cargo){
          Swal.fire({
            title: 'Por favor digite o suba todos los datos solicitados',
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
          });
        }else{
            console.log(url);
            const servicio = {
                id: ids,
                restaurante_id: 1,
                nombre: nombre,
                descripcion: cargo,
                imagen: url.toString()
            }
            console.log(servicio);
            agregarItem(servicio);
            }
    }
    const obtenerInfo = (e) => {
        subir(e.target.files[0]).then((result) => {

        }).catch((err) => {
            console.log(err);
        });

    }
    
  

    const subir= async(file) => {

        const formData = new FormData();
        formData.append('upload_preset',presetCloud);
        formData.append('file',file);
        setUrl('Subiendo');

        try{
            const resp  = await fetch(apiCLoud, {
                method: 'POST',
                body:formData
            })

            if(resp.ok){
                const cloudResp = await resp.json();
                Swal.fire({
                  title: "Espere que se suba la imagen",
                  icon: "warning",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "Aceptar",
                });
                setUrl(cloudResp.url);
            }else{
                throw await resp.json();
            }

        }catch(error){
            throw error 
        }
    }

    return (
        <>
        <button
          type="button"
          className="m-1 text-light btn btn-info "
          data-bs-toggle="modal"
          data-bs-target= {"#" + id}
        >
          Actualizar
        </button>
  
        <div
          className="modal fade"
          id= {id}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Actualizar 
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form >
  
                  <InputModal
                  className="text-dark"
                  nombre = "Nombre:"
                  defaulValue = {nombre}
                  setInput= {setNombre}
                  
                  ></InputModal>
                    <InputModal
                  nombre = "Descripcion:"
                  defaulValue = {cargo}
                  setInput= {setCargo}
                  ></InputModal>
                  
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Imagen:
                    </label>
                    <input onChange={obtenerInfo} type="file" className="form-control" id="recipient-name" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button onClick={SubirEmpleado} type="button" className="text-light btn btn-info" data-bs-dismiss="modal" >
                  Actualizar
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </>   
    )
}

export default ActualizarModal
