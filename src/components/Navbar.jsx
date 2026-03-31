import { useState, useEffect } from "react";
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
    { href: "#team", label: "Our Team" },
    { href: "#contactus", label: "Contact Us" },
  ];

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveLink(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Smooth scroll
  const handleClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);

    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      setActiveLink(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleClick(e, "#home")}>
          <img src={logo} alt="logo" className="w-24 md:w-32 cursor-pointer" />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative group pb-1 transition-colors duration-300 ${
                activeLink === link.href
                  ? "text-red-700"
                  : "text-gray-700 hover:text-red-700"
              }`}
            >
              {link.label}

              {/* 🔥 UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-red-700 transition-all duration-300 ${
                  activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="text-red-700 text-2xl" />
          ) : (
            <IoMdMenu className="text-red-700 text-2xl" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="px-6 space-y-3">
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
