import React from 'react';

const CalculateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-primary/90 text-white py-4 rounded-md hover:bg-primary transition-colors"
    >
      Calculate
    </button>
  );
};

export default CalculateButton;