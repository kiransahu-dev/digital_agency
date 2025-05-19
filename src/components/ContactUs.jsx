import React from "react";
import logo from "../assets/logo-nav.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Term of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "Whatsapp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <section className="bg-red-600/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 ">
          {/* brand column */}
          <div className="lg:col-span-4">
            <div className="cursor-pointer flex items-center">
              <img src={logo} alt="logo/png" className="w-20 h-20 " id="home" />
              <p className="text-xl font-medium ml-1">Aries Digitals</p>
            </div>
            <p className="text-gray-600 mb-6 pl-3">
              Ready to Go Digital with Confidence? Go with Aries Digital
            </p>
            {/* social icon */}
            <div className="flex gap-4 items-center pl-3">
              <a
                href="https://www.facebook.com/profile.php?id=61558245320889"
                target="_blank"
              >
                <FaFacebookF className="size-8 hover:bg-red-300 hover:text-gray-700 text-white rounded-full p-2 bg-red-500 transition-all duration-200" />
              </a>
              <a
                href="https://www.instagram.com/ariesdigitals/"
                target="_blank"
              >
                <FaInstagram className="size-8 hover:bg-red-300 hover:text-gray-700 text-white rounded-full p-2 bg-red-500 transition-all duration-200" />
              </a>
              <a href="" target="_blank">
                <FaWhatsapp className="size-8 hover:bg-red-300 hover:text-gray-700 text-white rounded-full p-2 bg-red-500 transition-all duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/ariesdigitals/?viewAsMember=true"
                target="_blank"
              >
                <FaLinkedinIn className="size-8 hover:bg-red-300 hover:text-gray-700 text-white rounded-full p-2 bg-red-500 transition-all duration-200" />
              </a>
            </div>
          </div>
          {/* footer nav items */}
          <div className="lg:col-span-8 mt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium mb-4 uppercase">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href=""
                            className="text-gray-600 hover:text-gray-900 "
                          >
                            {" "}
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
