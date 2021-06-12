import React from 'react';
import { Link } from "react-router-dom";
import './nav-menu.css'

export default function NavMenu() {

    return (
        <div className="container">

            <ul>
              <li>      
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/hotels">HOTEIS</Link>
              </li>

              <li>
                <Link to="/touristspots">PONTOS TURÍSTICOS</Link>
              </li>

              <li>
                <Link to="/restaurants">RESTAURANTE</Link>
              </li>

              <li>
                <Link to="/shoppings">SHOPPINGS</Link>
              </li>

              <li>
                <Link to="/nextevent">PRÓXIMOS EVENTOS</Link>
              </li>

              <li>
                <Link to="/contacts">CONTATOS</Link>
              </li>
            </ul>
        </div>
    )
}