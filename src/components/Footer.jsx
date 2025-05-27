import React, { useState } from "react";
import logo from "../assets/logo-footer.png";
// import logo from "../assets/flu.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import FooterItem from "./FooterItem";
import Copyright from "./Copyright";

const Footer = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    // Simple email pattern check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Open email compose with the entered email in the body
    window.location.href = `mailto:admin@ariesdigital.in?subject=New Contact&body=My email is: ${encodeURIComponent(
      email
    )}`;
  };
  return (
    <footer className="bg-[#00000c] text-white" id="contactus">
      <div className="w-full bg-[#ffffff19] py-8 px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-20">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer flex items-center gap-3"
            >
              <img
                src={logo}
                alt="logo/png"
                className="w-24 h-24 object-contain"
              />
              <p
                className="text-xl font-light uppercase tracking-[0.1em]"
                style={{
                  textShadow: `
                0 0 5px #a61040,
                0 0 5px #c91e52,        
                0 0 5px #a63157,         
                0 0 8px #7b0f2e 
              `,
                }}
              >
                Aries Digitals
              </p>
            </div>

            <div className="ml-1">
              <p className="pb-2">Ready to Go Digital with Confidence?</p>
              <p className="italic font-medium text-sm">
                Go with Aries Digitals !!
              </p>
            </div>

            <div className="flex gap-4 items-center ml-1">
              <a
                href="https://www.facebook.com/profile.php?id=61558245320889"
                target="_blank"
              >
                <FaFacebookF className="size-8 hover:bg-blue-400 hover:text-gray-700 text-white rounded-full p-2 bg-[#1877f2]" />
              </a>
              <a
                href="https://www.instagram.com/ariesdigitals/"
                target="_blank"
              >
                <FaInstagram className="size-8 hover:bg-pink-300 hover:text-gray-700 text-white rounded-full p-2 bg-[#E1306c]" />
              </a>
              <a
                href="https://www.linkedin.com/company/ariesdigitals/?viewAsMember=true"
                target="_blank"
              >
                <FaLinkedinIn className="size-8 hover:bg-blue-400 hover:text-gray-700 text-white rounded-full p-2 bg-[#0077B5]" />
              </a>
              <a
                href="https://api.whatsapp.com/message/MUUOX7GWBSCCF1?autoload=1&app_absent=0"
                target="_blank"
              >
                <FaWhatsapp className="size-8 hover:bg-green-300 hover:text-gray-700 text-white rounded-full p-2 bg-[#25d366]" />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-1">
            <FooterItem />
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 xl:mt-0">
              <input
                type="email"
                placeholder="Enter your mail id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-600 bg-white w-full sm:w-auto flex-1 py-2.5 px-3 rounded focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#a60140] hover:bg-pink-800/70 duration-300 px-5 py-2.5 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="text-center text-sm mt-8 text-white/80">
          © 2025 Aries Digitals. All rights reserved.
        </div> */}
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
