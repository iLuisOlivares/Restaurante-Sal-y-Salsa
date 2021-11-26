import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputModal from '../ServiciosAdmin/InputModal';
import {faEdit} from "@fortawesome/free-solid-svg-icons";


function UpdateModal({ids, id, platillos, setPlatillos,nombre1,descripcion,precio1,imagen1,api, funGetPlato}) {

    const presetCloud = 'jkby2ddk';
    const apiCLoud = 'https://api.cloudinary.com/v1_1/iluiss/upload'
    
    const [url,setUrl] = useState(imagen1);
    const [nombre,setNombre] = useState(nombre1);
    const [cargo,setCargo] = useState(descripcion);
    const [precio,setPrecio] = useState(precio1);

    const SubirEmpleado = () =>{
        if(url === 'Subiendo'){
            alert('Por favor espere a que se suba la imagen')
        }else if(!url || !nombre || !cargo || !precio){
            alert('Por favor digite o suba todos los datos solicitados');
        }else{
            console.log(url);
            const plato = {
                id: ids,
                restaurante_id: 1,
                nombre: nombre,
                descripcion: cargo,
                precio: precio,
                imagen: url.toString()
            }
            console.log(plato);
            agregarItem(plato);
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
                alert('imagen subida');
                console.log(cloudResp);
                setUrl(cloudResp.url);
            }else{
                throw await resp.json();
            }

        }catch(error){
            throw error 
        }
    }
    

    const agregarItem = (plato) => {
        const lista = platillos.filter((item) => item.id !== ids);
        putPlato(plato);
        // if(lista !== ''){
        //     setPlatillos([...lista, plato]);
        //   }else{
        //     setPlatillos([]);
        //   }
          };

    const putPlato = async (plato) => {const resp = await fetch(api,{
        method: 'PUT',
        body: JSON.stringify(plato),
        headers:{'Content-Type': 'application/json'}
        });
        funGetPlato();
        return(resp.ok) ? 'Actualizado' : 'No Actualizado'
    };

    
    return (
        <Fragment>
            <button
            data-bs-toggle="modal"
            data-bs-target= {"#" + id}
            onClick={() => {
              // UpdatePlato(platoId);
            }}
            className="m-2 btn btn-info"
                  >
            <FontAwesomeIcon style={{color:"white"}} icon={faEdit}></FontAwesomeIcon>
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
                <h5 className="modal-title text-dark" id="exampleModalLabel">
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
                <form>
  
                  <InputModal
                  nombre = "Nombre:"
                  setInput= {setNombre}
                  tipo = "text"
                  defaulValue = {nombre1}
                  
                  ></InputModal>
                  <InputModal
                  nombre = "Precio:"
                  setInput= {setPrecio}
                  tipo = "number"
                  defaulValue = {precio1}
                  ></InputModal>

                    <InputModal
                  nombre = "Descripcion:"
                  setInput= {setCargo}
                  tipo = "text"
                  defaulValue = {cargo}
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
        </Fragment>
    )
}

export default UpdateModal
