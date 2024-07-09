import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Photo from "./components/Photo";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row">
        <Photo />
        <main className="flex-grow overflow-y-auto">
          <MainContent />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
