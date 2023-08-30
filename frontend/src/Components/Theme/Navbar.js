import React from 'react';
import { IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons';

const Navbar = () => {
	return (
		<div>
			<nav className="p-5 bg-white-600 shadow md:flex md:items-center md:justify-between">
				<div className="flex justify-between items-center">
					<img className="h-14 text-3xl inline" src="/images/logo.svg" alt="logo" />

					<span className="text-3xl cursor-pointer mx-2 md:hidden block ">
						<IonIcon icon={menu} />
					</span>
				</div>

				<div>
					<ul
 className="md:flex md:items-center 
  z-[-1] md:z-auto md:static absolute
 bg-white  w-full left-0 md:w-auto md:py-0 py-4 
 md:pl-0 pl-7  md:opacity-100 opacity-0  top-[-400px] 
 transition-all ease-in duration-500">
						<li className="mx-3 my-6 md:my-0">
							<a
								href="/link"
								className="text-xl hover:text-green-400 duration-400">
								{' '}
								HOME
							</a>
						</li>
						<li className="mx-4 my-6 md:my-0">
							<a
								href="/link"
								className="text-xl hover:text-green-400 duration-400">
								{' '}
								PRODUCTS
							</a>
						</li>
						<li className="mx-4 my-6 md:my-0">
							<a
								href="/link"
								className="text-xl hover:text-green-400 duration-400">
								A PROPOS
							</a>
						</li>
						<li className="mx-4 my-6 md:my-0">
							<a
								href="/link"
								className="text-xl hover:text-green-400 duration-400">
								{' '}
								ABOUT US
							</a>
						</li>
						<li className="mx-4 my-6 md:my-0">
							<a
								href="Home"
								className="text-xl hover:text-green-400 duration-400">
								{' '}
								CONTACT US
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};



function Menu(e){
    e.name === 'menu' ? e.name="close" : e.name="menu"
}

export default Navbar;
