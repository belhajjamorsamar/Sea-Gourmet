import React from 'react'

const SliderContent = ({activeIndex, imageSlider }) => {
  return (
    <section>
    {imageSlider.map((slide,index) =>(

        <div key={index} className={index === activeIndex ? "slides active" : "inactive" }>

        <img className='Slide-image'  src={slide.urls} alt=""/>

      
      </div>

    ))}
   
    </section>
  )
}

export default SliderContent
