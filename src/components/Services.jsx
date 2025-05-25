import React from "react";
import {
  FaInstagram,
  FaLaptopCode,
  FaPaintBrush,
  FaUserFriends,
  FaCameraRetro,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { slideIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section className="container mx-auto md:pt-32 pt-10 px-4" id="services">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-[#a61040] text-4xl tracking-wide">Services</h1>
        </div>
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center pt-6 md:pt-14 "
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/90 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-red-600/75 to-transparent transform rotate-[25deg] blur-sm opacity-0 transition-all duration-1000 group-hover:left-[100%] group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaInstagram size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Social Media Marketing
              </h4>
              <p className="font-stretch-50% text-sm text-white/70">
                Create scroll-stopping content, boost engagement, grow your
                community, build your brand, engage your audience, and generate leads across platforms
                like Instagram, Facebook, and LinkedIn.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/90 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-red-600/75 to-transparent transform rotate-[25deg] blur-sm opacity-0 transition-all duration-1000 group-hover:left-[100%] group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white ">
              <FaUserFriends size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Influencer Marketing & Content Creation
              </h4>
              <p className="font-stretch-50% text-sm text-white/70">
                We connect brands with the right influencers to amplify your
                message, build authentic relationships with your audience, and
                drive conversions like never before.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/90 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-red-600/75 to-transparent transform rotate-[25deg] blur-sm opacity-0 transition-all duration-1000 group-hover:left-[100%] group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white ">
              <FaMeta size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Meta and Google Ad campaigns
              </h4>
              <p className="font-stretch-50% text-sm text-white/70">
                Get immediate results with high-performing paid campaigns
                designed to maximize ROI. Reach your ideal customer faster with
                high-converting PPC, lead generation and display ad campaigns.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/90 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-red-600/75 to-transparent transform rotate-[25deg] blur-sm opacity-0 transition-all duration-1000 group-hover:left-[100%] group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaLaptopCode size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Website Design & Development
              </h4>
              <p className="font-stretch-50% text-sm text-white/70">
                Modern, mobile-optimized websites that don’t just look good—but
                work great, we create responsive, user-friendly websites
                designed to attract, engage, and convert.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/90 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-red-600/75 to-transparent transform rotate-[25deg] blur-sm opacity-0 transition-all duration-1000 group-hover:left-[100%] group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaPaintBrush size={35} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                  Branding and Graphic Designing
              </h4>
              <p className="font-stretch-50% text-sm text-white/70">
                From logos to full brand identity — we make sure your brand
                leaves a lasting and unforgettable impression.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-black/90 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-red-600/75 to-transparent transform rotate-[25deg] blur-sm opacity-0 transition-all duration-1000 group-hover:left-[100%] group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaCameraRetro size={35} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Product Photography & Corporate Videos
              </h4>
              <p className="font-stretch-50% text-sm text-white/70">
                This brings your brand to life and boosts your conversion power.
                Whether you're launching a new product, updating your website
                or telling your brand story — our visuals are crafted to
                connect, engage, and convert.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
