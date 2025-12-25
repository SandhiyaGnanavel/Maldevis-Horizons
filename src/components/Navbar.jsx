import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar solid">
      <div className="nav-container">
        <div className="logo">Maldevis Horizons</div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/destinations" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/planner" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Planner</NavLink>
          </li>
          <li>
            <NavLink to="/mytrips" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>MyTrips</NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
