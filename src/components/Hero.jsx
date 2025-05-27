import React from "react";
// import dgm from "../assets/home.jpg";
import dgm from "../assets/dma.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center bg-[#010101] text-white py-16 md:py-24"
      id="home"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-14 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        {/* Left column - TEXT */}
        <div className="w-full md:w-1/2 space-y-6 order-1 md:order-none">
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Welcome to{" "}
            <span className="text-[#a61040] font-bold animate-pulse">
              Aries Digitals
            </span>
            <p className="text-xl md:text-3xl mt-2 text-white font-medium">
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
            className="font-semibold flex flex-col sm:flex-row gap-4 sm:gap-8"
          >
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              className="flex items-center gap-2"
            >
              <BsGraphUpArrow className="text-green-400 text-lg" />
              Growth-Focused Strategies
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              className="flex items-center gap-2"
            >
              <BsGraphUpArrow className="text-green-400 text-lg" />
              ROI-Focused Strategies
            </motion.div>
          </motion.div>
        </div>

        {/* Right column - IMAGE */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 flex justify-center order-2 md:order-none"
        >
          <img
            src={dgm}
            alt="digital marketing"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[450px] lg:max-w-[500px] rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
