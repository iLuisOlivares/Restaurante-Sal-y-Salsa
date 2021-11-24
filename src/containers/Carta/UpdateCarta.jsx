import React, { Component } from "react";
import ItemPlato from "./ItemPlato";

class UpdateCarta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static: "ERR",
      platos: [
        {
          id: 1,
          nombre: "AHHH",
        },
        {
          id: 2,
          nombre: "sasa",
        },
      ],
    };
  }

  componentDidMount() {
    this.getPlatos();
  }

  getPlatos = async () => {
    await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/plato`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ platos: data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <section>
        <h1>Aquí se podrá actualizar la carta</h1>
        <input placeholder="Usuario" />

        <input placeholder="Contraseña" />
        <button>Signin</button>

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
                      ></ItemPlato>
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
