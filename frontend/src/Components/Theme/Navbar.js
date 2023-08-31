import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons';
import { FiX } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <img className="h-12 md:h-14 text-2xl md:text-3xl inline" src="/images/logo.svg" alt="logo" />

          <div className="md:hidden">
            {open ? (
              <span onClick={toggleMenu} className="text-2xl cursor-pointer">
                <FiX size={24} />
              </span>
            ) : (
              <span onClick={toggleMenu} className="text-2xl cursor-pointer">
                <IonIcon icon={menu} name="menu" />
              </span>
            )}
          </div>
        </div>

        <div className={`md:flex ${open ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <ul className="md:flex md:items-center space-x-4 md:space-x-8">
            <li>
              <a href="/link" className="text-lg hover:text-green-400 transition duration-300">
                HOME
              </a>
            </li>
            <li>
              <a href="/link" className="text-lg hover:text-green-400 transition duration-300">
                PRODUCTS
              </a>
            </li>
            <li>
              <a href="/link" className="text-lg hover:text-green-400 transition duration-300">
                A PROPOS
              </a>
            </li>
            <li>
              <a href="/link" className="text-lg hover:text-green-400 transition duration-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="Home" className="text-lg hover:text-green-400 transition duration-300">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
