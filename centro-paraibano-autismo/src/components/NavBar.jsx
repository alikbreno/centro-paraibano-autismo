import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/sobre">
        Sobre
      </Link>
      <Link to="/serviços">
        Serviçoes
      </Link>
      <Link to="/localização">
        Localização
      </Link>
      <Link to="/contato">
        Contato
      </Link>
      <Link to="/contato">
        Momentos<br />Especiais
      </Link>
    </nav>
  )
}

export default NavBar