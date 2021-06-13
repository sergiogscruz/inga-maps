import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const Login = (props) => {
    const {showModal, setShowModal} = props
    const [loginDto, setLoginDto] = useState({username:"", password:""})
    const [passwordShown, setPasswordShown] = useState(false)
    const eye = <FontAwesomeIcon icon={faEye}/>

    const hideModal = () => {
        setShowModal(false)
    }

    const handleChange = (event) => {
        setLoginDto({...loginDto, [event.target.name]: event.target.value})
    }

    const doLogin = () => {
        console.log(loginDto)
        hideModal()
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true)
    }

    const modal = () => {
        return (
            <Modal show={showModal} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={doLogin} id="form-product">
                <div>Usuário
                    <input className="form-control" type="text" name="username" onChange={handleChange} value={loginDto.username}></input>
                </div>
                <div>Senha
                    <input className="form-control" type={passwordShown ? "text" : "password"} name="password" onChange={handleChange} value={loginDto.password}></input>
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
            </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={doLogin}>Excluir</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <div> {modal()}</div>
       
    )
}

export default Login