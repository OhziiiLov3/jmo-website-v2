import React from 'react'
import { InlineWidget } from "react-calendly";
import { Link } from "react-scroll";
import './Appointments.css'

const Appointments = () => {
  return (
    <div className="appointment" id="appointment">
      <div className="container">
        <div className="col-1">
          <p>NO more temporary diets|NO more powders|NO more quitting</p>
          <p>HIIT | Kickboxing | Fat Burning | Muscle Scuplting | and More!</p>
          <p>Sign up for Personal/Group/Private and Kids Training</p>
          <Link
            className="button"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Schedule Your Free Consultation Today
          </Link>
        </div>
        <div className="col-2">
          <InlineWidget
            className="App"
            url="https://calendly.com/keith-baskerville-ohz"
          />
        </div>
      </div>
    </div>
  );
}

export default Appointments