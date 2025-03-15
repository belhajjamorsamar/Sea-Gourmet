import React from 'react';
import Slider from '../Components/Hero/Slider';
import Cards from '../Components/SeaProducts/Cards';
import { Link } from 'react-router-dom';

const Card = [
  { name: 'Sea Food', urls: '/images/seafood.jpg' },
  { name: 'Vegetables', urls: '/images/vetbls.jpg' },
  { name: 'Fruits', urls: '/images/fruit.jpeg' },
];

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="relative pt-20 w-full">
        <div className="bg-green-800 w-full h-2"></div>
        <Slider />
        <div className="bg-green-800 w-full h-2"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-8 md:px-16 lg:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Card.map((product, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="overflow-hidden rounded-xl relative group">
                <img
                  src={product.urls}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <Link
                  to="./product"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <h5 className="text-2xl md:text-3xl font-medium text-white text-center">
                    {product.name}
                  </h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Cards Section */}
      <section className="py-16 px-8 md:px-16 lg:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      
        </h2>
        <Cards />
      </section>
    </div>
  );
};

export default Home;
