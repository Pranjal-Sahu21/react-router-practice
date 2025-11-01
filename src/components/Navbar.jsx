import React, { useState } from "react";
import logo from "../assets/react-router-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img className="logo" src={logo} alt="React Router Logo" width="60px" />
        <h1 className="router-text">router</h1>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <li>Products</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <li>Jobs</li>
        </NavLink>
      </ul>

      <button onClick={() => navigate("/about")}>Get Started</button>
    </nav>
  );
};

export default Navbar;
