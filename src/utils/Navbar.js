import React from "react";
import { Logo } from "../images/imgs";
import { Bell, Search } from "../images/svg";
import { navLinks } from "../constants";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wraper">
          <div className="logo">
            <a href="/" className="logo-link">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <ul className="nav-list">
            {
              navLinks.map(link=>(
            <li key={link.name} className="list-item">
              <a href={link.path}>{link.name}</a>
            </li>
              ))
            }
          </ul>
          <div className="notification">
            <img src={Search} alt="search"/>
            <img src={Bell} alt="bell"/>
          </div>
          <a className="login-btn" href="pages/login.html">
            sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
