import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'
import LoginModal from '../person/modals/login-modal/login-modal'
import ChangePasswordModal from '../person/modals/change-password-modal/change-password-modal'
import RegisterPersonModal from '../person/modals/register-person-modal/register-person-modal'
import { UserAnonymousHelper } from '../helpers/user-anonymous-helper'


export default function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
    const [showRegisterPersonModal, setShowRegisterPersonModal] = useState(false)

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

    const useRegisterPerson = () => {
        setShowRegisterPersonModal(true)
    }

    const doLogout = () => {
        UserAnonymousHelper.logout()
    }

    return (
        <div className="mainHeader">
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}></LoginModal>
            <ChangePasswordModal showChangePasswordModal={showChangePasswordModal} setShowChangePasswordModal={setShowChangePasswordModal}></ChangePasswordModal>
            <RegisterPersonModal showRegisterPersonModal={showRegisterPersonModal} setShowRegisterPersonModal={setShowRegisterPersonModal}></RegisterPersonModal>
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
                            <p onClick={useChangePassword}>Alterar Senha</p>
                            <p onClick={doLogout}>Sair</p>
                        </div>}
                        {!userIsConnected() && <div className="dropdown-content">
                            <p onClick={useLogin}>Entrar</p>
                            <p onClick={useRegisterPerson}>Registrar-se</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}