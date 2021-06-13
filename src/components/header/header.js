import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'


export default function Header() {

    const userIsConnected = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return user.token != 'Basic YW5vbmltbzppbmdhbWFwcw=='
    }

    const getNumberNotifications = () => {
        return 0
    }

    const getPhotoUser = () => {
        return JSON.parse(localStorage.getItem('user')).photo
    }

    const getNameUser = () => {
        return JSON.parse(localStorage.getItem('user')).name
    }

    return (
        <div className="mainHeader">
            <div className="content">
                <div className="logo">
                    <div className="inga">Ingá</div>
                    <div className="maps">Maps</div>
                </div>
                <form className="search" style={{ "whiteSpace": "nowrap" }}>
                    <input type="text" placeholder="Pesquisar restaurantes"></input>
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                <div className="icons">
                    <div style={{ "marginLeft": "0" }}>
                        <FontAwesomeIcon icon={faStar} className="fa-2x" />
                        {getNumberNotifications() > 0 && <div className="notify"></div>}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} className="fa-2x" />
                        {getNumberNotifications() > 0 && <div className="notify"></div>}
                    </div>
                    <div>
                        <img src={getPhotoUser()} width="40" height="40" alt="User Name"></img>
                    </div>
                    <div className="user-profile dropdown">
                        <button className="dropbtn">
                            <p>{getNameUser()}</p>
                            <div className="fa-2x"><FontAwesomeIcon icon={faAngleDown} /></div>
                        </button>
                        {userIsConnected() && <div className="dropdown-content">
                            <a href="">Alterar Senha</a>
                            <a href="">Sair</a>
                        </div>}
                        {!userIsConnected() && <div className="dropdown-content">
                            <a href="">Realizar Login</a>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}