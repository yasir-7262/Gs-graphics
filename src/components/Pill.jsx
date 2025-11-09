import React from "react";
import Marquee from "react-fast-marquee";

/**
 * GraphicDesignMarquee
 * - Smooth scrolling marquee for graphic/design tools
 * - Props (optional):
 *    speed: number (default 60)
 *    direction: "left" | "right" (default "left")
 *    pauseOnHover: boolean (default true)
 */
const tools = [
  {
    name: "Adobe Photoshop",
    svg: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
  },
  {
    name: "Adobe Illustrator",
    svg: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-2019.svg",
  },
 
  {
    name: "CorelDRAW",
    svg: "https://cdn.worldvectorlogo.com/logos/coreldraw-2019.svg",
  },
  {
    name: "Figma",
    svg: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
  },
  {
    name: "Canva",
    svg: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
  },
  {
    name: "InPage Urdu",
    svg: "", // logo hard to find CDN — will render as text chip
  },
  {
    name: "Microsoft Word",
    svg: "https://www.vectorlogo.zone/logos/microsoft_word/microsoft_word-icon.svg",
  },
  {
    name: "Microsoft Excel",
    svg: "https://www.vectorlogo.zone/logos/microsoft_excel/microsoft_excel-icon.svg",
  },
  {
    name: "Microsoft PowerPoint",
    svg: "https://www.vectorlogo.zone/logos/microsoft_powerpoint/microsoft_powerpoint-icon.svg",
  },
 

 
  {
    name: "Adobe XD",
    svg: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
  },
 
 
  {
    name: "Adobe After Effects",
    svg: "https://cdn.worldvectorlogo.com/logos/adobe-after-effects-1.svg",
  },
  {
    name: "Adobe Premiere Pro",
    svg: "https://cdn.worldvectorlogo.com/logos/adobe-premiere-cc.svg",
  },
];

const Pill = ({ name, svg }) => {
  return (
    <div
      className="mx-3 my-2 flex items-center gap-3 rounded-2xl px-4 py-2 shadow-sm border
                  bg-black backdrop-blur hover:shadow-md transition-all"
      style={{ minHeight: 48 }}
      title={name}
    >
      {svg ? (
        <img
          src={svg}
          alt={name}
          className="h-8 w-8 object-contain"
          onError={(e) => {
            // graceful fallback to text if logo fails
            e.currentTarget.style.display = "none";
          }}
          loading="lazy"
        />
      ) : null}
      <span className="text-sm sm:text-base font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

const GraphicDesignMarquee = ({
  speed = 60,
  direction = "right",
  pauseOnHover = true,
  
}) => {
  return (
    <div
      className="w-full py-4 sm:py-6 bg-black text-orange-400 border-b border-white"
  
    >
      <Marquee
        direction={direction}
        speed={speed}
        pauseOnHover={pauseOnHover}
        gradient={true}
        autoFill={true}
        gradientColor={"orange"}
        gradientWidth={50}
      >
        {tools.map((t, idx) => (
          <Pill key={idx} name={t.name} svg={t.svg} />
        ))}
      </Marquee>
    </div>
  );
};

export default GraphicDesignMarquee;
