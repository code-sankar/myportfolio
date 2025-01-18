import React from "react";
import { BiCodeAlt, BiPalette } from "react-icons/bi";
import { BiBulb } from "react-icons/bi";
function Footer() {
  return (
    <footer className="bg-[var(--black-primary)] text-[var(--white-primary)] py-4 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <BiBulb size={24} className="animate-pulse" />
            </li>
            <li>
              <BiCodeAlt size={24} className="animate-spin" />
            </li>
            <li>
              <BiPalette size={24} className="animate-bounce" />
            </li>
          </ul>
        </div>
        <p className="text-center text-[var(--white-primary)] mt-2">
          Unleash your imagination. Create something new. Bring your ideas to
          life.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--white-primary)] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-[var(--white-primary)] opacity-50"></div>
        <div className="absolute top-0 left-0 w-1 h-1 bg-[var(--white-primary)] opacity-50"></div>
        <div className="absolute top-0 right-0 w-1 h-1 bg-[var(--white-primary)] opacity-50"></div>
      </div>
    </footer>
  );
}

export default Footer;
