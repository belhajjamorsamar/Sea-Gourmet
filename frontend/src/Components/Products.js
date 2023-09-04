import React from 'react'
import Cards from './SeaProducts/Cards'

const Products = () => {
  return (
  
    <div className="bg-gray-100 min-h-screen p-8 pt-20">
			<div className="xl:container mx-auto mb-8">
				<div className="bg-green-800 relative py-16 ">
					<div className="absolute inset-0 flex items-center justify-center">
						<h1 className="text-4xl sm:text-7xl text-white font-serif">
							Products / SEA FOOD
						</h1>
					</div>

				</div>
        </div>
       <div className='py-10 px-40'><Cards/></div>
        </div>
    
  )
}

export default Products
