import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.jpg";

const Photo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center"
    >
      <div className="relative group">
        {/* Glowing rings */}
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
        
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Status indicator (optional) */}
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full z-10"></div>
      </div>
    </motion.div>
  );
};

export default Photo;
