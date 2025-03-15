import React from 'react';

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={slide.urls}
            alt={slide.alt || `Slide ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
