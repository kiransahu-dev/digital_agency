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
    name: "T. Sibani Patra",
    role: "Social Media Manager",
    image: img5,
  },
  {
    name: "Kuldeep Acharya",
    role: "Post Production Specialist",
    image: img1,
  },
  {
    name: "Samanwita Sahu",
    role: "Senior Graphic Designer",
    image: img4,
  },
  {
    name: "Rashmita Ku. Nayak",
    role: "Junior Graphic Designer",
    image: img2,
  },
  {
    name: "Rohini Krishna",
    role: "Motion Graphic Artist",
    image: img3,
  },
  {
    name: "Jagadish Sahu",
    role: "Director",
    image: img6,
  },
  {
    name: "Kumar Swayam",
    role: "CEO",
    image: img7,
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
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-20">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`team-card w-44 h-80 rounded-[100px] overflow-hidden shadow-lg flex flex-col hover:scale-105 transition`}
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
              <div className="h-[35%] w-full bg-[#742E10] flex flex-col items-center justify-center px-4 overflow-hidden">
                <h3 className="font-semibold text-sm text-center text-[#F3D18D]">
                  {member.name}
                </h3>
                <p className="text-xs text-[#FAE1B8] text-center leading-tight wrap-break-word">
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
