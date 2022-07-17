import React, {useState} from 'react'
import './Nav.css'
import SideBar from '../SideBar';

const NavBar = () => {
  const [hideNav, setHideNav] = useState(false);
  const [reveal, setReveal] = useState(false);


  const NavBarHide = () => {
    if (window.scrollY >= 80) {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
  }

  window.addEventListener("scroll", NavBarHide)



  const revealOnClick = () => {
      setReveal((prevState) => !prevState)
  }
  

  return (
    <>
        <div className={hideNav ? "Nav-Bar hide" : "Nav-Bar" }>
        <img src={require('../../Assest/Logo/Logo.jpg')} alt="" id="Logo" />

        <ul className="Nav-Link-Container">
            <li id="NavLink">Home</li>
            <li id="NavLink">Service</li>
            <li id="NavLink">About</li>
            <li id="NavLink" onClick={revealOnClick}>Contact</li>
        </ul>
    </div>

    <div className={reveal ? "Side-Bar Side-Hide" : "Side-Bar"}>
        <h1 onClick={revealOnClick} >Side Bar</h1>
    </div>

    </>
  )
}

export default NavBar