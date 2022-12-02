import React, {useState} from 'react'
import logo from "./images/JMO_Logo.png";
import { Link} from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)


const handleClick = () => setClick(!click)
const closeMenu =()=> setClick(false)

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="logo"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="appointment"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              Appointment
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar