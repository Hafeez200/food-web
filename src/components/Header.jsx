import React from 'react';
import './Header.css'; // Import the CSS file
import "./Header.css"

function Header() {
  return (
    <div className="header-container">
      <nav className="nav">
        <div className="logo">
          <a href=""><img src="src\assets\logo.jpg" alt="not found"/></a>
        </div>
        <div className="nav-links">
          <a href=""><li>HOME</li></a>
          <a href=""><li>ABOUT</li></a>
          <a href=""><li>FOOD</li></a>
          <a href=""><li>CONTACT</li></a>
        </div>
      </nav>
    </div>
  );
}

export default Header;