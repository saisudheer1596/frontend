import React from 'react';
import "../css/Header.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
    <div className="logo">E-Shop</div>
    <nav className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#">Shop</a></li>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Contact</a></li>
      </ul>
    </nav>
    <div className="icons">
      <a href="/cart" className="icon">
        <FaShoppingCart size={24} />
      </a>
      <a href="/login" className="icon">
        <FaUserCircle size={24} />
      </a>
    </div>
  </header>
  )
}

export default Header