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
import "../index.css";

const Services = () => {
  return (
    <div className="relative bg-black overflow-hidden" id="services">
      {/* 🔥 Fireflies (Jugnu Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(480)].map((_, i) => (
          <span
            key={i}
            className="firefly"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <section className="relative z-10 max-w-7xl mx-auto md:px-18 py-14 px-6 scroll-mt-28">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-[#a61040] text-4xl tracking-wide">
            Services
          </h1>
        </div>
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-10 place-items-center"
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/12 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-red-600/75 to-transparent transform rotate-25 blur-sm opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaInstagram size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Social Media Marketing
              </h4>
              <p className="font-stretch-50% text-sm text-white">
                Create scroll-stopping content, boost engagement, grow your
                community, build your brand, engage your audience, and generate
                leads across platforms like Instagram, Facebook, and LinkedIn.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/12 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-red-600/75 to-transparent transform rotate-25 blur-sm opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaUserFriends size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Influencer Marketing & Content Creation
              </h4>
              <p className="font-stretch-50% text-sm text-wblack70">
                We connect brands with the right influencers to amplify your
                message, build authentic relationships with your audience, and
                drive conversions like never before.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/12 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-red-600/75 to-transparent transform rotate-25 blur-sm opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaMeta size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Meta and Google Ad campaigns
              </h4>
              <p className="font-stretch-50% text-sm">
                Get immediate results with high-performing paid campaigns
                designed to maximize ROI. Reach your ideal customer faster with
                high-converting PPC, lead generation and display ad campaigns.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/12 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-red-600/75 to-transparent transform rotate-25 blur-sm opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaLaptopCode size={"35px"} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Website Design & Development
              </h4>
              <p className="font-stretch-50% text-sm">
                Modern, mobile-optimized websites that don’t just look good—but
                work great, we create responsive, user-friendly websites
                designed to attract, engage, and convert.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/12 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-red-600/75 to-transparent transform rotate-25 blur-sm opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaPaintBrush size={35} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Branding and Graphic Designing
              </h4>
              <p className="font-stretch-50% text-sm">
                From logos to full brand identity — we make sure your brand
                leaves a lasting and unforgettable impression.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/12 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group hover:scale-[1.02]">
            {/* Shine animation overlay */}
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-red-600/75 to-transparent transform rotate-25 blur-sm opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100"></div>
            <div className="relative z-10 p-4 text-white">
              <FaCameraRetro size={35} color="#a61040" className="pb-3" />
              <h4 className="font-semibold text-lg pb-3">
                Product Photography & Corporate Videos
              </h4>
              <p className="font-stretch-50% text-sm">
                This brings your brand to life and boosts your conversion power.
                Whether you're launching a new product, updating your website or
                telling your brand story — our visuals are crafted to connect,
                engage, and convert.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
