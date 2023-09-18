import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho1 from '../../components/cabecalho1/index';

import Rodape from '../../components/rodape';


export default function Homepage() {


  return (

    <div className="home">

      <div className='div-home'>

        <div className="container-home">

          <header className="App-header">

            <Cabecalho1 />


            <div className='container1-header'>


              <div>

                <img src="/assets/images/logo.png" alt="" />

                <p>O NOVO ESTILO DE SE <br /> VESTIR</p>

              </div>

            </div>


          </header>


          <div className="container2-header">


            <div className="container2-txt-header">

              <h1> A EMPRESA </h1>

              <p className="p-roblema">   Trabalhamos com tecidos orgânicos e retalhos, que ao invés de serem descartados transformam em novas fibras e peças únicas. </p>

            </div>

            <div className="imagens-container2-header">

              <img src="/assets/images/mao.png" alt="" className="img1-header" />

              <img src="/assets/images/logo-mao.png" alt="" className="img2-header" />

            </div>

          </div>


          <div className='container3-header'>





            <div className='container3-txt-header'>
              <h1> NOSSO MATERIAIS </h1>

              <p className="p-roblema">  O Ateliê Régia é uma empresa desenvolvida e liderada por mulheres com objetivo de criar peças bonitas, confortáveis e ecológicas. </p>




            </div>


            <div className='imagens-container3-header'>


              <img src="/assets/images/maquina.png" alt="" className="img3-header" />

              <img src="/assets/images/linha.png" alt="" className="img4-header" />



            </div>

          </div>






          <div className='container4video-header'>




          </div>


          <div className='container5-header'>


            <h1> CATÁLOGO DE TECIDOS </h1>

            <div className="cartas-header">


              <div className="colunas">
                <div className="carta-tecido">

                  <img src="/assets/images/rosa.png" alt="" />

                  <p> LINHO </p>


                  <a href=""> VER PRODUTOS </a>

                </div>

                <div className="carta-tecido">

                  <img src="/assets/images/verde.png" alt="" />

                  <p> LIOCEL </p>


                  <a href=""> VER PRODUTOS </a>

                </div>

              </div>







              <div className='colunas'>

                <div className="carta-tecido">

                  <img src="/assets/images/roxo.png" alt="" className='ocima1' />

                  <p> ALGODÃO ORGÂNICO </p>


                  <a href="" className=" putz1"> VER PRODUTOS </a>

                </div>



                <div className="carta-tecido">

                  <img src="/assets/images/amarelo.png" alt="" className='ocima2' />

                  <p> FIBRA DE SOJA </p>


                  <a href="" className=" putz2"> VER PRODUTOS </a>

                </div>




              </div>




              <div className="colunas">



                <div className="carta-tecido">

                  <img src="/assets/images/branco.png" alt="" />

                  <p> SEDA </p>


                  <a href=""> VER PRODUTOS </a>

                </div>





                <div className="carta-tecido">

                  <img src="/assets/images/modal.png" alt="" />

                  <p> MODAL </p>


                  <a href=""> VER PRODUTOS </a>

                </div>

              </div>
            </div>



          </div>



          <Rodape />


        </div>

      </div>


    </div>
  );

}
