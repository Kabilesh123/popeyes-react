import React from 'react'
import './Navbar.css'
import logoimg from "../images/logopop.svg"

const Navbar = () => {
  return (
      <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <nav class="navbar navbar-expand-lg navbar-light bg-light header">
  <div class="container-fluid">
    <div>
      <img src={logoimg} className='imglogo'/>
    </div>
    <button class="navbar-toggler tgicon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse right" id="navbarScroll">
      <ul class="navbar-nav  me-auto my-2 my-lg-0 navbar-nav-scroll styleul " >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Store</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Our story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
      <form class="d-flex">

        <button class="btn btn-outline-success" type="submit">Download app</button>
      </form>
    </div>
  </div>
</nav>
</nav>
    </>
  )
}

export default Navbar
