import React, { Component } from "react";
import ItemPlato from "./ItemPlato";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class UpdateCarta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static: "ERR",
      platos: [],
      rest_id: 1,
      platoName: "ERR",
      platoDescription: "ERR",
      platoImg: "ERR",
      platoPrecio: 0,
    };
  }

  componentWillMount() {
    this.getPlatos();
    // alert("traer platos");
  }

  getPlatos = async () => {
    await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/plato`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ platos: data }))
      .catch((err) => console.log(err));
  };

  verifyInputs = () => {
    if (
      this.state.platoName === "ERR" ||
      this.state.platoDescription === "ERR" ||
      this.state.platoImg === "ERR" ||
      this.state.platoPrecio === 0
    ) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los espacios pendientes",
      });
    } else if (
      this.state.platoName !== "ERR" ||
      this.state.platoDescription !== "ERR" ||
      this.state.platoImg !== "ERR" ||
      this.state.platoPrecio !== 0
    ) {
      console.log("NO HACE EL FECTH");

      this.postPlato();

      return console.log("Confirmado");
    } else {
      console.log("NO FUNCIONA");
    }
  };

  async postPlato() {
    await fetch(
      "https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/plato",
      {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          restaurante_id: this.state.rest_id,
          nombre: this.state.platoName,
          descripcion: this.state.platoDescription,
          imagen: this.state.platoImg,
          precio: this.state.platoPrecio,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire("¡Agregado!", "El plato ha sido agregado.", "success");
        this.getPlatos();
      });
  }

  render() {
    return (
      <section>
        <h1 className="title-admin">Administración del Menú</h1>
        <form className="create-platos-container">
          <label>Id del restaurante</label>
          <input
            placeholder="Restaurante"
            value={this.state.rest_id}
            className="input-create-platos"
            required
          />

          <label>Nombre del plato</label>
          <input
            placeholder="Nombre del plato"
            onChange={(e) => this.setState({ platoName: e.target.value })}
            className="input-create-platos"
            required
          />

          <label>Descripción del plato</label>
          <input
            placeholder="Descripción del plato"
            onChange={(e) =>
              this.setState({ platoDescription: e.target.value })
            }
            className="input-create-platos"
            required
          />

          <label>Imagen del plato</label>
          <input
            placeholder="Pega la URL de la imagen del plato"
            onChange={(e) => this.setState({ platoImg: e.target.value })}
            className="input-create-platos"
            required
          />

          <label>Precio del plato</label>
          <input
            placeholder="Precio del plato"
            onChange={(e) => this.setState({ platoPrecio: e.target.value })}
            className="input-create-platos"
            required
          />
          <button type="button" className="btn-cam" onClick={this.verifyInputs}>
            Crear nuevo plato
          </button>
        </form>

        <section className="m-3">
          <div className="container">
            <div style={{ minHeight: "200px" }} className="srow">
              <div className="col-12">
                <div className="">
                  <div className="nav-r">
                    <div className="text-light px-2 py-2 d-flex  justify-content-around filtros">
                      <h5 className="m-0">Administrar Platos</h5>
                    </div>
                  </div>

                  <div className="body-r">
                    {this.state.platos.map((data, index) => (
                      <ItemPlato
                        key={index}
                        platoId={data.id}
                        nombre={data.nombre}
                        descripcion={data.descripcion}
                        precio={data.precio}
                        imagen={data.imagen}
                        platillos={this.state.platos}
                        setPlatillos={this.setState}
                        funGetPlato={this.getPlatos}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default UpdateCarta;
