import react from 'react'
import './footer-inscreva-se.css'

export default function FooterInscreavaSe() {
    return (
        <div id="footer-inscreva-se-container" className="input-inscreva-se">
            <div className="container-inscreva-se">
                <p className="p-inscreva-se">Inscreva-se no nosso</p>
                <h4 className="h4-canal-de-noticias">CANAL DE NOTICIAS</h4>
            </div>
            <div className="container-input-canal-de-noticias">
                <input className="input-canal-de-noticias" type="text" placeholder="Seu endereço de e-mail"></input>
                <button className="btn-canal-de-noticias">Enviar</button>
            </div>
        </div>
    )
}