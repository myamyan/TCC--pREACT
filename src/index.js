import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Homepage from './pages/pagina-inicio/';
import Rodape from './components/rodape';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 

      <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/rodape' element={<Rodape/>}/>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

