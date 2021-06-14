import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'
import Login from '../login/login'
import ChangePassword from '../change-password/change-password'


export default function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

    const userIsConnected = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return user.token !== 'Basic YW5vbmltbzppbmdhbWFwcw=='
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

    const useLogin = () => {
        setShowLoginModal(true)
    }

    const useChangePassword = () => {
        setShowChangePasswordModal(true)
    }

    const doLogout = () => {
        localStorage.setItem('user', JSON.stringify({
            name: "Anônimo",
            personType: "TOURIST_ANONYMOUS",
            photo: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
            token: "Basic YW5vbmltbzppbmdhbWFwcw=="
        }))
        window.location.reload();
    }

    return (
        <div className="mainHeader">
            <Login showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}></Login>
            <ChangePassword showChangePasswordModal={showChangePasswordModal} setShowChangePasswordModal={setShowChangePasswordModal}></ChangePassword>
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
                            <a onClick={useChangePassword}>Alterar Senha</a>
                            <a onClick={doLogout}>Sair</a>
                        </div>}
                        {!userIsConnected() && <div className="dropdown-content">
                            <a onClick={useLogin}>Entrar</a>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}