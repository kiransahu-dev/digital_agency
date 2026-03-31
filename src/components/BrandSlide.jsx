import React from "react";
import "../index.css";

// Import all images
import brand1 from "../assets/brand/Akshara Enterprises_Png1.png";
import brand2 from "../assets/brand/aroscai logo design.png";
import brand3 from "../assets/brand/bharat-gas-logo-png_seeklogo-191552.png";
import brand4 from "../assets/brand/Darshan Park.png";
import brand5 from "../assets/brand/Dawat On Plate.png";
import brand6 from "../assets/brand/Dr Sravan Logo.png";
import brand7 from "../assets/brand/Girija Enterprises.png";
import brand8 from "../assets/brand/HSR Logo.png";
import brand9 from "../assets/brand/Logo HP.png";
import brand10 from "../assets/brand/Logo KNP.png";
import brand11 from "../assets/brand/Logo Png Moti.jpg";
import brand12 from "../assets/brand/Logo Sargam.png";
import brand13 from "../assets/brand/Logopng.png";
import brand14 from "../assets/brand/logo-white.webp";
import brand15 from "../assets/brand/Mabello Logo Png.png";
import brand16 from "../assets/brand/Mass Bunnk Cafe Inn Logo.png";
import brand17 from "../assets/brand/Pinnacle Logo.png";
import brand18 from "../assets/brand/Sri Ram Hospital.jpg";

// Correct array
const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
];

const BrandSlide = () => {
  return (
    <div className="brand-container" id="brands">
      <div className="relative w-full overflow-hidden">
        <div className="brand-track">
          {[...brands, ...brands].map((logo, index) => (
            <div key={index} className="brand-item">
              <img src={logo} alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
