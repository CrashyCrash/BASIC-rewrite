import React from 'react';

const Feature = () => {
  return (
    <div className="bg-card-bg p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-text-primary mb-2">This is a Feature Component</h2>
      <p className="text-lg text-text-secondary">This component is lazy loaded.</p>
    </div>
  );
};

export default Feature;
