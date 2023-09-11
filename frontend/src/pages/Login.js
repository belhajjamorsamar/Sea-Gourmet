import React from 'react';

const Login = () => {
	return (
		<div className=" bg-gray-100 min-h-screen flex items-center justify-center  ">
			<div className="bg-[#c7d7f1]  p-5  flex rounded-2xl shadow-lg max-w-3xl ">
				<div className="sm:w-1/2 px-16">
					<h2 className="font-bold text-2xl">Login</h2>
					<p className="text-sm mt-4 ">If you already a member, easly log in</p>
					<form action="" className="flex flex-col gap-4">
						<input className='p-2 mt-8 rounded-xl border' type="text" name="email" placeholder="Email" />
						<input className='p-2 mt-8 rounded-xl border' type="password" name="password" placeholder="Password" />
						<button className='bg-[#A7C2E5] '>LogIn</button>
					</form>
				</div>

				<div className=" w-1/2  sm:block hidden ">
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
