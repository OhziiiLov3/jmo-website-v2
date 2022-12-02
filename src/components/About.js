import React from 'react'
import aboutImg from './images/aboutImage.jpeg'
import { Link } from "react-scroll";
import './About.css'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={aboutImg} alt="aboutimage" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Interactive Online Fitness Programs, Your Fitness Goals are my
            Obession!
          </p>
          <p>
            I am Murad Baskerville, a personal fitness trainier looking to help
            others get in shape & feel good!
          </p>
          <Link
            className="button"
            to="appointment"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Join Today!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About