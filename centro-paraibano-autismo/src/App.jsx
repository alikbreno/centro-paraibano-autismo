import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio.jsx';
import Servicos from './components/pages/Servicos.jsx';
import Contato from './components/pages/Contato.jsx';
import Sobre from './components/pages/Sobre.jsx';
import Localizacao from './components/pages/Localizacao.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/localização' element={<Localizacao/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/> 
            <Route path='/serviços' element={<Servicos/>}/>        
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App