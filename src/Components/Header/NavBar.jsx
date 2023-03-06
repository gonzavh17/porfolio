import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-item-container">
        <li className="nav-bar-item">Works</li>
        <li className="nav-bar-item">About</li>
        <li className="nav-bar-item">Contact</li>
      </div>
    </div>
  );
}

export default NavBar;
