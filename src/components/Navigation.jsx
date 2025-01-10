import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-card-bg p-4 rounded-lg shadow-md">
      <ul className="flex space-x-6">
        <li>
          <a href="#feature" className="text-lg text-text-primary hover:text-text-secondary transition-colors duration-300">
            Feature
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-lg text-text-primary hover:text-text-secondary transition-colors duration-300">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#footer" className="text-lg text-text-primary hover:text-text-secondary transition-colors duration-300">
            Footer
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
