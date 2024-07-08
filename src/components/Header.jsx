// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-fancy font-bold">
          RAYDEL DANIEL ABREU MACEO
        </h1>
        <p className="text-base">Tarragona, Catalonia, Spain</p>
        <p className="text-smaller">
          +34 642 85 77 87 | bryanrd87@gmail.com |{" "}
          <a href="https://linkedin.com" className="underline">
            LinkedIn
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
