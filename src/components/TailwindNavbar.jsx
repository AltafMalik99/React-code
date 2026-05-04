import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "#" },
    { name: "Team", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Calendar", href: "#" },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="block hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}