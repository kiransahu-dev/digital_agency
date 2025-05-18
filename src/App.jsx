import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <main className="scroll-smooth relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-28 -left-28 w-[1000px] h-[1000px] bg-gradient-to-tr from-red-500/20 to-cyan-500/20 rounded-full blur-[80px] -z-10 "></div>
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <AboutUs />
          <Services />
          <Portfolio />
          <Testimonial />
          <ContactUs />
        </div>
      </main>
    </>
  );
};

export default App;
