// components/Navbar.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const navLinks = ["Home", "Services", "Career", "Blogs", "About Us"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#061A3A] text-white px-6 py-4 shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
            M
          </div>
          <h1 className="text-xl font-semibold tracking-wide">MetaLogic</h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setActiveLink(link)}
              className="relative cursor-pointer hover:text-red-400 transition"
            >
              {link}
              {link === "Services" && (
                <FiChevronDown className="inline ml-1 text-sm" />
              )}
              {activeLink === link && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500"
                />
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-md text-white font-medium shadow-md"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.nav>
  );
}
