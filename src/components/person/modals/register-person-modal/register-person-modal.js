import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./register-person-modal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'

const RegisterPersonModal = (props) => {
  const {showRegisterPersonModal, setShowRegisterPersonModal} = props
  const [person, setPerson] = useState({
    name: "",
    personAddress: { city: "", country: "", id: null, state: "" },
    personType: "TOURIST",
    userLogin: { name: "", password: "", role: "TOURIST", username: "", passwordRepeat: "" }
  })
  const [passwordShown, setPasswordShown] = useState(false)
  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false)
  const eye = <FontAwesomeIcon icon={faEye}/>

  const [isLoading, setIsLoading] = useState(false)
  const [searchedAddress, setSearchedAddress] = useState([])
  const [address, setAddress] = useState([])

  const hideModal = () => {
    setShowRegisterPersonModal(false)
  }

  const handleChangePerson = (event) => {
    switch (event.target.name) {
      case 'name': {
        setPerson({...person, name: event.target.value, userLogin: {...person.userLogin, name: event.target.value}})
        break
      }
      case 'username': {
        setPerson({...person, userLogin: {...person.userLogin, username: event.target.value}})
        break
      }
      case 'password': {
        setPerson({...person, userLogin: {...person.userLogin, password: event.target.value}})
        break
      }
      case 'passwordRepeat': {
        setPerson({...person, userLogin: {...person.userLogin, passwordRepeat: event.target.value}})
        break
      }
    }
  }

  const registerPerson = async () => {
    if (person.userLogin.password !== person.userLogin.passwordRepeat) {
      return alert('As senhas não conferem.')
    }
    try {
      await axios.post(`/api/tourist`, person)
      hideModal()
    } catch (error) {
      console.log(error)
    }
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  const togglePasswordRepeatVisiblity = () => {
    setPasswordRepeatShown(!passwordRepeatShown)
  }

  const setPersonAddressSelected = async (address) => {
    setAddress(address)
    if (address.length > 0) {
      const personAddress = await axios.get(`/api/person-address/find-by/country-state-city`,{
        params : {
          country: address[0].country,
          state: address[0].region,
          city: address[0].city
        }
      })
      if (personAddress.data) {
        setPerson({...person, personAddress: personAddress.data})
      } else {
        setPerson({...person, personAddress: {
            country: address[0].country,
            state: address[0].region,
            city: address[0].city
          }
        })
      }
    }
  }

  const getAddressSuggestions = async (city) => {
    setIsLoading(true)
    const response = (await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities`, {
      params : {
        "namePrefix": city
      },
      headers : {
        "x-rapidapi-key": 'c497ebc13bmsh9d13b8ae729cc63p1993f0jsn5c0472a6f4be'
      }
    })).data
    setSearchedAddress(response.data)
    setIsLoading(false)
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
            <input className="form-control" type="text" name="name" onChange={handleChangePerson} value={person.name}></input>
          </div>
          <div>Nome de Usuário
            <input className="form-control" type="text" name="username" onChange={handleChangePerson} value={person.userLogin.username}></input>
          </div>
          <div>Senha
            <input className="form-control" type={passwordShown ? "text" : "password"} name="password" onChange={handleChangePerson} value={person.userLogin.password}></input>
            <i id="passwordRegister" onClick={togglePasswordVisiblity}>{eye}</i>
          </div>
          <div>Repetir Senha
            <input className="form-control" type={passwordRepeatShown ? "text" : "password"} name="passwordRepeat" onChange={handleChangePerson} value={person.userLogin.passwordRepeat}></input>
            <i id="passwordRepeatRegister" onClick={togglePasswordRepeatVisiblity}>{eye}</i>
          </div>
          <div>Buscar por Cidade
            <AsyncTypeahead
              id="id"
              filterBy={() => true}
              isLoading={isLoading}
              labelKey={(address) => `${address.city}, ${address.region} - ${address.country}`}
              onSearch={getAddressSuggestions}
              options={searchedAddress}
              onChange={setPersonAddressSelected}
              positionFixed={false}
              selected={address}
              minLength={1}
            />
          </div>
          <div>País
            <input className="form-control" type="text" name="country" value={person.personAddress.country} disabled={true}></input>
          </div>
          <div>Estado
            <input className="form-control" type="text" name="state" value={person.personAddress.state} disabled={true}></input>
          </div>
          <div>Cidade
            <input className="form-control" type="text" name="city" value={person.personAddress.city} disabled={true}></input>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={registerPerson}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
      <div>{modal()}</div>
  )
}

export default RegisterPersonModal