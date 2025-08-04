import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Licenceing Exam", path: "/adc-exam" },
  { name: "Clinical Courses", path: "/endodontics-course" },
  { name: "Support Dentistry", path: "/dentist-assistant-course" },
  { name: "Reviews", path: "/highlights" },
  { name: "Videos", path: "/videos" },
  { name: "Q & A", path: "/qa" },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full flex flex-col items-center py-4 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <img src={logo} alt="Master Clinical Dentistry Logo" className="w-20 h-20 md:mr-4" />
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-500 tracking-wide text-center md:text-left mb-2 md:mb-0">
          MASTER CLINICAL DENTISTRY INSTITUTE
        </h1>
        <div className="flex items-center ml-0 md:ml-8 mt-2 md:mt-0">
          <svg className="w-7 h-7 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.46A16.88 16.88 0 018.54 3 16.88 16.88 0 013 8.54c-.28.28-.36.71-.18 1.07a17.05 17.05 0 0012.57 12.57c.36.18.79.1 1.07-.18A16.88 16.88 0 0021 15.46z" />
          </svg>
          <span className="text-lg md:text-xl font-bold text-black">+91-7889093147 <span className="font-normal">(India)</span></span>
        </div>
      </div>
      <nav className="mt-6 w-full flex justify-center flex-wrap gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`px-8 py-2 rounded-2xl font-semibold border border-gray-200 shadow-sm bg-white transition-all duration-150 text-black text-base md:text-lg ${location.pathname === link.path ? "bg-blue-100 text-blue-800" : "hover:bg-blue-50"}`}
            style={{ minWidth: 170, textAlign: "center" }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
