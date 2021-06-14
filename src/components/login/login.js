import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import { Alert } from 'bootstrap'

const Login = (props) => {
    const {showLoginModal, setShowLoginModal} = props
    const [loginDto, setLoginDto] = useState({username:"", password:"", passwordRepeat:""})
    const [passwordShown, setPasswordShown] = useState(false)
    const [passwordRepeatShown, setPasswordRepeatShown] = useState(false)
    const eye = <FontAwesomeIcon icon={faEye}/>

    const hideModal = () => {
        setShowLoginModal(false)
    }

    const handleChange = (event) => {
        setLoginDto({...loginDto, [event.target.name]: event.target.value})
    }

    const doLogin = async () => {
        if (loginDto.password !== loginDto.passwordRepeat) {
            return alert('As senhas não conferem.')
        }
        try {
            const response = (await axios.post(`/api/public/auth`, loginDto)).data
            localStorage.setItem('user', JSON.stringify({...response,
                photo: response.photo ? response.photo : 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
            }))
            hideModal()
        } catch (error) {
            alert('Usuário ou senha incorreta.')
        }
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown)
    }

    const togglePasswordRepeatVisiblity = () => {
        setPasswordRepeatShown(!passwordRepeatShown)
    }

    const modal = () => {
        return (
            <Modal show={showLoginModal} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Entrar no IngáMaps</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={doLogin} id="form-product">
                <div>Usuário
                    <input className="form-control" type="text" name="username" onChange={handleChange} value={loginDto.username}></input>
                </div>
                <div>Senha
                    <input className="form-control" type={passwordShown ? "text" : "password"} name="password" onChange={handleChange} value={loginDto.password}></input>
                    <i id="password" onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                <div>Repitir Senha
                    <input className="form-control" type={passwordRepeatShown ? "text" : "password"} name="passwordRepeat" onChange={handleChange} value={loginDto.passwordRepeat}></input>
                    <i id="passwordRepeat" onClick={togglePasswordRepeatVisiblity}>{eye}</i>
                </div>
            </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={doLogin} disabled={
                        !loginDto.username
                        || !loginDto.password
                        || !loginDto.passwordRepeat
                    }>Entrar</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <div> {modal()}</div>
    )
}

export default Login