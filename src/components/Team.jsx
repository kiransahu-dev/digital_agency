import React from "react";

// 👉 import your images here
// import img1 from "../assets/team/kuldeep.HEIC";
import img2 from "../assets/team/Rashmita.png";
import img3 from "../assets/team/Rohini.jpeg";
import img4 from "../assets/team/Samanwita.jpeg";
import img5 from "../assets/team/Sibani.jpeg";
import img6 from "../assets/team/Swayam.jpeg";

const teamData = [
  {
    name: "Your Name",
    role: "Role here",
    image: img2,
    color: "bg-pink-200",
  },
  {
    name: "Your Name",
    role: "Role here",
    image: img2,
    color: "bg-gray-200",
  },
  {
    name: "Your Name",
    role: "Role here",
    image: img3,
    color: "bg-yellow-300",
  },
  {
    name: "Your Name",
    role: "Role here",
    image: img4,
    color: "bg-green-200",
  },
  {
    name: "Your Name",
    role: "Role here",
    image: img5,
    color: "bg-blue-200",
  },
  {
    name: "Your Name",
    role: "Role here",
    image: img6,
    color: "bg-blue-200",
  },
];

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6" id="team">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-[#a61040] mb-12">
        Our Team
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-end gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`w-40 h-95 rounded-full overflow-hidden flex flex-col justify-between items-center text-center shadow-lg ${member.color} hover:scale-105 transition duration-300`}
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[65%] object-cover"
            />

            {/* Info */}
            <div className="pb-6 px-2">
              <h3 className="font-semibold text-sm">{member.name}</h3>
              <p className="text-xs text-gray-700">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
