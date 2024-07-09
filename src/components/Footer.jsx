import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2 bottom-0 z-10">
      <div className="container mx-auto text-center">
        <p className="text-smaller">
          &copy; {new Date().getFullYear()} RAYDEL DANIEL ABREU MACEO. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
