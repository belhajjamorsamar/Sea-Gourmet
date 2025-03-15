import React from 'react';

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className="all-dots flex justify-center items-center mt-4">
      {imageSlider.map((_, index) => (
        <span
          key={index}
          className={`dot w-3 h-3 rounded-full mx-1 cursor-pointer transition-all ${
            activeIndex === index ? 'bg-green-500 scale-125' : 'bg-gray-300'
          }`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
