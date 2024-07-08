// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 sticky bottom-0 z-10">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} RAYDEL DANIEL ABREU MACEO. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
