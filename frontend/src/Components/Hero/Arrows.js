import React from 'react';

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div id="arrows" className="absolute inset-0 flex justify-between items-center px-4 lg:px-8 z-20">
      <button
        className="arrow prev bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition duration-300"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#x2039;
      </button>

      <button
        className="arrow next bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition duration-300"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#x203A;
      </button>
    </div>
  );
};

export default Arrows;
