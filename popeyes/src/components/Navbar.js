import React from 'react'
import './Navbar.css'
import logoimg from "../images/logopop.svg"
import { Link } from 'react-router-dom'
import Stores from '../pages/Stores.js';

const Navbar = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">  
      <img src={logoimg} className='imglogo'/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse rightNav" id="navbarTogglerDemo02">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  active" to="/Menu">Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Stores" tabindex="-1" aria-disabled="true">Stores</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/Contact" tabindex="-1" aria-disabled="true">Contact us</Link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Download App</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
