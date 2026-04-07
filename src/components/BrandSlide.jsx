import React from "react";
import "../index.css";

import brand1 from "../assets/brand/1.png";
import brand2 from "../assets/brand/2.png";
import brand3 from "../assets/brand/3.jpg";
import brand4 from "../assets/brand/4.jpg";
import brand5 from "../assets/brand/5.jpg";
import brand6 from "../assets/brand/6.png";
import brand7 from "../assets/brand/7.png";
import brand8 from "../assets/brand/8.png";
import brand9 from "../assets/brand/9.png";
import brand10 from "../assets/brand/10.png";
import brand11 from "../assets/brand/11.png";
import brand12 from "../assets/brand/12.png";
import brand13 from "../assets/brand/13.png";
import brand14 from "../assets/brand/14.png";
import brand15 from "../assets/brand/15.png";
import brand16 from "../assets/brand/16.png";
import brand17 from "../assets/brand/17.png";
import brand18 from "../assets/brand/18.png";

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

// Split into 2 rows
const topRow = brands.slice(0, 9);
const bottomRow = brands.slice(9);

const BrandSlide = () => {
  return (
    <div className="brand-container" id="brands">
      {/* TOP ROW → RIGHT */}
      <div className="brand-row">
        <div className="brand-track right">
          {[...topRow, ...topRow].map((logo, index) => (
            <div key={index} className="brand-item">
              <img src={logo} alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW → LEFT */}
      <div className="brand-row">
        <div className="brand-track left">
          {[...bottomRow, ...bottomRow].map((logo, index) => (
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
