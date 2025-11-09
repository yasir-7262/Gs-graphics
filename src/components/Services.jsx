import React from "react";

const Services = () => {
  const services = [ { title: "3D Wallpaper", desc: "High-quality customized wallpaper printing for your room and office." },
     { title: "Panaflex", desc: "Large format panaflex printing for advertising and events." },
      { title: "Social Media Marketing", desc: "Social Media Marketing is the art of promoting brands, products, or services through platforms like Facebook, Instagram, TikTok" },
      { title: "Business Cards", desc: "Professional and creative business card designs for your brand." },
       { title: "Bill Book", desc: "Customized bill books designed and printed with your brand identity." },
        { title: "Mug Printing", desc: "Personalized mug printing for gifts and promotions." },
    { title: "Pen Printing", desc: "High-quality customized pen printing for promotions and branding." },
    
    { title: "Wedding Cards", desc: "Elegant and stylish wedding card designs to make your event special." },
   
   
   
   
   { title: "Professional Resume / CV", desc: "Build Professional CV for your Job" },
    { title: "Advertisements", desc: "Creative advertisement designs for print and digital platforms." },
    
  ];

  return (
    <section id="services" className="py-20 border-b border-white bg-gradient-to-r from-black via-red-800 to-black">
      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="hover:backdrop-blur-lg hover:bg-white/10 border border-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl underline underline-offset-8 text-yellow-500 font-semibold mb-2">{s.title}</h3>
            <p className="text-white text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
