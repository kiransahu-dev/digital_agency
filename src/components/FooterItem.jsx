import React from "react";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const FooterItem = () => {
  const footerLinks = {
    company: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#aboutus" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact Us", href: "#contactus" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contactUs: [
      {
        name: "+91 9040765685",
        href: "tel:+919040765685",
        icon: <MdOutlinePhone />,
      },
      {
        name: "admin@ariesdigital.in",
        href: "mailto:admin@ariesdigital.in",
        icon: <MdOutlineEmail />,
      },
      {
        name: (
          <>
            Aska Road, Near TVS Showroom,
            <br />
            Berhampur, Odisha 760001
          </>
        ),
        href: "",
        icon: <MdOutlineLocationOn />,
      },
    ],
  };

  const sectionTitles = {
    company: "COMPANY",
    support: "SUPPORT",
    contactUs: "CONTACT US",
  };

  return (
    <div className="text-white flex flex-col md:flex-row justify-between gap-6 mt-8 md:mt-10">
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category}>
          <h3 className="text-lg font-medium mb-2 uppercase">
            {sectionTitles[category] || category.toUpperCase()}
          </h3>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index} className="flex items-center space-x-2">
                {link.icon && (
                  <span className="size-8 flex items-center justify-center hover:bg-pink-400 hover:text-gray-700 text-white rounded-full bg-[#a61040] transition-all duration-200">
                    {link.icon}
                  </span>
                )}
                {link.href ? (
                  <a
                    href={link.href}
                    className="text-white/60 text-sm font-medium hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <span className="text-white/60 text-sm font-medium hover:text-white">
                    {link.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
