import classNames from "classnames";
import React, { useState } from "react";
import "../css/navbar.css";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";
import { Spin as Hamburger } from "hamburger-react";

function Navbar({ setMode, mode }) {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const liClass = classNames("hover:bg-[var(--nav-hover)] px-2 h-fit");

  return (
    <>
      <nav className={`${mode === "dark" ? "navbar" : ""} relative z-50`}>
        <div className="flex items-center justify-between h-[70px] md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8 text-lg text-gray-700">
          <div className="logo">
            <span className="logo-sides"> &lt;</span>
            <a className="logo-text" href="/">
              Sankar
            </a>
            <span className="logo-sides">/&gt;</span>
          </div>

          <button
            onClick={() => setToggleNav(!toggleNav)}
            className="md:hidden block cursor-pointer"
          >
            <Hamburger color="var(--white-primary)" />
          </button>

          <div
            className={`w-full md:flex md:items-center md:w-auto z-50 ${
              toggleNav
                ? "absolute top-16 -left-2 md:mx-auto max-w-7xl px-4 sm:px-10 pb-5 bg-[#f0f2f5]"
                : "hidden"
            } ${toggleNav && mode === "dark" ? "sidebar" : ""}`}
            id="menu"
          >
            <ul
              className={`text-base text-gray-700 md:flex md:items-center md:justify-between md:pt-0`}
            >
              <li className={`${liClass} relative group`}>
                <a
                  className="block md:p-4 py-2 text-[17px] text-[var(--white-primary)] font-bold"
                  href="#skills"
                >
                  Skills
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className={`${liClass} relative group`}>
                <a
                  className="block md:p-4 py-2 text-[17px] text-[var(--white-primary)] font-bold"
                  href="#projects"
                >
                  Projects
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className={`${liClass} relative group`}>
                <a
                  className="block md:p-4 py-2 text-[17px] text-[var(--white-primary)] font-bold"
                  href="#education"
                >
                  Education
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className={`${liClass} relative group`}>
                <a
                  className="block md:p-4 py-2 text-[17px] text-[var(--white-primary)] font-bold"
                  href="#experience"
                >
                  Experience
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className={`${liClass} relative group`}>
                <a
                  className="block md:p-4 py-2 text-[17px] text-[var(--white-primary)] font-bold"
                  href="#contact"
                >
                  Contact
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <span></span>
              <button className="pl-3 mt-3 md:mt-0" onClick={handleToggleMode}>
                {mode === "dark" ? (
                  <Moon className="swap-on fill-current w-[25px] h-[25px] text-[var(--white-primary)]" />
                ) : (
                  <Sun className="swap-off fill-current w-[25px] h-[25px]" />
                )}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
