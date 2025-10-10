import React from "react";
import { Link } from "react-router";
import partyImg from "../assets/party.gif"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="text-2xl font-bold text-white hover:text-blue-500 transition duration-300">
            <Link to="/">HERO-APP.IO</Link>
           
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
            <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
            <a  className="hover:text-blue-400 transition duration-300">About</a>
            <a className="hover:text-blue-400 transition duration-300">Services</a>
            <a className="hover:text-blue-400 transition duration-300"><img src={partyImg} alt="" className="h-10 rounded-full mx-auto text-center" /></a>
          </div>

          <div className="flex gap-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} HERO-APP.IO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
