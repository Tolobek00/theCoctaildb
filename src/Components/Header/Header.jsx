import React from "react";

import "./header.scss";

import logo from "../../Assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="burger_menu">
          <TfiMenuAlt className="burger_btn" />
        </div>
        <div className="nav_header">
          <button onClick={() => navigate("/")}>Home</button>
          <button>API</button>
          <input type="text" placeholder="search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
