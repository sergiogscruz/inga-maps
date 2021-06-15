import React from "react";
import './List.css';
import { faCheckCircle }from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function List () {
    return (
        <>
            <div className="containerList">
                <div className="column">
                    <div className="card">
                        <div className="description">
                            <div className="desc">
                                <div className="title">Bangkok Garden</div>
                                <button className="visible"> + Visualizar</button>
                            </div>
                            <div className="list-itens">
                                <div className="item">
                                    <FontAwesomeIcon icon={faCheckCircle} className="fa-lg" id="check"/>
                                    <span>Comercial de bisteca bovina</span>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon icon={faCheckCircle} className="fa-lg" id="check"/>
                                    <span>Picaminha Comercial</span>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon icon={faCheckCircle} className="fa-lg" id="check"/>
                                    <span>Feijoada</span>
                                </div>
                            </div>
                        </div>
                        <div className="image">
                            <div className="background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default List;