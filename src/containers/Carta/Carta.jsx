import React, { Fragment, Component } from "react";
import "./Carta.css";
import ItemPlato from "../../components/ItemPlato";
import { Link } from "react-router-dom";

/* 
  Container para mostrar el diseño de la página Carta
*/
import "bootstrap/dist/css/bootstrap.min.css";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

class Carta extends Component {
  constructor() {
    super();
    this.state = {
      carta: [],
    };
  }

  componentWillMount() {
    this.getPlatos();
  }

  getPlatos = async () => {
    await fetch(
      `https://restaurante-sal-salsa20211123190304.azurewebsites.net/api/plato`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ carta: data }))
      .catch((err) => console.log(err));
  };

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
    };

    return (
      <Fragment>
        {/* Main content */}
        <main className="main-carta">
          {/* Título del container  */}
          <h2 className="o-title-menu">El menú</h2>

          {/* El container del menú */}
          <div className="container">
            {/* Carrosel items */}
            <div>
              <Slider {...settings}>
                <div className="row row-cols-md-3 g-4 o-fix-column">
                  {this.state.carta.length === 0 ? (
                    <p className="m-5 d-flex justify-content-center">
                      No hay ningún platillo en el Menú
                    </p>
                  ) : (
                    this.state.carta.map((item) => (
                      <ItemPlato
                        key={item.id}
                        tituloPlato={item.nombre}
                        descripcionPlato={item.descripcion}
                        imgPlato={item.imagen}
                        precioPlato={item.precio}
                        idPlato={item.id}
                        // carrito={carrito}
                        // setCarrito={setCarrito}
                        // platillos={platillos}
                      />
                    ))
                  )}
                </div>
              </Slider>
            </div>
          </div>
        </main>

        {/* Link to download the menu  */}
        <div className="o-menu-doc">
          <Link to="/files/Menu_Completo.pdf" target="_blank" download>
            Descarga el Menú completo aquí
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Carta;
