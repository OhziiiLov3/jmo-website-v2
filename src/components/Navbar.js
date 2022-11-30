import React, {useState} from 'react'
import logo from "./images/JMO_Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)


const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#353535" }} />
          ) : (
            <FaBars size={20} style={{ color: "#353535" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/appointment">Appointment</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar