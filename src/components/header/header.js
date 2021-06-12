import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faStar,faCalendar } from '@fortawesome/free-regular-svg-icons'


export default function Header () {
    return (
        <div className="mainHeader">
            <div className="content">
                <div className="logo">
                    <div className="inga">Ingá</div>
                    <div className="maps">Maps</div>
                </div>
                <form className="search" style={{"whiteSpace": "nowrap"}}> 
                    <input type="text" placeholder="Pesquisar restaurantes"></input>
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                <div className="icons">
                    <div style={{"marginLeft":"0"}}>
                        <FontAwesomeIcon icon={faStar} className="fa-2x" />
                        <div className="notify">99</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} className="fa-2x" />
                        <div className="notify">10</div>
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png" width="40" height="40" alt="User Name"></img>
                    </div>
                    <div className="user-profile dropdown">   
                        <button className="dropbtn">
                            <p>Pedro Pereira</p>
                            <div className="fa-2x"><FontAwesomeIcon icon={faAngleDown} /></div>
                        </button>
                        <div className="dropdown-content" style={{"margin":"0"}}>
                            <a href="">lorem ipsum</a>
                            <a href="">lorem ipsum</a>
                            <a href="">lorem ipsum</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}