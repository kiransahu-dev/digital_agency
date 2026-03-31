import React from "react";

// 👉 import your images here
// import img1 from "../assets/team/kuldeep.HEIC";
import img2 from "../assets/team/Rashmita.png";
import img3 from "../assets/team/Rohini.jpeg";
import img4 from "../assets/team/Samanwita.jpeg";
import img5 from "../assets/team/Sibani.jpeg";
import img6 from "../assets/team/swayam.jpeg";

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
    <div className="">
      <section className="max-w-6xl mx-auto py-16 px-6" id="team">
        <h2 className="text-center text-4xl font-bold text-[#a61040] mb-16">
          Our Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`
              w-44 h-100
              rounded-full overflow-hidden
              flex flex-col justify-between items-center text-center
              shadow-lg ${member.color}
              ${index % 2 === 0 ? "-translate-y-6" : "translate-y-6"} 
            `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[65%] object-cover"
              />

              <div className="pb-6 px-3">
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
