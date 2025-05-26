import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "motion/react";
import { fadeIn, scale, slideIn, textVariant } from "../utils/motion";
import story from "../assets/Story.png";

const AboutUs = () => {
  return (
    <>
      <motion.section
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto pt-24 md:pt-32 px-4 sm:px-6 sm:py-6 sm:mt-6 xl:px-14"
        id="aboutus"
      >
        {/* about */}
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-[#a61040] text-4xl tracking-wide">
            Our Story
          </h1>
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
            className="font-bold md:text-2xl text-[16px] pt-6 md:pt-14 text-[#950e39] "
          >
            We’re New, But We’re Not New to the Game - The Aries Digitals Story
          </motion.h3>
          <p className="text-gray-600 text-sm md:text-lg md:font-medium pt-6 tracking-wide">
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
        <div className="pt-6">
          <h4 className="font-bold text-[#950e39] text-[16px] md:text-lg md:pt-8">
            Why Aries Digitals?
          </h4>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Left side (Text & Motion) */}
            <div className="flex flex-col gap-4 md:w-1/2 md:pt-6 pt-4">
              {[
                "6+ years of practical digital marketing experience.",
                "Personalized strategies for every business.",
                "Flexible solutions for businesses of all sizes.",
                "Transparent Reporting & Analytics.",
                "Young agency, big ideas, proven expertise.",
                "One-on-One Strategy Sessions with Experts.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={scale(0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                >
                  <section className="flex items-center gap-2">
                    <IoMdArrowDropright
                      className="text-[#a61040]"
                      size="25px"
                    />
                    <p className="text-xs md:text-lg">{text}</p>
                  </section>
                </motion.div>
              ))}
            </div>

            {/* Right side (Image) */}
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              className="md:w-[500px] md:h-[500px] mt-6 md:-mt-10"
            >
              <img
                src={story}
                alt="hero/png"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
