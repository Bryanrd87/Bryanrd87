import React from "react";
import profilePic from "../assets/profile-pic.jpg";

const Photo = () => {
  return (
    <div className="w-full md:w-1/4 p-4 flex justify-center items-center">
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-full shadow-lg w-48 h-48 object-cover"
      />
    </div>
  );
};

export default Photo;
