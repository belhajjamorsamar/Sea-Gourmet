import React from 'react';
import Slider from '../Components/Hero/Slider';
import Cards from '../Components/SeaProducts/Cards';
import { Link } from 'react-router-dom';

const Card = [
	{
		name: 'SEA FOOD',
		urls: '/images/F.jpg',
	},

	{
		name: 'Vegtables',
		urls: '/images/F.jpg',
	},

	{
		name: 'Fruit',
		urls: '/images/F.jpg',
	},
];

const Home = () => {
	return (
		<div>
			<section className="pt-20">
				<div className="bg-white  shadow-lg h-6"></div>
				<div className="bg-green-800 w-full h-2"></div>
				<Slider />
				<div className="bg-green-800 w-full h-2"></div>
			</section>

			<section className="py-10 px-40">
				<div className="flex items-center justify-center min-h-screen container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Card.map((product, index) => (
							<div key={index} className="rounded-xl shadow-lg">
								<div className="p-4 flex flex-col">
									<div className="rounded-xl overflow-hidden h-[220px] w-full relative">
										<img
											className="overflow-hidden rounded-full"
											src={product.urls}
											alt={product.name}
										/>
										<Link
											to={`/your-link-here`}
											className="absolute inset-0 flex items-center justify-center bg-opacity-80">
											<h5 className="text-2xl md:text-3xl font-medium text-center">
												<span className="underline text-white  text-bold text-7xl hover:text-green-500">
													{product.name}
												</span>
											</h5>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-10 px-40">
				<Cards />
			</section>
		</div>
	);
};

export default Home;
