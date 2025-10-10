import React from 'react';
import { Github } from "lucide-react";
import logo from '../assets/logo.png'
import { NavLink,Link } from 'react-router';
const NavBar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-500 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='bg-green-500 rounded-lg items-center w-1/3 '><NavLink to="/">Home</NavLink></li>
      <li className='bg-green-400 rounded-lg items-center mt-3 mb-3 w-1/3'>
        <NavLink to="/app">Apps</NavLink>
      </li>
      <li className='bg-green-400 rounded-lg items-center w-1/2'><NavLink to="/installation">Installation</NavLink></li>
      </ul>
    </div>
    <img src={logo} alt="Logo"className='h-10'/>
    <Link to="/" className="btn btn-ghost text-xl text-[#9F62F2]">HERO-APP.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li>
        <NavLink to="/app">Apps</NavLink>
      </li>
      <li><NavLink to="/installation">Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://github.com/nosib55" className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 rounded-md text-white font-semibold"><span className='flex items-center gap-2'><Github className='bg-white text-blue-500 rounded-full ' />Contribute</span></a>
  </div>
</div>
    );
};

export default NavBar;