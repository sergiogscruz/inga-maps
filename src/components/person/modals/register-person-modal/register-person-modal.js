import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./register-person-modal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'

const RegisterPersonModal = (props) => {
  const {showRegisterPersonModal, setShowRegisterPersonModal} = props
  // const [personAddress, setPersonAddress] = useState({city:"", country:"", id:null, state:""})
  // const [photo, setPhoto] = useState({base64:"", id:null})
  // const [userLogin, setUserLogin] = useState({id:null, name:"", password:"", role:"TOURIST", username:"", passwordRepeat:""})
  // const [person, setPerson] = useState({name:"", personAddress:personAddress, personType:userLogin.role, photo:photo, userLogin:userLogin})
  let personAddress = {}
  let photo = {}
  let userLogin
  let person = {name:"", 
  personAddress:{city:"", country:"", id:null, state:""}, 
      personType:"TOURIST", 
      photo:{base64:"", id:null}, 
      userLogin:{id:null, name:"", password:"", role:"TOURIST", username:"", passwordRepeat:""}}
  const [passwordShown, setPasswordShown] = useState(false)
  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false)

  const eye = <FontAwesomeIcon icon={faEye}/>

  const hideModal = () => {
    setShowRegisterPersonModal(false)
  }

  const handleChangePersonAddress = (event) => {
    // setChangePasswordDto({...changePasswordDto, [event.target.name]: event.target.value})
  }

  const handleChangePhoto = (event) => {
    // setChangePasswordDto({...changePasswordDto, [event.target.name]: event.target.value})
  }

  const handleChangeUserLogin = (event) => {
    // setChangePasswordDto({...changePasswordDto, [event.target.name]: event.target.value})
  }

  const handleChangePerson = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    switch (event.target.name) {
      case 'name': {
        person.name = event.target.value
        person.userLogin.name = event.target.value
        break
      }
      case 'username': {
        person.userLogin.username = event.target.value
        break
      }
      case 'password': {
        person.userLogin.password = event.target.value
        break
      }
      case 'passwordRepeat': {
        person.userLogin.passwordRepeat = event.target.value
        break
      }
    }
    // setPerson({...person, [event.target.name]: event.target.value})
    // if (event.target.name === 'name') {
    //   console.log('é name')
    //   setUserLogin({...userLogin, [event.target.name]: event.target.value})
    //   console.log(person)
    //   console.log(userLogin)
    // setPerson({...person, userLogin: userLogin})
    // }
  }

  const registerPerson = async () => {
    if (userLogin.password !== userLogin.passwordRepeat) {
      return alert('As senhas não conferem.')
    }
    // try {
    //   const response = (await axios.post(`/api/public/auth/change-password`, changePasswordDto)).data
    //   localStorage.setItem('user', JSON.stringify({...JSON.parse(localStorage.getItem('user')),
    //     token: response.token
    //   }))
    //   hideModal()
    // } catch (error) {
    //   alert('Usuário ou senha incorreta.')
    // }
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  const togglePasswordRepeatVisiblity = () => {
    setPasswordRepeatShown(!passwordRepeatShown)
  }

  const consoleTeste = () => {
    console.log('personAddress')
    console.log(personAddress)
    console.log('photo')
    console.log(photo)
    console.log('userLogin')
    console.log(userLogin)
    console.log('person')    
    console.log(person)    
  }

  const modal = () => {
    return (
      <Modal show={showRegisterPersonModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={registerPerson} id="form-product">
          <div>Nome
            <input className="form-control" type="text" name="name" onChange={handleChangePerson}></input>
          </div>
          <div>Nome de Usuário
            <input className="form-control" type="text" name="username" onChange={handleChangePerson}></input>
          </div>
          <div>Senha
            <input className="form-control" type={passwordShown ? "text" : "password"} name="password" onChange={handleChangePerson}></input>
            <i id="password" onClick={togglePasswordVisiblity}>{eye}</i>
          </div>
          <div>Repetir Senha
            <input className="form-control" type={passwordRepeatShown ? "text" : "password"} name="passwordRepeat" onChange={handleChangePerson}></input>
            <i id="passwordRepeat" onClick={togglePasswordRepeatVisiblity}>{eye}</i>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={registerPerson}>Confirmar</Button>
          <Button variant="primary" onClick={consoleTeste}>Console</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
      <div>{modal()}</div>
  )
}

export default RegisterPersonModal