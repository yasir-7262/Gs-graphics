import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import GraphicDesignMarquee from "../components/Pill";
import Contact from "../components/Contact";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <OurTeam/>
      <Portfolio />
       <GraphicDesignMarquee/>
      
      <Contact />
    </>
  );
};

export default Home;
