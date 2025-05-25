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
    window.location.href = `mailto:admin@example.com?subject=New Contact&body=My email is: ${encodeURIComponent(
      email
    )}`;
  };
  return (
    <>
      <footer className="bg-[#00000c] text-white" id="contactus">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
          {/* left side */}
          <div className="lg:col-span-4">
            <div className="cursor-pointer flex items-center">
              <img src={logo} alt="logo/png" className="w-32 h-32 " id="home" />
              <p
                className="text-xl font-light uppercase tracking-[0.1em] pl-2"
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
            <section className="mb-6 ml-3 ">
              <p className="pb-4">Ready to Go Digital with Confidence?</p>
              <p className="italic font-medium text-sm">
                Go with Aries Digitals !!
              </p>
            </section>
            {/* social icon */}
            <div className="flex gap-4 items-center ml-3">
              <a
                href="https://www.facebook.com/profile.php?id=61558245320889"
                target="_blank"
              >
                <FaFacebookF className="size-8 hover:bg-pink-400 hover:text-gray-700 text-white rounded-full p-2 bg-[#a61040] transition-all duration-200" />
              </a>
              <a
                href="https://www.instagram.com/ariesdigitals/"
                target="_blank"
              >
                <FaInstagram className="size-8 hover:bg-pink-400 hover:text-gray-700 text-white rounded-full p-2 bg-[#a61040] transition-all duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/ariesdigitals/?viewAsMember=true"
                target="_blank"
              >
                <FaLinkedinIn className="size-8 hover:bg-pink-400 hover:text-gray-700 text-white rounded-full p-2 bg-[#a61040] transition-all duration-200" />
              </a>
              <a
                href="https://api.whatsapp.com/message/MUUOX7GWBSCCF1?autoload=1&app_absent=0"
                target="_blank"
              >
                <FaWhatsapp className="size-8 hover:bg-pink-400 hover:text-gray-700 text-white rounded-full p-2 bg-[#a61040] transition-all duration-200" />
              </a>
            </div>
          </div>
          {/* mid side */}
          <FooterItem />
          {/* right side */}
          <div className="mt-10 md:mt-0">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-gray-600 bg-white  w-fit sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#a60140] hover:bg-pink-800/70 duration-300 px-5 py-2.5 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
