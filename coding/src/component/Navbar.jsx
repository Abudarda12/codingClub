import React, { use, useState } from 'react';
import "./navbar.css"; // Adjust the path as necessary



export default function Navbar() {
  const [active, setActive] = useState(true);

  const toggleActive = () => {
    setActive(!active);
  }


  return (
    <nav>
      <div className="nav-header">
        <div className="left-nav">
          {/* <img src={portfolioLogo} alt="logo" /> Use the imported variable */}
          <h5>GEC Bhojpur</h5>
        </div>

        <div className="right-nav" >
          <a href="#home"><i class="fa-regular fa-house"></i>  Home</a>
          <a href="#contact"><i class="fa-regular fa-file-code"></i>  Contact</a>
          <a href="#form"><i class="fa-regular fa-envelope"></i>  Join Us</a>
          <a href="#event"><i class="fa-regular fa-user"></i> Events</a>
        </div>
        <div className="toggle-button" onClick={toggleActive}>
          <i className={`fa-solid fa-${active ? 'bars' : 'xmark'}`}></i>
        </div>
      </div>

      <div className={`nav-links ${!active ? 'active' : ''}`}>
        <a href="#"><i class="fa-regular fa-house"></i>  Home</a>
        <a href="#contact"><i class="fa-regular fa-file-code"></i> Contact</a>
        <a href="#form"><i class="fa-regular fa-envelope"></i>  Join Us</a>
        <a href="#event"><i class="fa-regular fa-user"></i> Events</a>
      </div>

    </nav>
  );
}