import React from "react";
import { Link } from "react-router-dom";
import logoContigoUrl from "../../img/Logo_Contigo_Home.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/">
            <span className="navbar logo">
              <img src={logoContigoUrl} />
            </span>
          </Link>
        </div>
        <div className="col">
          <ul className="nav home">
          <li className="nav-item ">
              <Link to="/listaRecursos">Recurso</Link>
            </li>
            <li className="nav-item">
              <Link to="/donar">Donaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/informacion">Sobre Nosotros</Link>
            </li>
            <li className="nav-item ">
              <Link to="/enviar_peticion">Contactanos</Link>
            </li>

            <li>
              <Link to="/login">
                <button className="btn login" href="#">
                  <i className="fa-solid fa-user"></i>
                </button>
              </Link>
            </li>

            <li>
              <Link to="/">
                <button className="btn lenguaje">
                  <i className="fa-solid fa-earth-europe"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

