import React from "react";

const Copyright = () => {
  return (
    <div className="bg-gray-900 text-gray-400 text-sm pt-4 py-4 px-4 text-center ">
      <span className="text-white font-semibold text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Aries Digitals. All rights reserved.
      </span>
    </div>
  );
};

export default Copyright;
