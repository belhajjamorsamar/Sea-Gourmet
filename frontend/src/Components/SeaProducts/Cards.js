import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importez le composant Link

const Cards = () => {
	return (
		<div className="flex items-center justify-center min-h-screen container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="rounded-xl shadow-lg">
					<div className="p-5 flex">
						<div className="rounded-xl overflow-hidden">
							<img src="/images/p1.jpg" alt="P1" />
						</div>
                        
					</div>
					
					<p
						className="text-slate-500 text-lg mt-3 pl-6 pb-5 Test-wrap
">
						We possess extensive market knowledge that allows us to export
						high-quality products, surpassing our customers' expectations. As a
						result, we directly import fresh seafood from farmers located in
						various countries.
					</p>

					{/* Ajoutez des liens avec les composants Link */}
					<div className="flex items-center pl-6 pb-5">
						<Link to="tel:+1234567890" className="mr-3">
							{' '}
							{/* Lien vers le téléphone */}
							<FaPhone className="text-2xl text-green-800" />
						</Link>
						<Link to="mailto:example@example.com" className="mr-3">
							{' '}
							{/* Lien vers l'email */}
							<FaEnvelope className="text-3xl  text-green-800" />
						</Link>
						<Link to="https://wa.me/1234567890">
							{' '}
							{/* Lien vers WhatsApp */}
							<AiOutlineWhatsApp className="text-4xl  text-green-800" />
						</Link>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="rounded-xl shadow-lg">
					<div className="p-5 flex col">
						<div className="rounded-xl overflow-hidden">
							<img src="/images/p2.jpg" alt="P1" />
						</div>
					</div>
					<h5 className="text-2xl md:text-3xl font-medium mt-3 pl-6">Dorade</h5>
					<p
						className="text-slate-500 text-lg mt-3 pl-6 pb-5 Test-wrap
">
						We possess extensive market knowledge that allows us to export
						high-quality products, surpassing our customers' expectations. As a
						result, we directly import fresh seafood from farmers located in
						various countries.
					</p>

					{/* Ajoutez des liens avec les composants Link */}
					<div className="flex items-center pl-6 pb-5">
						<Link to="tel:+1234567890" className="mr-3 ">
							{' '}
							{/* Lien vers le téléphone */}
							<FaPhone className="text-2xl text-green-800" />
						</Link>
						<Link to="mailto:example@example.com" className="mr-3">
							{' '}
							{/* Lien vers l'email */}
							<FaEnvelope className="text-3xl  text-green-800" />
						</Link>
						<Link to="https://wa.me/1234567890">
							{' '}
							{/* Lien vers WhatsApp */}
							<AiOutlineWhatsApp className="text-4xl  text-green-800" />
						</Link>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-40 gap-8">
				<div className="rounded-xl shadow-lg">
					<div className="p-5 flex col">
						<div className="rounded-xl overflow-hidden">
							<img src="/images/p3.jpg" alt="P2" />
						</div>
					</div>
					<h5 className="text-2xl md:text-3xl font-medium mt-3 pl-6">
						Dorade Royale
					</h5>
					<p
						className="text-slate-500 text-lg mt-3 pl-6 pb-5 Test-wrap
">
						We possess extensive market knowledge that allows us to export
						high-quality products, surpassing our customers' expectations. As a
						result, we directly import fresh seafood from farmers located in
						various countries.
					</p>

					{/* Ajoutez des liens avec les composants Link */}
					<div className="flex items-center pl-6 pb-5">
						<Link to="tel:+1234567890" className="mr-3">
							{' '}
							{/* Lien vers le téléphone */}
							<FaPhone className="text-2xl text-green-800" />
						</Link>
						<Link to="mailto:example@example.com" className="mr-3">
							{' '}
							{/* Lien vers l'email */}
							<FaEnvelope className="text-3xl  text-green-800" />
						</Link>
						<Link to="https://wa.me/1234567890">
							{' '}
							{/* Lien vers WhatsApp */}
							<AiOutlineWhatsApp className="text-4xl  text-green-800" />
						</Link>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div className="rounded-xl shadow-lg">
					<div className="p-5 flex col">
						<div className="rounded-xl overflow-hidden">
							<img src="/images/p4.jpg" alt="P4" />
						</div>
					</div>
					<h5 className="text-2xl md:text-3xl font-medium mt-3 pl-6">
						Dorade Royale
					</h5>
					<p
						className="text-slate-500 text-lg mt-3 pl-6 pb-5 Test-wrap
">
						We possess extensive market knowledge that allows us to export
						high-quality products, surpassing our customers' expectations. As a
						result, we directly import fresh seafood from farmers located in
						various countries.
					</p>

					{/* Ajoutez des liens avec les composants Link */}
					<div className="flex items-center pl-6 pb-5">
						<Link to="tel:+1234567890" className="mr-3 ">
							{' '}
							{/* Lien vers le téléphone */}
							<FaPhone className="text-2xl text-green-800" />
						</Link>
						<Link to="mailto:example@example.com" className="mr-3">
							{' '}
							{/* Lien vers l'email */}
							<FaEnvelope className="text-3xl  text-green-800" />
						</Link>
						<Link to="https://wa.me/1234567890">
							{' '}
							{/* Lien vers WhatsApp */}
							<AiOutlineWhatsApp className="text-4xl  text-green-800" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
