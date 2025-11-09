import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Location from "./components/Location";
import "./index.css";

// Loader Component (custom designed)
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black  ">
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-orange-500 border-dashed rounded-full animate-spin p-20"></div>
        <span className="absolute inset-0 flex items-center justify-center  font-bold  text-white  text-xl ">
          Loading...❤️
        </span>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader will show for 1.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // change 1500 to 2000 for 2 sec

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Home />
      <Location />
    </div>
  );
}

export default App;
