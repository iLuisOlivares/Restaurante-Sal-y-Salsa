import React, { Fragment } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import LogoTipo from "../assets/Img/LogoTipo.png";
import { NavLink } from "react-router-dom";

export default function NavSection({ modalControl, isLittle, closeModal }) {
  const history = useHistory();

  const cerrarSesion = () => {
    // delete session
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("ui");
    localStorage.removeItem("totalPrice");

    // return to login
    history.push("/login");
    window.location.reload(false);
  };

  return (
    <Fragment>
      {isLittle === false ? (
        <Fragment>
          <section className="hamburger" onClick={() => modalControl()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </section>
          <li>
            <a className="navbar-brand" href="/">
              <img className="logo" src={LogoTipo} alt="Logo" />
            </a>
          </li>

          <section className="nav-container">
            <ul className="nav-container-main-options">
              <li className="nav-item">
                <NavLink className="select-items" exact to="/">
                  Inicio
                </NavLink>
              </li>

              {/* Show control in big screen */}
              {localStorage.getItem("isAdmin") &&
              !localStorage.getItem("isLogin") ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="select-items cent-item"
                      exact
                      to="/updateCarta"
                      activeclass="active"
                    >
                      Actualizar Menú
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items cent-item"
                      exact
                      to="/admin/Reservas"
                      activeclass="active"
                    >
                      Administrar Reservas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items cent-item"
                      exact
                      to="/admin/Comentarios"
                      activeclass="active"
                    >
                      Administrar Comentarios
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items cent-item"
                      exact
                      to="/Admin/Nosotros"
                      activeclass="active"
                    >
                      Administrar Nosotros
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items cent-item"
                      exact
                      to="/Admin/Contactanos"
                      activeclass="active"
                    >
                      Administrar contáctanos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items cent-item"
                      exact
                      to="/Admin/Servicios"
                      activeclass="active"
                    >
                      Administrar Servicios
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="select-items" to="/carta">
                      Menú
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="select-items" to="/nosotros">
                      Nosotros
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="select-items" to="/servicios">
                      Servicios
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="select-items" to="/reserva">
                      Reservar
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="select-items" to="/contactanos">
                      Contáctanos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="select-items" to="/mapa">
                      Mapa
                    </NavLink>
                  </li>
                </>
              )}

              {/* hide login and register */}
              {!localStorage.getItem("isAdmin") &&
              !localStorage.getItem("isLogin") ? (
                <div className="d-flex px-6">
                  <li className="nav-item">
                    <NavLink
                      className="select-items"
                      exact
                      to="login"
                      activeclass="active"
                    >
                      Iniciar Sesión
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="select-items ali-self"
                      exact
                      to="register"
                    >
                      Registrarse
                    </NavLink>
                  </li>
                </div>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="select-items cent-item"
                    onClick={cerrarSesion}
                    to="/login"
                  >
                    Cerrar sesión
                  </NavLink>
                </li>
              )}

              {localStorage.getItem("isLogin") && (
                <li className="nav-item">
                  <NavLink className="icono-1 select-item" to="/carrito">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </NavLink>
                </li>
              )}
            </ul>
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <section>
            <ul className="container-nav-little">
              <li>
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  exact
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>

              {/* Show control in litlle screen */}
              {localStorage.getItem("isAdmin") &&
              !localStorage.getItem("isLogin") ? (
                <>
                  <li>
                    <NavLink
                      className="select-items cent-item"
                      onClick={() => closeModal(false)}
                      to="/updateCarta"
                    >
                      Admin Menú
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items cent-item"
                      onClick={() => closeModal(false)}
                      to="/admin/Reservas"
                    >
                      Admin Reservas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items ali-self"
                      onClick={() => closeModal(false)}
                      to="/admin/Comentarios"
                    >
                      Admin Comentarios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items cent-item"
                      onClick={() => closeModal(false)}
                      to="/Admin/Nosotros"
                    >
                      Admin Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items cent-item"
                      onClick={() => closeModal(false)}
                      to="/Admin/Contactanos"
                    >
                      Admin contáctanos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items cent-item"
                      onClick={() => closeModal(false)}
                      to="/Admin/Servicios"
                    >
                      Admin Servicios
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      to="/nosotros"
                    >
                      Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      to="/carta"
                    >
                      Menú
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      to="/servicios"
                    >
                      Servicios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      to="/reserva"
                    >
                      Reservar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      to="/contactanos"
                    >
                      Contáctanos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      to="mapa"
                    >
                      Mapa
                    </NavLink>
                  </li>
                </>
              )}

              {/* login and register hide */}
              {!localStorage.getItem("isAdmin") &&
              !localStorage.getItem("isLogin") ? (
                <>
                  <li>
                    <NavLink
                      className="select-items"
                      exact
                      onClick={() => closeModal(false)}
                      to="login"
                      activeclass="active"
                    >
                      Iniciar Sesión
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="select-items"
                      onClick={() => closeModal(false)}
                      exact
                      to="register"
                    >
                      Registrarse
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    className="select-items"
                    onClick={cerrarSesion}
                    to="/login"
                  >
                    Cerrar sesión
                  </NavLink>
                </li>
              )}

              {localStorage.getItem("isLogin") && (
                <li>
                  <NavLink
                    className="icono-1 select-item"
                    onClick={() => closeModal(false)}
                    to="carrito"
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </NavLink>
                </li>
              )}
            </ul>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}

function muestraBarraUsuario() {}

function muestraBarraAdmin() {}
