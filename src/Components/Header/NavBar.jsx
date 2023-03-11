import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-item-container">
        <a className="nav-bar-item" href="#home">Home</a>
        <a className="nav-bar-item" href="#section1">
          About
        </a>
        <a className="nav-bar-item" href="#section2">Works</a>
      </div>
    </div>
  );
}

export default NavBar;
