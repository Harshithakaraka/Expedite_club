import React from 'react'
import { NavLink } from 'react-router-dom';
import a1 from  '../assets/a1.jpg'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const navLinkStyle = {
    color: 'blue', // Set the color to red
    textDecoration: 'none' // Remove underline
  };
  const navbarStyle = {
    backgroundColor: 'white' // Set the background color of the navbar
  };
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light " style={navbarStyle}>
    <div class="container">
    <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="100" height="100" />
          </NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to="/" style={navLinkStyle} >Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/about" style={navLinkStyle} >About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/services" style={navLinkStyle} >Domains</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/sessions" style={navLinkStyle} >Sessions</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact" style={navLinkStyle} >Contact Us</NavLink>
          </li>
          
        </ul>
      <a class="navbar-brand fw-bolder fs-4 mx-auto" href="#">Expedite</a>
        
        <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i> Register</NavLink>

      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;