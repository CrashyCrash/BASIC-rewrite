import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  return (
    <header className="bg-card-bg p-4 shadow-md sticky top-0 z-50 border-b border-border-color">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          My App
        </h1>
        <button className="text-text-primary text-2xl md:hidden">
          ☰
        </button>
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="text-text-secondary hover:opacity-80 transition-opacity duration-300">
            Home
          </Link>
          <Link to="/about" className="text-text-secondary hover:opacity-80 transition-opacity duration-300">
            About
          </Link>
          <Link to="/contact" className="text-text-secondary hover:opacity-80 transition-opacity duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
