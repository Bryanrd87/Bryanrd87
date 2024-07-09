import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

const MainContent = () => {
  return (
    <div className="flex-grow p-4">
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default MainContent;
