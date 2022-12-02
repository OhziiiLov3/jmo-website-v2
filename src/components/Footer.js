import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="container">
            <ul>
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
                    <a href="/appointments">Appointments</a>
                </li>
            </ul>
            <div className="bottom">
                <span className="line"></span>
                <p>2018 joinmyobessionllc, All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer