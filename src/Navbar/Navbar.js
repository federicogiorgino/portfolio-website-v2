import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header class='header'>
      <a href='#home' class='logo'>
        {"<f.g/>"}
      </a>
      <input class='menu-btn' type='checkbox' id='menu-btn' />
      <label class='menu-icon' for='menu-btn'>
        <span class='navicon'></span>
      </label>
      <ul class='menu'>
        <li>
          <a href='#home'>
            <span className='number-label'>00. </span>Home
          </a>
        </li>
        <li>
          <a href='#projects'>
            <span className='number-label'>01. </span>Projects
          </a>
        </li>
        <li>
          <a href='#contact'>
            <span className='number-label'>02. </span>Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
