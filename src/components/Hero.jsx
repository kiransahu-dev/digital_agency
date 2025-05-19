import React from "react";
import dgm from "../assets/dma.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section
      className="container mx-auto pt-24 md:pt-44 pb-6 px-4 sm:px-6 xl:px-14 flex flex-col md:flex-row justify-between items-center"
      id="home"
    >
      {/* left column */}
      <div className="w-fit md:w-1/2 space-y-8 gap-4">
        <motion.h1
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="md:text-5xl text-2xl font-bold leading-tight"
        >
          Welcome to{" "}
          <span className="text-red-700 font-bold relative inline-block animate-pulse">
            Aries Digitals{" "}
          </span>
          <p className="md:text-4xl text-2xl text-gray-700">
            Your Growth-Driven Digital Marketing Partner
          </p>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-sm md:text-lg max-w-xl"
        >
          We are Aries Digitals, a new-age digital marketing agency with a fresh
          start, founded by seasoned professionals backed by over 6 years of
          hands-on experience as industry professionals and freelancers we’ve
          now launched a full-fledged digital agency that blends passion,
          precision, performance and ready to take your brand to the next level.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="font-semibold md:flex gap-18"
        >
          <motion.section
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView="show"
            className="flex flex-row items-center gap-3"
          >
            <BsGraphUpArrow className="bg-green-400" />
            Growth-Focused Strategies
          </motion.section>
          <motion.section
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            className="flex flex-row items-center gap-3"
          >
            <BsGraphUpArrow className="bg-green-400" />
            ROI-Focused Strategies
          </motion.section>
        </motion.div>
      </div>
      {/* right column */}
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 lg:flex lg:justify-center"
      >
        <img
          src={dgm}
          alt="hero/digital-marketing"
          className="rounded-lg  relative z-10 hover:scale-[1.02] transition-transform duration-300 mt-16 md:mt-0 pl-0 md:pl-20 lg:pl-0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
