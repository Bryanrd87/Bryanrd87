// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section className="bg-white p-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-fancy font-bold mb-2">Education</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-700 text-smaller">
            University of Computer Sciences
          </p>
          <p className="text-gray-600 text-smaller">
            September 2006 - December 2011
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
