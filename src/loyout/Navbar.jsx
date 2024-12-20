import { useState } from "react";
import { NavLink } from "react-router";
import { AlignJustify } from "lucide-react";
import { CircleX } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

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
              {isOpen ? <CircleX /> : <AlignJustify />}
            </button>
          </div>

          <div className="hidden sm:flex sm:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-white hover:text-gray-300"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 p-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="text-white hover:text-gray-300"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
