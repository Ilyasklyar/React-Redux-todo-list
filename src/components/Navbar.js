import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="naw-wrap">
      <div className="naw-wrap-item">
        <NavLink to='/home' activeClassName="">Home</NavLink>
      </div>
      <div className="naw-wrap-item">
        <NavLink to='/about' activeClassName="">About</NavLink>
      </div>
    </nav>
  );

}

export default Navbar;
