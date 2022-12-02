import React from 'react'
import { FaRunning} from "react-icons/fa";
import {  GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'

import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="userpic" />
            <FaRunning></FaRunning>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              beatae!
            </p>
            <p>
              <span>Raybourne Checks</span>
            </p>
            <p>LifeGuard</p>
          </div>
          <div className="card">
            <img src={user2} alt="userpic" />
            <GrYoga/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              assumenda.
            </p>
            <p>
              <span>Sally Su</span>
            </p>
            <p>Stay at Home Mom</p>
          </div>
          <div className="card">
            <img src={user3} alt="userpic" />
            <GiWeightLiftingUp />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              nobis.
            </p>
            <p>
              <span>Joe Burger</span>
            </p>
            <p>Middle School Teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials