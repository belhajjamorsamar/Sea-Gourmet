import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import imageSlider from './imageSlider';
import Arrows from './Arrows';
import Dots from './Dots';
import './Slider.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = imageSlider.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === len - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [len]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? len - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === len - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="slider-container" className="w-full overflow-hidden h-[17vh] lg:h-[60vh]">
      {/* Contenu des images */}
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />

      {/* Flèches */}
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />

      {/* Points */}
      <Dots activeIndex={activeIndex} imageSlider={imageSlider} onClick={(index) => setActiveIndex(index)} />
    </div>
  );
};

export default Slider;
