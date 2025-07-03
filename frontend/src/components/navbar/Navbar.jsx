
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="left">
        <a href="/" className="logo">
          <img src="/hive.png" alt="Logo"></img>
          <span>Hive</span>
        </a>
        <a href="/">Home</a>
        <a href="/listings">Listings</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/properties">Properties</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/login" className="login">Login</a>
        <a href="/register" className="register">Register</a>
        <div className="menuIcon">
          <img src="/menu.png" alt="Menu Icon" onClick={()=>setOpen(!open)}></img>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/listings">Listings</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/properties">Properties</a>
          <a href="/agents">Agents</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;