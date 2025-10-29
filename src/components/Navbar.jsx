import React from 'react';
import logo from '../assets/react-router-logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-section'>
        <img className='logo' src={logo} alt="React Router Logo" width="60px" />
        <h1 className='router-text'>router</h1>
      </div>

      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/products"><li>Products</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>

      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
