import React from 'react'

const Arrows = ({prevSlide , nextSlide}) => {
  return (
    <div id='arrows' className='overflow-hidden'>
    <span className='prev' onClick={prevSlide}>
    &lt;
    </span>

    <span className='next' onClick={nextSlide}>
    &gt;
    </span>
      
    </div>
  )
}

export default Arrows
