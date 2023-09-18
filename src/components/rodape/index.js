
import './index.scss';

export default function Rodape() {
  return (





    <div className="rodape">
      <div className="cima-rodape">

          <div className='esquerdarod-cima'>

            <div className="detalhe-rod">
              <img className="logo" src="/assets/images/logo-mao.png" alt="" />

              <div className="rod-txt">
                <p className='rod-nome'>ATELIÊ RÉGIA</p>
                <p className='rod-ini'>O Ateliê Régia é uma empresa <div> desenvolvida e liderada por mulheres com objetivo de peças bonitas, confortáveis e ecológicas.</div>

                </p>
              </div>
            </div>
            <div className="segura">
              <img className="eurece" src="/assets/images/receiclo.png" alt="" />

              <img className="seguro" src="/assets/images/sitesegurologo.png" alt="" />
            </div>
          </div>


          <div className="linha-rodape"></div>


          <div className='redes-sociais'>

            <p>REDES SOCIAIS</p>


            <div className="icon-redes">
              <img className="insta" src="/assets/images/instagram.png" alt="" />
              <img className="twitter" src="/assets/images/tt.png" alt="" />
              <img className="facebok" src="/assets/images/facebook.png" alt="" />
            </div>
            <div className="redes">

              <a href="/login">LOGIN</a>

              <a href="/cadastro/cliente">CADASTRO</a>

              <div className="instrucoes-rodape">
                <a href="">INSTRUÇÕES:</a>
                <p>Cuidados com as roupas</p>
              </div>
              <div className="contato-rodape"> 
              <a href="">CONTATO:</a>
                <p>Fale conosco</p>  </div>

            </div>


          </div>

          <div className="linha-rodape"></div>

          <div className='suporte'>
            <p>SUPORTE</p>
            <div className="politicas">
              <a href=''>Termos de uso</a>
              <a href=''>Troca e devolução</a>
              <a href=''>Política de devolução</a>
              <a href=''>Politica de privacidade</a>
              <div className="formas">
                <p>FORMAS DE PAGAMENTO</p>
                <img className="pagamentos" src="/assets/images/image 288.png" alt="" />
              </div>

            </div>

          </div>

        
      </div>

      <div className="baixo-rodape">


        <div className='linha-baixo'></div>

        <p>©2023 ATELIÊ RÉGIA - CNPJ <div> 14341564000100 </div> </p>
      </div>


    </div>



  );
} 