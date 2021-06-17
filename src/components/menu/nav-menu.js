import React from 'react';
import { Link } from "react-router-dom";
import './nav-menu.css'

export default function NavMenu() {

    return (
        <div className="container-nav">
            <ul>
              <li>      
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/hotel">HOTEIS</Link>
              </li>

              <li>
                <Link to="/attractions">PONTOS TURÍSTICOS</Link>
              </li>

              <li>
                <Link to="/restaurant">RESTAURANTE</Link>
              </li>

              <li>
                <Link to="/shopping">SHOPPINGS</Link>
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