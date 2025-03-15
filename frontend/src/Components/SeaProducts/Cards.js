import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = [
  {
    name: 'Longustique',
    urls: '/images/p1.jpg',
    description:
      'We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations.',
  },
  {
    name: 'Dorade',
    urls: '/images/p2.jpg',
    description:
      'We directly import fresh seafood from farmers located in various countries, ensuring quality and freshness.',
  },
  {
    name: 'Dorade Royale',
    urls: '/images/p3.jpg',
    description:
      'Our products exceed expectations, thanks to our dedication to quality and freshness in every shipment.',
  },
  {
    name: 'Octopus',
    urls: '/images/p4.jpg',
    description:
      'Fresh seafood sourced directly from trusted farmers across the globe, delivered to your door.',
  },
  {
    name: 'Diplodus Sargus',
    urls: '/images/p5.jpg',
    description:
      'High-quality seafood products, tailored to meet the demands of an international market.',
  },
  {
    name: 'Rouget Barbet',
    urls: '/images/p6.jpg',
    description:
      'Enjoy the finest seafood, carefully selected and shipped with excellence in mind.',
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto py-16 px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Product.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="rounded-t-lg overflow-hidden">
              <img
                src={product.urls}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-center space-x-4">
                <Link to="tel:+1234567890" className="text-green-800 hover:text-orange-500">
                  <FaPhone className="text-2xl" />
                </Link>
                <Link to="mailto:example@example.com" className="text-green-800 hover:text-orange-500">
                  <FaEnvelope className="text-2xl" />
                </Link>
                <Link to="https://wa.me/1234567890" className="text-green-800 hover:text-orange-500">
                  <AiOutlineWhatsApp className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
