import React from "react";
import Logo from '../images/imgs/logo.png'
import Search from '../images/svg/search.svg'
import Bell from '../images/svg/notification.svg'


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
            <li className="list-item">
              <a href="">home</a>
            </li>
            <li className="list-item">
              <a href="">movies</a>
            </li>
            <li className="list-item">
              <a href="">series</a>
            </li>
            <li className="list-item">
              <a href="">my list</a>
            </li>
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
