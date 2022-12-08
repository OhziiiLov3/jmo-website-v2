import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Appointments from "./components/Appointments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="media-screen" >
     <Navbar/>
     <Hero/>
     <About/>
     <Testimonials/>
     <Appointments/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
