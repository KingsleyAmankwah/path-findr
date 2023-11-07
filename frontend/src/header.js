import React, { useState } from "react";
import './App.css';
import logo from './logo.png'
import menu from './app.png'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!isMenuOpen);
  };
  

  return (
    <div className="nav-bar">
      <list>
        <ul><img src={logo} alt="logo" style={{ width: 40 }} id="logo" /></ul>
        <ul> 
          <a href="google.com" onClick={toggleMenu}>
            <img src={menu} style={{ width: 40 }} id="menu" />
          </a> 
        </ul>
      </list>

      {isMenuOpen && (
        <div className="dropdown-menu">
          {/* Add your menu content here */}
          <ul>
            <li><a href="#">Menu Item 1</a></li>
            <li><a href="#">Menu Item 2</a></li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )
      }
    </div>
  )
}
