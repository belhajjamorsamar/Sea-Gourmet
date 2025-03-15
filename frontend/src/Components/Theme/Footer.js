import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="p-5 bg-green-800 text-gray-200">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-6 px:auto">
							<div>
								<h4 className="text-2xl pb-4">COMPANY</h4>
								<p className="text-white-500 pb-2">
									<h4>
										Bloc A, 3ème étage, bureau A1, Immeuble Henda, 10 rue de
										l'île de Rhodes,1053 les berges de LAC 2w.
									</h4>
									<br></br>
									<strong className=" pb-4">  Phone :</strong> +216 28 800 890{' '}
									<br></br>
									<strong className=" pb-4">Email :</strong>
									sea-food@mediterranean-sea-gourment.com
								</p>
							</div>
							<div className="mb-5">
								<h4 className="text-2xl pb-4">USEFULL LINKS</h4>
								<ul className="text-white-500">
									<li className=" pb-4">
										{' '}
										<span className="w-5 h-5 transform rotate-360 inline-block">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												className="w-full h-full text-red-700">
												<path d="M9 5l7 7-7 7"></path>
											</svg>
										</span>
										<Link to="/" className="hover:text-red-700">
											HOME
										</Link>
									</li>
									<li className="pb-4">
										{' '}
										<span className="w-5 h-5 transform rotate-360 inline-block">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												className="w-full h-full  text-red-700">
												<path d="M9 5l7 7-7 7"></path>
											</svg>
										</span>
										<Link to="/Products" className="hover:text-red-700">
											PRODUCTS
										</Link>
									</li>

									<li className="pb-4">
										{' '}
										<span className="w-5 h-5 transform rotate-360 inline-block">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												className="w-full h-full text-red-700">
												<path d="M9 5l7 7-7 7"></path>
											</svg>
										</span>
										<Link className="hover:text-red-700" to="/Apropos">
											ABOUT US
										</Link>
									</li>
									<li className="pb-4">
										{' '}
										<span className="w-5 h-5 transform rotate-360 inline-block">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												className="w-full h-full text-red-700">
												<path d="M9 5l7 7-7 7"></path>
											</svg>
										</span>
										<Link to="/Contact" className="hover:text-red-700">
											CONTACT US
										</Link>
									</li>
								</ul>
							</div>
							<div className="mb-4"><h4 className='text-2xl pb-4'>About our company</h4>
                            <div className='flex justify-between'>
                            <p  className='text-sm '>We are the exclusive importer and sourcing partner for many commodities such as fast moving consumer goods, petroleum, fresh vegetables and fruits, food and beverages, fresh seafood and all consumer products.</p>
                            <img className="h-12 md:h-14 lg:h-20 text-2xl md:text-3xl inline pl-1" src="/images/logo.svg" alt="logo" />                            </div>
							</div>
						</div>
					</div>
                    
				</div>
                
				<div className="w-full bg-white-300 text-Gray-800 px-10 shadow-lg">
					<div className="text-center">
						<div>
							Copyright@{' '}
							<strong>
								<span>MSG</span>
							</strong>{' '}
							- Mediterranean Sea Gourmet 2023
						</div>
						<div>All Rights Reserved</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
