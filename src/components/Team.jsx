import React from "react";

// 👉 import your images here
import img1 from "../assets/team/Kuldeep Acharya_Post Production Specialist.png";
import img2 from "../assets/team/Rashmita Kumari Nayak_Junior Graphic Designer.png";
import img3 from "../assets/team/Rohini Krishna_Motion Graphic Artist.png";
import img4 from "../assets/team/Samanwita Sahu_Senior Graphic Designer.png";
import img5 from "../assets/team/T. Sibani Patra_Social Media Manager.png";
import img6 from "../assets/team/Jagadish Sahu_Director.png";
import img7 from "../assets/team/Kumar Swayam_CEO.png";

const teamData = [
  {
    name: "Kuldeep Acharya",
    role: "Post Production Specialist",
    image: img1,
    color: "bg-pink-200",
  },
  {
    name: "Rashmita Ku. Nayak",
    role: "Junior Graphic Designer",
    image: img2,
    color: "bg-gray-200",
  },
  {
    name: "Rohini Krishna",
    role: "Motion Graphic Artist",
    image: img3,
    color: "bg-yellow-300",
  },
  {
    name: "Samanwita Sahu",
    role: "Senior Graphic Designer",
    image: img4,
    color: "bg-blue-200",
  },
  {
    name: "T. Sibani Patra",
    role: "Social Media Manager",
    image: img5,
    color: "bg-green-200",
  },
  {
    name: "Jagadish Sahu",
    role: "Director",
    image: img6,
    color: "bg-blue-200",
  },
  {
    name: "Kumar Swayam",
    role: "CEO",
    image: img7,
    color: "bg-blue-200",
  },
];

const Team = () => {
  return (
    <div className="">
      <section className="max-w-7xl mx-auto py-20 px-6" id="team">
        {/* TITLE */}
        <h2 className="text-center text-4xl font-bold text-[#a61040] mb-20">
          Our Team
        </h2>

        {/* GRID */}
        <div className="flex flex-wrap justify-center gap-10">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`w-44 h-80 rounded-[100px] overflow-hidden shadow-lg flex flex-col
            ${index % 2 === 0 ? "-translate-y-6" : "translate-y-6"}
            hover:scale-105 transition duration-300`}
            >
              {/* IMAGE */}
              <div className="h-[65%] w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-top"
                />
              </div>

              {/* BOTTOM COLOR SECTION */}
              <div
                className={`h-[35%] w-full ${member.color} flex flex-col items-center justify-center px-3`}
              >
                <h3 className="font-semibold text-sm text-center">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-700 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
