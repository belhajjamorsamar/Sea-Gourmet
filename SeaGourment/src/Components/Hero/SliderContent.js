// SliderContent.js

import React from 'react';

const SliderContent = ({ activeIndex, imageSlider }) => {
  const { url } = imageSlider[activeIndex]; // Accéder à l'URL de l'image du slider

  return (
    <div className="slider-content">
      <img src={url} alt={`Slide ${activeIndex + 1}`} className="w-full h-full object-cover" />
    </div>
  );
};

export default SliderContent;
