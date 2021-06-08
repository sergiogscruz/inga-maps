import React from 'react';
import { Link } from "react-router-dom";

export default function NavMenu() {
    return (
        <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hotels">Hoteis</Link>
              </li>
              <li>
                <Link to="/touristspots">Pontos Turísticos</Link>
              </li>
              <li>
                <Link to="/restaurants">Restaurantes</Link>
              </li>
              <li>
                <Link to="/shoppings">Shoppings</Link>
              </li>
              <li>
                <Link to="/nextevent">Próximos Eventos</Link>
              </li>
              <li>
                <Link to="/contacts">Contatos</Link>
              </li>
            </ul>
        </div>
    )
}