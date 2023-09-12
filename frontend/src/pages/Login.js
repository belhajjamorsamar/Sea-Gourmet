import React from 'react';

const Login = () => {
	return (
		<div className=" bg-gray-100 min-h-screen flex items-center justify-center  ">

			<div className="bg-[#c7d7f1]  p-5  flex rounded-2xl shadow-lg max-w-3xl ">



				<div className="sm:w-1/2 px-16">

					<h2 className="font-bold text-2xl text-[#031e42]">
               Login
          </h2>

					<p className="text-sm mt-4  text-[#031e42] ">If you already a member, easly log in</p>

					<form action="" className="flex flex-col gap-4">
						<input className='p-2 mt-8 rounded-xl border' type="text" name="email" placeholder="Email" />
						<input className='p-2 mt-8 rounded-xl border' type="password" name="password" placeholder="Password" />
						<button className='bg-[#031e42] rounded-xl  text-white py-2 text'  > LogIn </button>
					</form>
<div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
  <hr className='border-gray-500'></hr>
  <p className='text-center'>Or</p>
  <hr className='border-gray-500'></hr>
</div>

				</div>



				<div className=" w-1/2 sm:block hidden ">

					<img src="/images/Admin2.jpg" alt="LoginImage" className="rounded-2xl" />


				</div>


			</div>

		</div>
	);
};

export default Login;
