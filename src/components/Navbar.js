import React from 'react'
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

function Navbar() {
  return (
    
    <div className='navbar'>
      <div className='leftside'>
        <img src={Logo}/>
        <h1 className='title'>Crave Pizza</h1>
      </div>
      <div className='rightside'>
        <Link to='/' className='home'>Home</Link>
        <Link to='/menu' className='menu'>Menu</Link>
        <Link to='/about' className='about'>About</Link>
        <Link to='/contact' className='contact'>Contact</Link>
      </div>
    </div>
    
  )
}

export default Navbar
