import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-[#1a2a3a]
mx-auto  py-8  
 text-white/90 border-t border-gray-700 
  pt-4 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold">James Ndungu</h1>

      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/james-ndungu-b406ab248/"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/james_expo4?igsh=MWI2aGExNms3cjgxdg== "
          className="hover:text-gray-300"
        >
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/Expo-67" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
