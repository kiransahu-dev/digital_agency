import React from "react";

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
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: "🔗",
      },
      {
        name: "Email",
        href: "mailto:someone@example.com",
        icon: "✉️",
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
        icon: "📍",
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
                {link.icon && <span>{link.icon}</span>}
                {link.href ? (
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-medium hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <span className="text-white/50 text-sm font-medium">
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
