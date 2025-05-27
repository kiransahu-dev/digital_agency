import React from "react";
// import dgm from "../assets/home.jpg";
import dgm from "../assets/dma.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section
      className="w-full h-[100vh] flex justify-center items-center bg-[#010101] text-white py-20"
      id="home"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-14 flex flex-col md:flex-row justify-between items-center">
        {/* Left column */}
        <div className="w-full md:w-1/2 space-y-8 gap-4">
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="md:text-5xl text-3xl font-bold leading-tight"
          >
            Welcome to{" "}
            <span className="text-[#a61040] font-bold relative inline-block animate-pulse">
              Aries Digitals
            </span>
            <p className="md:text-3xl text-xl mt-2 text-white font-medium">
              Your Growth-Driven Digital Marketing Partner
            </p>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-gray-300 text-sm md:text-lg max-w-xl"
          >
            We are Aries Digitals, a new-age digital marketing agency with a
            fresh start, founded by seasoned professionals backed by over 6
            years of hands-on experience. We've now launched a full-fledged
            agency that blends passion, precision, performance, and is ready to
            take your brand to the next level.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            className="font-semibold flex flex-col sm:flex-row gap-6"
          >
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              className="flex items-center gap-3 text-white"
            >
              <BsGraphUpArrow className="text-green-400 text-lg font-light" />
              Growth-Focused Strategies
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              className="flex items-center gap-3 text-white"
            >
              <BsGraphUpArrow className="text-green-400 text-lg font-light" />
              ROI-Focused Strategies
            </motion.div>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 lg:flex lg:justify-center"
        >
          <img
            src={dgm}
            alt="digital marketing"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 mt-16 md:mt-20 pl-0 md:pl-20 lg:pl-0 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
