import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import gd from "../assets/gd.jpg";
import logo from "../assets/Logo2.jpg";
import mabdem from "../assets/mabdem.jpg";
import video from "../assets/video1.mp4";

const Portfolio = () => {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 4000); // Delay for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto md:pt-44 pt-24 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold dark:text-red-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Journey So Far
        </motion.h2>

        {showSections && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <WorkCard
              title="Video Editing"
              description="We create compelling video content with smooth transitions and storytelling magic."
              image={mabdem}
            />
            <WorkCard
              title="Photo Editing"
              description="Enhancing visual appeal with expert color correction and retouching."
              image={logo}
            />
            <WorkCard
              title="Logo Making"
              description="Crafting memorable logos that capture your brand's identity and essence."
              image={gd}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

const WorkCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// const WorkCard2 = ({ title, description, video }) => {
//   return (
//     <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
//       <video
//         src={video}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
//           {title}
//         </h3>
//         <p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

export default Portfolio;
