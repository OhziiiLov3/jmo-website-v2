import React from 'react'
import {  Link} from "react-scroll";

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Email to Book</p>
        <p>joinmyobession@gmail.com</p>
        <p>JoinMyObession</p>
        <p>Get in Shape & Feel Good</p>
        <Link
              to="appointment"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="button">
          Free Consultation
        </Link>
      </div>
    </div>
  );
}

export default Hero