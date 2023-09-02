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

  const onSubmit = data =>console.log(data);
	return (
		<div className="xl:container mx-auto mb-32">
			<div
				className="flex justify-center bg-green-800"
				style={{
					height: '250px',
				}}>
				<h1 className="text-3xl sm:text-7xl uppercase pt-12 text-white">
					Contact
				</h1>
			</div>

			<div className=" px-4  sm:w-2/3 lg:w-1/2 mx-auto">
				<div className="rounded-lg shadow-lg bg-white -mt-24 py-0 md:py-12 px-4 md:px-6">
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
								render={({ fieled }) => (
									<FormElement
										type="text"
										label="Name"
										placeholder="Enter name here ..."
										fieldRef={fieled}
										hasError={errors.name?.type === 'required'}
									/>
								)}
							/>

							<Controller
								name="email"
								control={control}
								rules={{ required: true }}
								render={({ fieled }) => (
									<FormElement
										type="email"
										label="Email"
										placeholder="Enter Email here ..."
										fieldRef={fieled}
										hasError={errors.email?.type === 'required'}
									/>
								)}
							/>
							<Controller
								name="Phone"
								control={control}
								rules={{ required: true }}
								render={({ fieled }) => (
									<FormElement
										type="number"
										label="Phone"
										placeholder="Enter Phone number here ..."
										fieldRef={fieled}
										hasError={errors.phone?.type === 'required'}
									/>
								)}
							/>

							<Controller
								name="message"
								control={control}
								rules={{ required: true }}
								render={({ fieled }) => (
									<FormElement
										type="textarea"
										label="Message"
										placeholder="Enter message here ..."
										fieldRef={fieled}
										hasError={errors.message?.type === 'required'}
									/>
								)}
							/>
              <button type="submit" className='w-full px-6 py-3 bg-green-800 text-white  font-medium uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-800
               focus:outline-none focus:ring-0 active:bg-red-800'>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
