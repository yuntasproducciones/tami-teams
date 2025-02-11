import React from 'react';

const RelatedProducts = ({ relatedProducts }:any) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Artículos Similares</h2>
      <div className="grid grid-cols-4 gap-4">
        {relatedProducts.map((related:any) => (
          <div key={related.id} className="text-center">
            <img 
              src={related.image}
              alt={related.name}
              className="w-full rounded-lg mb-2"
            />
            <p className="text-sm">{related.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
