import React from 'react'
import logo from '../assets/logo.jpeg'
import style from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <header>
        <img src={logo} alt="logo" />
        <div>
          <h1 className={style.nome}>Centro Paraibano de Autismo</h1>
          <h4>Associação</h4>
        </div>
      </header>
    </Link>
  )
}

export default Logo