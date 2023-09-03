import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import imageSlider from './imageSlider';
import Arrows from './Arrows';
import Dots from './Dots';
import "./Slider.css"

const len = imageSlider.length - 1;

const Slider = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);

 useEffect (()=> 
 {const interval =() => setInterval(() => {setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
},5000);
return () => clearInterval(interval);
} ,[activeIndex]);
	return (
		<div id="slider-container" className='w-full overflow-hidden  h-[17vh] lg:h-[60vh] '>
			<SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />

			<Arrows
				prevSlide={() =>
					setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
				}
				nextSlide={() =>
					setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
				}
			/>

      <Dots activeIndex={activeIndex} imageSlider={imageSlider} onClick={activeIndex => setActiveIndex(activeIndex)}

      />
		</div>
	);
};

export default Slider;
