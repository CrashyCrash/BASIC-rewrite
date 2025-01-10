// src/pages/MagiCode.jsx
import React from 'react';

const MagiCode = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary p-8 text-center">
      <h1 className="text-4xl font-bold text-primary mb-6">MagiCode: Unlock Your Coding Potential</h1>
      <p className="text-lg mb-8">
        MagiCode simplifies coding through AI-powered tools and intuitive interfaces, making it accessible for
        everyone.
      </p>
      <ul className="space-y-6 max-w-2xl mx-auto text-left">
        <li>
          <h3 className="text-2xl font-bold text-secondary">Code Generation</h3>
          <p className="text-lg">Create clean, functional code snippets with ease.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-secondary">Error Detection</h3>
          <p className="text-lg">Identify and fix bugs faster than ever before.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-secondary">Learning Resources</h3>
          <p className="text-lg">Access tutorials and examples tailored to your coding needs.</p>
        </li>
      </ul>
    </div>
  );
};

export default MagiCode;
