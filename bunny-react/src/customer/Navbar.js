import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

function NavigationBar() {
  return (
    <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-logo" href="/home">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">TCG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accessories</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link nav-login-register" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-login-register" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="cart" href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavigationBar;