import React from 'react';

const ProductTabs = ({ product, selectedTab, setSelectedTab }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{product.rating}</span>
        <div className="flex text-yellow-400">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
        </div>
      </div>
      <p className="text-lg text-teal-600">{product.tagline}</p>
      <div className="border rounded-lg">
        <div className="flex border-b">
          <button 
            className={`flex-1 p-4 text-center ${selectedTab === 'details' ? 'border-b-2 border-teal-500' : ''}`}
            onClick={() => setSelectedTab('details')}
          >
            Detalles del producto
          </button>
          <button 
            className={`flex-1 p-4 text-center ${selectedTab === 'quote' ? 'border-b-2 border-teal-500' : ''}`}
            onClick={() => setSelectedTab('quote')}
          >
            Cotización
          </button>
        </div>
        <div className="p-4">
          {selectedTab === 'details' ? (
            <div className="space-y-4">
              <h3 className="font-bold">Descripción:</h3>
              <p>{product.specs.power}</p>
              <p>Capacidad de llenado: {product.specs.capacity}</p>
              <p>Anchura de película: {product.specs.width}</p>
              <p>Flujo de trabajo: {product.specs.flow}</p>
              <h3 className="font-bold mt-4">Dimensiones:</h3>
              <div className="flex gap-4 items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg"></div>
                <ul>
                  <li>Altura: {product.dimensions.height}</li>
                  <li>Longitud: {product.dimensions.length}</li>
                  <li>Ancho: {product.dimensions.width}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-teal-600">
                Solicitar Cotización
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
