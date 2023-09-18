import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Homepage from './pages/pagina-inicio/';
import Pagamento from './pages/pagamento/';
import Cadastrocliente from './pages/cadastrocliente';
import LoginCliente from './pages/logincliente';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastroproduto from './pages/cadastroproduto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 

      <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/pagamento' element={<Pagamento/>}/>
        <Route path='/cadastro/cliente' element={<Cadastrocliente/>}/>
        <Route path='/login' element={<LoginCliente/>}/>
        <Route path='/cadastro/produto' element={<Cadastroproduto/>}/>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

