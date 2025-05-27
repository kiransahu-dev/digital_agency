import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { HiX } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo-nav.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#aboutus", label: "Our Story" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Our Works" },
    { href: "#contactus", label: "Contact Us" },
  ];

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on click
  const handleClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white/90 border-b backdrop-blur-sm border-gray-100"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <a href="#home" onClick={() => setActiveLink("#home")}>
          <div className="cursor-pointer md:w-32 w-20 md:h-32 h-20">
            <img src={logo} alt="logo/png" />
          </div>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-700 after:transition-all ${
                activeLink === link.href
                  ? "text-red-700 after:w-full"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6 text-red-700" />
          ) : (
            <IoMdMenu className="size-6 text-red-700" />
          )}
        </button>
      </div>

      {/* mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-6 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block text-[16px] font-medium py-2 ${
                  activeLink === link.href ? "text-red-700" : "text-gray-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
