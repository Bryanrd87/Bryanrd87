import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Photo from "./components/Photo";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 overflow-hidden selection:bg-blue-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/3 lg:w-1/4 flex flex-col gap-6">
            <Photo />
            {/* We could move contact info here or keep it in header */}
          </aside>
          <main className="grow md:w-2/3 lg:w-3/4">
            <MainContent />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
