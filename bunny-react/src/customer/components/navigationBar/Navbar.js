import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import cart_icon from './cart_icon.png'

function NavigationBar() {

  const [menu,setMenu] = useState("shop");


  return (
    <div class="navbar">
    <a class="nav-logo" href="/home">Navbar</a>
      <div class="nav-menu">
        <li onClick={()=>{setMenu("TCG")}} href="#">TCG </li>
        <li onClick={()=>{setMenu("Accessories")}} href="#">Accessories </li>
      </div>
      <div class="nav-login-register-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Link class="nav-cart"to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div> 
      </div>
</div>
  );
}

export default NavigationBar;