// ProductBuyButton.tsx
import React from 'react';

interface ProductBuyButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const ProductBuyButton: React.FC<ProductBuyButtonProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`border-none rounded-md focus:outline-none focus:ring-0 hover:outline-none hover:ring-0 ${
        isActive ? 'bg-[#9077D2] text-white' : 'bg-white text-black'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ProductBuyButton;
