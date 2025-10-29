import React from 'react'
import logo from '../assets/react-router-logo.svg';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" width="60px"/>
        <h1 className='router-text'>router</h1>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/products"><li>Products</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
        <button>Get started</button>
    </div>
  )
}

export default Navbar