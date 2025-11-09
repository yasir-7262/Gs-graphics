import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "services", "portfolio", "contact"];

  return (
    <nav className="flex justify-between items-center text-white font-semibold h-16 border-b border-white px-6 md:px-16 bg-gradient-to-r from-black via-red-800 to-black fixed w-full z-50">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold"
      >
        GS Graphics <span className="text-yellow-500">& Online Services</span>🖨️
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="text-yellow-500 font-semibold cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)} 
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence >
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full text-yellow-500 bg-black  text-center space-y-4 py-6 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item} >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="block  text-yellow-500 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
