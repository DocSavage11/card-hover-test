import React, {useState, useEffect} from 'react'
import './Nav.css'

const NavBar = () => {
  const [hideNav, setHideNav] = useState(false);
  const [showNav, setShowNav] = useState(false);


  const NavBarHide = () => {
    if (window.scrollY >= 80) {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
  }

  window.addEventListener("scroll", NavBarHide)
  

  return (
    <div className={hideNav ? "Nav-Bar hide" : "Nav-Bar" }>
        <img src={require('../../Assest/Logo/Logo.jpg')} alt="" id="Logo" />

        <ul className="Nav-Link-Container">
            <li id="NavLink">Home</li>
            <li id="NavLink">Service</li>
            <li id="NavLink">About</li>
            <li id="NavLink">Contact</li>
        </ul>
    </div>
  )
}

export default NavBar