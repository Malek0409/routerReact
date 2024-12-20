import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-white font-bold text-lg">
            My Logo
          </div>

          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className="hidden sm:flex sm:space-x-4">
            <NavLink to="/" className="text-white hover:text-gray-300">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white hover:text-gray-300">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-gray-300">
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 p-4">
          <li>
            <NavLink to="/" className="text-white hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-white hover:text-gray-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white hover:text-gray-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
