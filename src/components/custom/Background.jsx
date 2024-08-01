import "@/css/background.css";
import React from "react";

const Background = () => {
  return (
    <>
      <div className="bg fixed min-h-screen"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </>
  );
};

export default Background;
