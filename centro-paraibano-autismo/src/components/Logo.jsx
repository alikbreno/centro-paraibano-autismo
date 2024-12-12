import React from 'react'
import logo from '../assets/logo.jpeg'
import style from './Logo.module.css'

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1 className={style.nome}>Centro Paraibano de Autismo</h1>
      <h4>Associação</h4>
    </div>
  )
}

export default Logo