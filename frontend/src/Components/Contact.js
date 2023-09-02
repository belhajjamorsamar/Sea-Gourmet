import React from 'react';

import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Iconinfo from './Iconinfo';
import IconEmail from '../Icons/IconEmail';
import IconPhone from '../Icons/IconPhone';
import FormElement from './FormElement';

const Contact = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = (data) => console.log(data);

	return (
		<div className="bg-gray-100 min-h-screen p-8  ">
			<div className="xl:container mx-auto mb-8">
				<div className="bg-green-800 relative py-16">
					<div className="absolute inset-0 flex items-center justify-center">
						<h1 className="text-4xl sm:text-7xl text-white font-serif">
							Contact Us
						</h1>
					</div>
				</div>

				<div className="mt-14 md:px-8 lg:w-1/2 xl:w-1/2 mx-auto ">
					<div className="rounded-lg shadow-lg bg-white -mt-24 py-12 px-6">
						<div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
							<Iconinfo
								icon={<IconEmail />}
								text="sea-food@mediterranean-sea-gourment.com"
							/>
							<Iconinfo icon={<IconPhone />} text="+216 28 800 890 " />
						</div>
						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Controller
									name="name"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<FormElement
											type="text"
											label="Name"
											placeholder="Enter name here ..."
											fieldRef={field.ref}
											hasError={errors.name?.type === 'required'}
										/>
									)}
								/>

								<Controller
									name="email"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<FormElement
											type="email"
											label="Email"
											placeholder="Enter Email here ..."
											fieldRef={field.ref}
											hasError={errors.email?.type === 'required'}
										/>
									)}
								/>
								<Controller
									name="phone"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<FormElement
											type="number"
											label="Phone"
											placeholder="Enter Phone number here ..."
											fieldRef={field.ref}
											hasError={errors.phone?.type === 'required'}
										/>
									)}
								/>

								<Controller
									name="message"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<FormElement
											type="textarea"
											label="Message"
											placeholder="Enter message here ..."
											fieldRef={field.ref}
											hasError={errors.message?.type === 'required'}
										/>
									)}
								/>
								<button
									type="submit"
									className="w-full px-6 py-3 bg-green-800 text-white font-medium uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:outline-none focus:ring-0 active:bg-red-800">
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
