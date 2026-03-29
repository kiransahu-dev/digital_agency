import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandSlide from "./components/BrandSlide";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <main className="">
        {/* <div className="absolute -top-28 -left-28 w-[1000px] h-[1000px] bg-gradient-to-tr from-red-500/20 to-cyan-500/20 rounded-full blur-[80px] -z-10 "></div> */}
        <div className="overflow-auto">
          <Navbar />
          <Hero />
          <BrandSlide />
          <AboutUs />
          <Services />
          <Team />
          {/* <Portfolio /> */}
          <Testimonial />
          {/* <ContactUs /> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
