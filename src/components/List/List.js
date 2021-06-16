import React, {useEffect, useState} from "react";
import './List.css';
import { faCheckCircle }from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

function List () {
    const [locais, setLocais] = useState([]);

    useEffect(() => {
        axios.get('api/local').then((resource) => {
            setLocais(resource.data.content);
            
        })
    },[])

    const HandleList = function (local) {

        const imgNotFound = 'https://firebasestorage.googleapis.com/v0/b/inga-maps-e1346.appspot.com/o/'+
            'local%2Fimagenotfound.jpg?alt=media&token=b443de56-df79-4f8c-ab27-d3247a3bd0c2';

        const imageBackground =  (local.photos && local.photos.length) ? local.photos[0].base64 :  imgNotFound
        const classImgBackground = {
            backgroundImage: 'url(' + imageBackground + ')',
            backgroundSize: 'cover'
        };

        return (
            <div className="card-list">
            <div className="description">
                <div className="desc">
                    <div className="title">{local.name}</div>
                    <button className="visible"> + Visualizar</button>
                </div>
                <div className="list-itens">
                    {local.description}
                </div>
            </div>
            <div id = "teste" className="image">
                <div  className="background" style={classImgBackground}></div>
            </div>
        </div>)
    }

    return (
        <>
            <div className="containerList">
                <div className="column">
                    {locais.map((local)=> HandleList(local))}
                </div>
            </div>
        </>
    )
}


export default List;