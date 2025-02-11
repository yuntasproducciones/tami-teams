import React from 'react';

const HeroSection = ({ product }) => {
  return (
    <div className="bg-teal-500 text-white rounded-lg p-8 mb-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-xl mb-6">{product.subtitle}</p>
      <button className="bg-white text-teal-500 px-6 py-2 rounded-lg font-bold hover:bg-teal-50">
        ¡COTÍZALO!
      </button>
    </div>
  );
};

export default HeroSection;
