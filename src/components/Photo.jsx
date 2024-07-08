// src/components/Photo.jsx
import React from "react";
import profilePic from "../assets/profile-pic.jpg"; // Make sure to add a profile picture to this path

const Photo = () => {
  return (
    <div className="w-full md:w-1/4 p-4 flex-shrink-0">
      <img src={profilePic} alt="Profile" className="rounded-lg shadow-lg" />
    </div>
  );
};

export default Photo;
