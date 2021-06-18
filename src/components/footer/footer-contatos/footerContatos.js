import react from 'react'
import './footer-contatos.css'

export default function FooterContatos() {
    return (
        <div className="container-footer-contatos pt-5">
            <div className="d-flex justify-content-between" style={{padding: '0 100px'}}>
                <div>
                    <h3 className="footer-title footer-title-inga">INGÁ</h3>
                    <h4 className="footer-title footer-title-maps">MAPS</h4>
                </div>
                <div>
                    <h6>TODAS AS CATEGORIAS</h6>
                    <ul className="list-unstyled footer-lista-categorias">
                        <li>Todas as ofertas</li>
                        <li>Hotéis</li>
                        <li>Restaurantes</li>
                        <li>Shoppings</li>
                        <li>Passeios</li>
                    </ul>
                </div>
                <div>
                    <h6>INFORMAÇÕES ADICIONAIS</h6>
                    <ul className="list-unstyled footer-lista-categorias">
                        <li>Sobre Nós</li>
                        <li>Entre em Contato Conosco</li>
                        <li>Perguntas Frequentes</li>
                    </ul>
                </div>
                <div>
                    <h6>INFORMAÇÃO LEGAL</h6>
                    <ul className="list-unstyled footer-lista-categorias">
                        <li>Termos e condições</li>
                        <li>Isenção de Responsabilidade</li>
                        <li>Política de parcelamento</li>
                        <li>Privacidade</li>
                    </ul>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-5" style={{padding: '0 100px'}}>
                <div>
                    <h6>DETALHES DO CONTATO</h6>
                    <p className="footer-color-gray" style={{maxWidth: '310px'}}>Sinta-se à vontade para nos contactar por telefone, email ou através do nosso formulário de contato.</p>
                </div>
                <div>
                    <h6>ENVIE-NOS UMA MENSAGEM</h6>
                    <div className="mt-4">
                        <div className="d-flex justify-content-between">
                            <input style={{width: '48%'}} className="p-2" type="text" placeholder="Seu nome completo*"/>
                            <input style={{width: '48%'}} className="p-2" type="text" placeholder="Telefone celular*"/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <textarea className="w-100 p-2" placeholder="mensagem" style={{minHeight: '100px'}}></textarea>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn-enviar">Enviar</button>
                        <span style={{fontSize: '12px', fontWeight: 'bold'}} className="footer-color-gray">* Os campos obrigatórios</span>
                    </div>

                </div>
            </div>
        </div>
    )
}