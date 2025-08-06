import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "AI Tutor", href: "/ai-tutor" },
  { id: 4, name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-indigo-600">LearnQuest</h2>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.href}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-500 hover:bg-indigo-500 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink
                to="/signup"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-500 hover:bg-green-600"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}