import React from 'react';

import Slider from '../Components/Hero/Slider'
import Cards from '../Components/SeaProducts/Cards'

const Cards= [
  { 
    urls:""
  },
  {};
]



const Home = () => {
  return (
    <div>
    <section className='pt-20'>
    <div className='bg-white  shadow-lg h-6'></div>
    <div className='bg-green-800 w-full h-2'></div>
    <Slider/>
    <div className='bg-green-800 w-full h-2'></div>
    </section>


<section>

</section>



    <section className='py-10 px-40'>
    <Cards/>
    </section>
    </div>
  )
}

export default Home
