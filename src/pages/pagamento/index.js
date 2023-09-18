import './index.scss';

import Cabecalho2 from '../../components/cabecalho2/index';

import Rodape from '../../components/rodape';


export default function Pagamento() {


    return (

        <div className='tudo'>
            <Cabecalho2 />
            <div className='cima-pagamento'>

                <h1>PAGAMENTO</h1>

                <div className='pagamento-meio'>

                    <div className='pagamento-meio-cima'>

                        <button>Cartão de credito</button>

                        <div className='linha-pagamneto'></div>

                        <button>Cartão de débito</button>

                        <div className='linha-pagamneto'></div>

                        <button>Pix</button>

                        <div className='linha-pagamneto'></div>

                        <button>Boleto</button>

                        <div className='linha-paagmnto'></div>

                        <button>Vale-Presente</button>

                    </div>


                    <div className='pagamento-meio-centro'>

                        <div className='pagamneto-horizontal'>


                            <div className='nome-cartao'></div>
                            <p>Nome Impresso no Cartão</p>
                            <input type="text" placeholder='' />


                            <div className='numero-cartoa'></div>
                            <p>Número Do Cartão</p>
                            <input type="text" placeholder='' />

                        </div>


                        <div className='pagamento-horizontal2'>

                            <div className='vencimento'>
                                <p>Vencimento</p>
                                <input type="date" placeholder='vencimento do cartão' />
                            </div>

                            <div className='codigo-ceguranca'>
                                <p>Código de cegurança</p>
                                <input type="text" placeholder='' />
                            </div>

                            <div className='parcelas'>
                                <p>parcelas</p>
                                    <select name="cars" id="cars" >
                                    <option disabled selected>Selecione a bandeira</option>
                                        <option value="volvo">Visa</option>
                                        <option value="saab">MasterCard</option>
                                        <option value="opel">American Express</option>
                                        <option value="audi">Diners Club</option>
                                        <option value="audi">Hipercard</option>
                                        <option value="audi">Elo</option>
                                    </select>
                            </div>

                        </div>


                    </div>

                            <div className='total-meio'>

                                <h1>Total: </h1>

                                <button>IR PARA ENREGA</button>

                            </div>

                </div>

            </div>


        </div>


    );

}