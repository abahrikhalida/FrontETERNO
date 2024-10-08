import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import search_icon from '../Assests/search_icon.png';
import fav_icon from '../Assests/fav_icon.png';
import list from '../Assests/list.png';
import cart_icon from '../Assests/cart_icon.png'
const Navbar = () => {
    const [menu, setMenu] = useState("HOME");
    
  return (
    <div className='navbar'>
      <div className='nav-logo'>
       <div className='logo-text'> ETERNO</div>
       <div className='sub-logo-text'>ELEGENCE FOREVER</div>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("HOME")}>
          <Link style={{textDecoration:'none',color:'black'}} to='/'> HOME </Link>
          {menu === "HOME" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("ABOUT US")}>
          <Link  style={{textDecoration:'none',color:'black'}}   to='/ABOUT US'> ABOUT US</Link>
          {menu === "ABOUT US" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("SHOP")}>
          <Link  style={{textDecoration:'none',color:'black'}} to='/SHOP'>SHOP </Link>
          {menu === "SHOP" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("BLOG")}>
          <Link  style={{textDecoration:'none',color:'black'}}   to='/BLOG'> BLOG</Link>
          {menu === "BLOG" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("CONTACT US")}>
          <Link  style={{textDecoration:'none',color:'black'}}   to='/CONTACT US'>CONTACT US </Link>
          {menu === "CONTACT US" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/search'> <img src={search_icon} alt="search_icon" /> </Link>
        <Link to='/cart'> <img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-icon">0</div>
        <Link to='/fav'> <img src={fav_icon} alt="fav_icon" /> </Link>
        <Link to='/list'> <img src={list} alt="list_icon" /> </Link>
      </div>
    </div>
  )
}

export default Navbar
