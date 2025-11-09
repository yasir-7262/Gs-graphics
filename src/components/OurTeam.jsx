import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, img: "profile.jpeg", role: "CEO", name: "Mudassar Ali", textColor: "text-yellow-500" },
  { id: 2, img: "profile.jpg", role: "Web Developer", name: "Yasir Abbas", textColor: "text-yellow-500" },
  { id: 3, img: "awais.jpg", role: "Senior Designer", name: "Awais Shafique", textColor: "text-yellow-500" },
  { id: 4, img: "ahmed.jpg", role: "Advisor", name: "Ahmed Qayyum", textColor: "text-yellow-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const OurTeam = () => {
  const ceo = teamMembers.find((m) => m.role === "CEO");
  const others = teamMembers.filter((m) => m.role !== "CEO");

  return (
    <div className="bg-gradient-to-r from-black via-red-800 to-black border-b border-white p-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Our <span className="text-yellow-500"> Team</span>
      </h1>

      {/* CEO Section */}
      {ceo && (
        <motion.div
          className="flex justify-center mb-12"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-around items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            whileHover={{ scale: 1.08, rotate: 1 }}
          >
            <motion.img
              className="w-32 h-36 mb-4 shadow-2xl shadow-black object-cover rounded-lg"
              src={ceo.img}
              alt={ceo.role}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <p className="font-bold text-center text-white">{ceo.name}</p>
            <p className={`font-bold text-center ${ceo.textColor}`}>{ceo.role}</p>
          </motion.div>
        </motion.div>
      )}

      {/* Other Members */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {others.map((member) => (
          <motion.div
            key={member.id}
            className="flex flex-col justify-around items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <motion.img
              className="w-28 h-32 mb-4 shadow-2xl shadow-black object-cover rounded"
              src={member.img}
              alt={member.role}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <p className="font-bold text-center text-white">{member.name}</p>
            <p className={`font-bold text-center ${member.textColor}`}>{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;
