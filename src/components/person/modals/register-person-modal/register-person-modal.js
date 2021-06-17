import React, { useState } from 'react'
import "./register-person-modal.css"
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { UploadImageFirabase } from '../../../helpers/upload-image-firebase'
import { storage } from '../../../../firebase'

const RegisterPersonModal = (props) => {
  const { showRegisterPersonModal, setShowRegisterPersonModal } = props
  const [person, setPerson] = useState({
    name: "",
    personAddress: { city: "", country: "", id: null, state: "" },
    personType: "TOURIST",
    userLogin: { name: "", password: "", role: "TOURIST", username: "", passwordRepeat: "" }
  })
  const [passwordShown, setPasswordShown] = useState(false)
  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false)
  const eye = <FontAwesomeIcon icon={faEye} />

  const [isLoading, setIsLoading] = useState(false)
  const [searchedAddress, setSearchedAddress] = useState([])
  const [address, setAddress] = useState([])

  const imageNotFound = `https://firebasestorage.googleapis.com/v0/b/inga-maps-e1346.appspot.com/o/local%2Fimagenotfound.jpg?alt=media&token=b443de56-df79-4f8c-ab27-d3247a3bd0c2`

  const hideModal = () => {
    setShowRegisterPersonModal(false)
  }

  const handleChangePerson = (event) => {
    switch (event.target.name) {
      case 'name': {
        setPerson({ ...person, name: event.target.value, userLogin: { ...person.userLogin, name: event.target.value } })
        break
      }
      case 'username': {
        setPerson({ ...person, userLogin: { ...person.userLogin, username: event.target.value } })
        break
      }
      case 'password': {
        setPerson({ ...person, userLogin: { ...person.userLogin, password: event.target.value } })
        break
      }
      case 'passwordRepeat': {
        setPerson({ ...person, userLogin: { ...person.userLogin, passwordRepeat: event.target.value } })
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
      const personAddress = await axios.get(`/api/person-address/find-by/country-state-city`, {
        params: {
          country: address[0].country,
          state: address[0].region,
          city: address[0].city
        }
      })
      if (personAddress.data) {
        setPerson({ ...person, personAddress: personAddress.data })
      } else {
        setPerson({
          ...person, personAddress: {
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
      params: {
        "namePrefix": city
      },
      headers: {
        "x-rapidapi-key": 'c497ebc13bmsh9d13b8ae729cc63p1993f0jsn5c0472a6f4be'
      }
    })).data
    setSearchedAddress(response.data)
    setIsLoading(false)
  }

  const handleChange = async (event) => {
    const image = event.target.files[0]
    if (image) {
      uploadImageFirabase('perfil', image)
    }
  }

  const uploadImageFirabase = (type, image) => {
    const hashCode = UploadImageFirabase.generateHash()
    const uploadTask = storage.ref(`images/${type}/${person.userLogin.username}-${hashCode}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref(`images/${type}/`)
          .child(`${person.userLogin.username}-${hashCode}`)
          .getDownloadURL()
          .then(url => {
            setPerson({ ...person, photo: { base64: url } })
            console.log(url)
          })
      }
    )
  }

  const modal = () => {
    return (
      <Modal show={showRegisterPersonModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Nome
            <input className="form-control" type="text" name="name" onChange={handleChangePerson} value={person.name}></input>
          </div>
          <div>Nome de Usuário
            <input className="form-control" type="text" name="username" onChange={handleChangePerson} value={person.userLogin.username}></input>
          </div>
          <div>Senha
            <input className="form-control" type={passwordShown ? "text" : "password"} name="password" onChange={handleChangePerson} value={person.userLogin.password}></input>
            <i id={person.userLogin.username ? "passwordRegister" : "passwordRegisterAux"} onClick={togglePasswordVisiblity}>{eye}</i>
          </div>
          <div>Repetir Senha
            <input className="form-control" type={passwordRepeatShown ? "text" : "password"} name="passwordRepeat" onChange={handleChangePerson} value={person.userLogin.passwordRepeat}></input>
            <i id={person.userLogin.username ? "passwordRepeatRegister" : "passwordRepeatRegisterAux"} onClick={togglePasswordRepeatVisiblity}>{eye}</i>
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
          {!!person.userLogin.username && <div>Foto de Perfil
            <div className="photo">
              <img className="image" src={(person.photo && person.photo.base64 ? person.photo.base64 : imageNotFound)} alt="firebase-image" />
              <label className="btn btn-primary">
                <i className="fa fa-image"></i> Escolher foto <input className="input-file" type="file" onChange={handleChange} accept="image/png, image/jpeg" />
              </label>
            </div>
          </div>}
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