import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = [
  {
    name: 'Longustique',
    urls: '/images/p1.jpg',
    description:
      'We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations. As a result',
  },
  {
    name: 'Dorade',
    urls: '/images/p2.jpg',
    description:
      'We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations. As a result, we directly import fresh seafood from farmers located in various countries.',
  },
  {
    name: 'Dorade Royale',
    urls: '/images/p3.jpg',
    description:
      'We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations. As a result, we directly import fresh seafood from farmers located in various countries.',
  },
  {
    name: 'Octopus',
    urls: '/images/p4.jpg',
    description:
      'We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations. As a result, we directly import fresh seafood from farmers located in various countries.',
  },
  {
    name: 'Diplodus Sargus',
    urls: '/images/p5.jpg',
    description:
      'Diplodus Sargus We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations. As a result, we directly import fresh seafood from farmers located in various countries.',
  },
  {
    name: 'Rouget Barbet',
    urls: '/images/p6.jpg',
    description:
      'We possess extensive market knowledge that allows us to export high-quality products, surpassing our customers expectations. As a result, we directly import fresh seafood from farmers located in various countries.',
  },
];

const Cards = () => {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Product.map((product, index) => (
          <div key={index} className="rounded-xl shadow-lg">
            <div className="p-4 flex flex-col">
              <div className="rounded-xl overflow-hidden h-[180px]  w-full">
                <img className="overflow-hidden " src={product.urls} alt={product.name} />
              </div>
              <h5 className="text-2xl md:text-3xl font-medium mt-3">
                {product.name}
              </h5>
              <p className="text-slate-500 text-lg mt-3 pl-6 pb-5">
                {product.description}
              </p>
              <div className="flex items-center pl-6 pb-5">
                <Link to="tel:+1234567890" className="mr-3">
                  <FaPhone className="text-2xl text-green-800" />
                </Link>
                <Link to="mailto:example@example.com" className="mr-3">
                  <FaEnvelope className="text-3xl  text-green-800" />
                </Link>
                <Link to="https://wa.me/1234567890">
                  <AiOutlineWhatsApp className="text-4xl  text-green-800" />
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
