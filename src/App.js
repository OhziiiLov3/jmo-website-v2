import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Appointments from "./components/Appointments";
import Footer from "./components/Footer";



function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <About/>
     <Testimonials/>
     <Appointments/>
     <Footer/>
    </div>
  );
}

export default App;
