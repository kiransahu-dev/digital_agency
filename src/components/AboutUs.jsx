import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "motion/react";
import { fadeIn, scale, slideIn, textVariant } from "../utils/motion";

const AboutUs = () => {
  return (
    <>
      <motion.section
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto pt-24 md:pt-32 pb-6 px-4 sm:px-6 xl:px-14"
        id="aboutus"
      >
        {/* about */}
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-[#a61040] text-4xl">About Us</h1>
        </div>
        {/* about heading and para */}
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
        >
          <motion.h3
            variants={textVariant(0.4)}
            initial="hidden"
            whileInView="show"
            className="font-semibold md:text-xl text-medium pt-6 md:pt-14 "
          >
            We’re New, But We’re Not New to the Game - The Aries Digitals Story
          </motion.h3>
          <p className="text-gray-600 text-sm md:text-lg md:font-medium pt-6">
            Aries Digitals was born from the drive to do more and do it better.
            After years of working across industries as freelancers and
            employees, we took the leap to launch a full-service agency built on
            real-world experience as industry professionals and freelancers.
            We’ve turned our passion into a performance-driven digital agency.
            We understand what works, what doesn’t, and how to get results
            without wasting time or budget. Now, as a professional digital
            agency, we’ve taken that experience to the next level. We’re small,
            agile, obsessed with results and ready to deliver tailored solutions
            that help your brand scale with confidence.
          </p>
        </motion.div>
        {/* bullet point */}
        <div className="md:pt-12 pt-6">
          <h4 className="font-semibold text-medium md:text-lg">
            Why Aries Digitals?
          </h4>
          <div className="md:pt-8 pt-4  font-stretch-50%">
            <motion.div
              className=""
              variants={scale(0.2)}
              initial="hidden"
              whileInView="show"
            >
              <section className="flex items-center">
                <IoMdArrowDropright className="text-[#a61040]" size={"25px"} />
                <p className="text-xs md:text-lg">
                  6+ years of practical digital marketing experience.
                </p>
              </section>
            </motion.div>
            <motion.div
              className=""
              variants={scale(0.3)}
              initial="hidden"
              whileInView="show"
            >
              <section className="flex items-center">
                <IoMdArrowDropright className="text-[#a61040]" size={"25px"} />
                <p className="text-xs md:text-lg">
                  Personalized strategies for every business.
                </p>
              </section>
            </motion.div>
            <motion.div
              className=""
              variants={scale(0.4)}
              initial="hidden"
              whileInView="show"
            >
              <section className="flex items-center">
                <IoMdArrowDropright className="text-[#a61040]" size={"25px"} />
                <p className="text-xs md:text-lg">
                  Flexible solutions for businesses of all sizes.
                </p>
              </section>
            </motion.div>
            <motion.div
              className=""
              variants={scale(0.6)}
              initial="hidden"
              whileInView="show"
            >
              <section className="flex items-center">
                <IoMdArrowDropright className="text-[#a61040]" size={"25px"} />
                <p className="text-xs md:text-lg">
                  Transparent Reporting & Analytics.
                </p>
              </section>
            </motion.div>
            <motion.div
              className=""
              variants={scale(0.7)}
              initial="hidden"
              whileInView="show"
            >
              <section className="flex items-center">
                <IoMdArrowDropright className="text-[#a61040]" size={"25px"} />
                <p className="text-xs md:text-lg">
                  Young agency, big ideas, proven expertise.
                </p>
              </section>
            </motion.div>
            <motion.div
              className=""
              variants={scale(0.8)}
              initial="hidden"
              whileInView="show"
            >
              <section className="flex items-center">
                <IoMdArrowDropright className="text-[#a61040]" size={"25px"} />
                <p className="text-xs md:text-lg">
                  One-on-One Strategy Sessions with Experts.
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
