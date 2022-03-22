import React from "react";
import LoginButton from "../pages/Login/LoginButton/LoginButton";

import { Link, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Sample Tracker
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Sign up / Login
          </Link>
        </li>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
