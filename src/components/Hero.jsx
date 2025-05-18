import React from "react";
import dgm from "../assets/dma.png";
import { BsGraphUpArrow } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="container mx-auto md:pt-44 pt-24 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      {/* left column */}
      <div className="w-fit md:w-1/2 space-y-8 gap-4">
        <h1 className="md:text-5xl text-2xl font-bold leading-tight">
          Welcome to{" "}
          <span className="text-red-700 font-bold relative inline-block animate-pulse">
            Aries Digitals{" "}
          </span>
          <p className="md:text-4xl text-2xl text-gray-700">
            Your Growth-Driven Digital Marketing Partner
          </p>
        </h1>
        <p className="text-gray-600 text-sm md:text-lg max-w-xl">
          We are Aries Digitals, a new-age digital marketing agency with a fresh
          start, founded by seasoned professionals backed by over 6 years of
          hands-on experience as industry professionals and freelancers we’ve
          now launched a full-fledged digital agency that blends passion,
          precision, performance and ready to take your brand to the next level.
        </p>

        <div className="gap-2 pl-4 font-semibold">
          <section className="flex flex-row items-center gap-3">
            <BsGraphUpArrow className="bg-green-400" />
            Growth-Focused Strategies
          </section>
          <section className="flex flex-row items-center gap-3">
            <BsGraphUpArrow className="bg-green-400" />
            ROI-Focused Strategies
          </section>
        </div>
      </div>
      {/* right column */}
      <div className="w-full md:w-1/2 lg:flex lg:justify-center">
        <img
          src={dgm}
          alt="hero/digital-marketing"
          className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 mt-16 md:mt-0 pl-0 md:pl-20 lg:pl-0"
        />
      </div>
    </section>
  );
};

export default Hero;
