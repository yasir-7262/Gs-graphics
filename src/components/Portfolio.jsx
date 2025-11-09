import React from "react";

const Portfolio = () => {
  const achievements = [
    " 🎗️ Completed  100+  Logo  Design  Projects",
    "🎗️ Delivered  50+  Business  Card  Designs",
    "🎗️ Worked  on  30+  Wedding  Card  Projects",
    "🎗️ Designed  20+  Panaflex  &  Banners",
    "🎗️ Developed  Branding  for  15+  Companies",
    "🎗️ Created  Custom  Digital  Artworks",
  ];

  return (
    <section id="portfolio" className="py-20 border-b  bg-gradient-to-r from-black via-red-800 to-black text-white">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">Our Achievements & Projects</h2>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Side - Picture */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profile2.jpeg" 
            alt="My Work"
            className="w-80 h-80 object-cover rounded-2xl shadow-amber-500 shadow-2xl  border-4 border-gray-700"
          />
        </div>

        {/* Right Side - Achievements */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
          <ul className="space-y-4 font-bold  text-gray-300">
            {achievements.map((item, index) => (
              <li 
                key={index} 
                className="bg-transparent border border-white p-4 rounded-lg shadow transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
