import './index.scss';
import Cabecalhoadm from '../../components/cabecalhoadm/index';

export default function Cadastroproduto() {


    return (

        <div className='tudo-cadastroproduto'>
        <Cabecalhoadm />

            <div className='escrever'>

            <a> VOLTAR PARA PAINEL</a>
            <h1> CADASTRO DE PRODUTOS</h1>
            </div>
 
            <div className='direita-cadastroproduto-quadrado'>
                
                <div className='escrita-qudrado'>
                <h1> ADICIONAR imagem +</h1>
                <input type="file" />
                </div>

                <div className='codigo-cadastroproduto'>
                    <div className='quadradopreto'>
                        <h1>código</h1>
                        <input type="text" placeholder='' />
                    </div>
                </div>


            </div>

        

        </div>
        

    );

}