import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between 
       px-4 sm:px-8 md:px-16 gap-8 md:gap-12 py-12 md:py-0 
       bg-gradient-to-r from-black via-red-800 to-black text-white
       min-h-screen border-b border-white"
    >
      {/* Left side - Image */}
      <div className="flex justify-center w-full md:w-1/2">
       <img
  src="/profile2.jpeg"
  alt="profile"
  className="rounded-full border-4 shadow-lg shadow-amber-500
  w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover 
  grayscale hover:grayscale-0 active:grayscale-0 transition duration-300 ease-in-out"
/>

      </div>

      {/* Right side - Text */}
      <div className="text-center md:text-left w-full md:w-1/2 space-y-4 px-2">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-yellow-500">Mudassar Ali</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white max-w-md mx-auto md:mx-0 font-semibold">
          A Passionate <span className="text-yellow-500">Graphic Designer</span> Specializing in Branding, Logos & Digital Marketing.
        </p>
      </div>
    </section>
  );
};

export default Hero;
