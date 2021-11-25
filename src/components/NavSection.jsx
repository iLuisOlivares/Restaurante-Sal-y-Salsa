import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import LogoTipo from "../assets/Img/LogoTipo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../containers/Login/auth/useAuth";
// import "../assets/styles/components/Header.css";

export default function NavSection({
  modalControl,
  isLittle,
  closeModal,
  showControl,
}) {
  const auth = useAuth();
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
              {showControl ? (
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

              <div className="d-flex px-6">
                {!showControl && (
                  <>
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
                  </>
                )}
              </div>

              {showControl && (
                <>
                  <button onClick={auth.logout}>Cerrar Sessión</button>
                </>
              )}
            </ul>
            <ul>
              <li className="nav-item">
                <NavLink className="icono-1 select-item" to="/carrito">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </NavLink>
              </li>
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
              {true ? (
                <Fragment>
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
                </Fragment>
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

              {/* <li>
                <NavLink
                  className="select-items"
                  onClick={() => closeModal(false)}
                  exact
                  to="/updateCarta"
                  activeclass="active"
                >
                  Actualizar Menú
                </NavLink>
              </li> */}

              {/* login and register hide */}

              {showControl && (
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
              )}

              {showControl && (
                <>
                  <button onClick={auth.logout}>Cerrar Sessión</button>
                </>
              )}
              <li>
                <NavLink
                  className="icono-1 select-item"
                  onClick={() => closeModal(false)}
                  to="carrito"
                >
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </NavLink>
              </li>
            </ul>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}
