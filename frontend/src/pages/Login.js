import React from 'react';
import {  } from 'react-icons/fa';

const Login = () => {
	return (
		<div className=" bg-gray-100 min-h-screen flex items-center justify-center  ">
			<div className="bg-[#dbe7fa]  p-5  flex rounded-2xl shadow-lg max-w-3xl items-center ">
				<div className="md:w-1/2 px-16">
					<h2 className="font-bold text-2xl text-[#031e42]">Login</h2>

					<p className="text-sm mt-4 text-[#031e42] ">
						If you already a member, easly log in
					</p>

					<form action="" className="flex flex-col gap-4">
						<input
							className=" p-2 mt-8 rounded-xl border"
							type="text"
							name="email"
							placeholder="Email"
						/>

						<div className="relative">
							<input
								className="p-2  rounded-xl border w-full"
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>

						<button className="bg-[#031e42] rounded-xl  text-white py-2 text hover:scale-105 duration-300 ">
							{' '}
							Login{' '}
						</button>
					</form>

					<div className="mt-10 grid grid-cols-3 items-center text-gray-500">
						<hr className="border-gray-500"></hr>
						<p className="text-center text-sm">Or</p>
						<hr className="border-gray-500"></hr>
					</div>

					<button className="bg-white border py-2  w-full  rounded-xl mt-5 ">
						Login with google
					</button>

					<p className="mt-10 text-xs border-b border-gray-500  py-6">Forget your Password ?</p>
					<div className="mt-3 text-sm flex justify-between  items-center">
						<p>Don't have an acount? </p>

						
						<button className="py-2 px-5 bg-white border rounded-xl hover:scale-105  duration-300">
							Register
						</button>
						
					</div>
				</div>

				<div className="w-1/2 md:block hidden ">
					<img
						src="/images/Admin2.jpg"
						alt="LoginImage"
						className="rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
