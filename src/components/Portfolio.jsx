import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import gd from "../assets/gd.jpg";
import logo from "../assets/Logo2.jpg";
import mabdem from "../assets/mabdem.jpg";
// import video from "../../video";
// import video1 from "../../public/video/video1.mp4";

const Portfolio = () => {
  const ourWorkData = [
    {
      category: "Graphic Design",
      items: [
        { title: "Brochure Design", image: mabdem },
        { title: "Perfume Banner", image: gd },
      ],
    },
    {
      category: "Logo Design",
      items: [
        { title: "Mahalaxmi Logo", image: "/Logo2.jpg" },
        { title: "Mabello Logo", image: "/Mabello Logo Final.jpg" },
      ],
    },
    {
      category: "Video Editing",
      items: [
        { title: "Showreel", video: "../../video/vdo.mp4" },
        { title: "Brand Video", video: "../../video/video1.mp4" },
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
          Our Work
        </h2>

        {ourWorkData.map((section) => (
          <div key={section.category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{section.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded overflow-hidden shadow-lg group"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  ) : (
                    isClient && (
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-64 object-cover"
                      />
                    )
                  )}

                  <div className="p-4 bg-white">
                    <h4 className="text-lg font-medium">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Portfolio;
