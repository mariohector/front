import React from "react";
import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (props) =>{
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link> </li>
                    <li><Link to="/Nosotros">Nosotros</Link> </li>
                    <li><Link to="/Novedades">Novedades</Link> </li>
                    <li><Link to="/Contacto">Contacto</Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;