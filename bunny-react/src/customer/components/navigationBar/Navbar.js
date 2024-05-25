import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import nav_dropdown from '../Assets/nav_dropdown.png'
import cart_icon from '../Assets/cart_icon.png'


function NavigationBar() {

  const [menu,setMenu] = useState("shop");

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }


  return (
    <div class="navbar">
      <a class="nav-logo" href="/home">Navbar</a>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        <li onClick={()=>{setMenu("TCG")}} href="#">TCG </li>
        <li onClick={()=>{setMenu("BoardGames")}} href="#">BoardGames </li>
        <li onClick={()=>{setMenu("Accessories")}} href="#">Accessories </li>
      </ul>
      <div class="nav-login-register-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Link class="nav-cart"to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">2</div> 
      </div>
    </div>
  );
}

export default NavigationBar;