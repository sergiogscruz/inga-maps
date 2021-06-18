import react from 'react'
import FooterInscreavaSe from './footer-inscreva-se/footerInscrevaSe'
import FooterContatos from './footer-contatos/footerContatos'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <FooterInscreavaSe />
            <FooterContatos />
        </div>
    )
}