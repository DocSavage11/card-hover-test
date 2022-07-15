import React, {useState, useEffect} from 'react'
import './Nav.css'

const NavBar = () => {

  const [show, setShow] = useState(true);
  
  const navSlide = () => {
    if(window.scrollY > 80) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navSlide)
  
    return () => {
      window.addEventListener('scroll', navSlide)
    }
  }, [])
  

  return (
    <div className={`Nav-Bar ${show} && 'hide`}>
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