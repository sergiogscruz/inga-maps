import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./change-password-modal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'

const ChangePasswordModal = (props) => {
    const {showChangePasswordModal, setShowChangePasswordModal} = props
    const [changePasswordDto, setChangePasswordDto] = useState({username:"", password:"", newPassword:"", newPasswordRepeat:""})
    const [passwordShown, setPasswordShown] = useState(false)
    const [newPasswordShown, setNewPasswordShown] = useState(false)
    const [newPasswordRepeatShown, setNewPasswordRepeatShown] = useState(false)

    const eye = <FontAwesomeIcon icon={faEye}/>

    const hideModal = () => {
        setShowChangePasswordModal(false)
    }

    const handleChange = (event) => {
        setChangePasswordDto({...changePasswordDto, [event.target.name]: event.target.value})
    }

    const doChangePassword = async () => {
        if (changePasswordDto.newPassword !== changePasswordDto.newPasswordRepeat) {
            return alert('As senhas não conferem.')
        }
        try {
            const response = (await axios.post(`/api/public/auth/change-password`, changePasswordDto)).data
            localStorage.setItem('user', JSON.stringify({...JSON.parse(localStorage.getItem('user')),
                token: response.token
            }))
            hideModal()
        } catch (error) {
            alert('Usuário ou senha incorreta.')
        }
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown)
    }

    const toggleNewPasswordVisiblity = () => {
        setNewPasswordShown(!newPasswordShown)
    }

    const toggleNewPasswordRepeatVisiblity = () => {
        setNewPasswordRepeatShown(!newPasswordRepeatShown)
    }

    const modal = () => {
        return (
            <Modal show={showChangePasswordModal} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={doChangePassword} id="form-product">
                <div>Usuário
                    <input className="form-control" type="text" name="username" onChange={handleChange} value={changePasswordDto.username}></input>
                </div>
                <div>Senha Antiga
                    <input className="form-control" type={passwordShown ? "text" : "password"} name="password" onChange={handleChange} value={changePasswordDto.password}></input>
                    <i id="oldPassword" onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                <div>Senha Nova
                    <input className="form-control" type={newPasswordShown ? "text" : "password"} name="newPassword" onChange={handleChange} value={changePasswordDto.newPassword}></input>
                    <i id="newPassword" onClick={toggleNewPasswordVisiblity}>{eye}</i>
                </div>
                <div>Repetir Senha Nova
                    <input className="form-control" type={newPasswordRepeatShown ? "text" : "password"} name="newPasswordRepeat" onChange={handleChange} value={changePasswordDto.newPasswordRepeat}></input>
                    <i id="newPasswordRepeat" onClick={toggleNewPasswordRepeatVisiblity}>{eye}</i>
                </div>
            </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={doChangePassword} disabled={
                        !changePasswordDto.username 
                        || !changePasswordDto.password
                        || !changePasswordDto.newPassword
                        || !changePasswordDto.newPasswordRepeat 
                    }>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <div>{modal()}</div>
    )
}

export default ChangePasswordModal