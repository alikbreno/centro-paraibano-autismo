import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import style from './Header.module.css'

const Header = () => {
  return (
    <header>
      <Logo/>
      <NavBar/>
    </header>
  )
}

export default Header