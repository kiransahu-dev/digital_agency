import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import gd1 from "../assets/gd/gd.jpg";
import gd2 from "../assets/gd/gd2.jpg";
import gd3 from "../assets/gd/gd3.jpg";
import gd4 from "../assets/gd/gd4.jpg";

import lg1 from "../assets/logo/lg1.jpg";
import lg2 from "../assets/logo/lg2.jpg";
import lg3 from "../assets/logo/lg3.png";
import lg4 from "../assets/logo/lg4.jpg";

const Portfolio = () => {
  const ourWorkData = [
    {
      category: "Graphic Designs",
      items: [
        { title: "Holiday Resort", image: gd1 },
        { title: "Reflection Boutique", image: gd2 },
        { title: "SSV Enterprises", image: gd3 },
        { title: "Nautica", image: gd4 },
      ],
    },
    {
      category: "Logo Designs",
      items: [
        { title: "Mabello Logo", image: lg1 },
        { title: "Akshar Enterprises", image: lg3 },
        { title: "Smart Fresh", image: lg2 },
        { title: "Mahalaxmi Logo", image: lg4 },
      ],
    },
    {
      category: "Motion Graphics",
      items: [
        { title: "Motion Animation", video: "../../video/vdo.mp4" },
        { title: "HUD Animation", video: "../../video/vdo3.mp4" },
        { title: "Showreel", video: "../../video/vdo4.mp4" },
        { title: "Motion Animation", video: "../../video/video1.mp4" },
      ],
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <section className="px-4 py-12 md:px-16  md:pt-32 pt-10 " id="portfolio">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#a61040" }}
        >
          Our Works
        </h2>
        <div className="">
          {ourWorkData.map((section) => (
            <div key={section.category} className="mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-[#950E39]">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto rounded overflow-hidden shadow-lg group"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-64 h-64 object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    ) : (
                      isClient && (
                        <video
                          src={item.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-64 h-64 object-contain"
                        />
                      )
                    )}

                    <div className="p-4 bg-[#a61040] text-white">
                      <h4 className="text-lg font-medium">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
