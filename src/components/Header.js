import React, { useState } from 'react';
import "../css/Header.css";
import { FaHome, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };
  return (
    <header className="header mb-3">
    <div className="logo">E-shop</div>
    <nav className="nav">
      <ul>
        <li><a href="/" className="icon"><FaHome size={24} /></a></li>  
      </ul>
      
    </nav>
    <div>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          
        />
        <button type="submit" className="icon"><FaSearch size={24}/></button>
        
      </form>
    </div>
    <div className="icons">
      <a href="/cart" className='icon'>
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