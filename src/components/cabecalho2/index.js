
import './index.scss';

export default function Cabecalho2() {
  return (


    <div className="cabecalho2">

      <div className='cab2-esquerda'>


        <div>
          <img src="/assets/images/zabugaaa.png" alt="" className="menu"/>

        </div>

        <h2>ATELIÊ RÉGIA</h2>

        <div>
          <img src="/assets/images/logo.png" alt="" className="logo" />

        </div>

      </div>


      <div className='cab2-direita'>


        <img className="img1-cab2" src="/assets/images/lupis.png" alt="" />

        <h3>LOGIN</h3>

        <img className="img2-cab2" src="/assets/images/redfivediamonds.png" alt="" />

      </div>


      <div className='barra-de-pesquisa'>

        <input type="text" placeholder='pesquisar' />
        <img src="/assets/images/lupis.png" alt="" />


      </div>

    </div>
  );
}
