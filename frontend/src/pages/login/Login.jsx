// import { Link } from "react-router-dom"



// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-52 mx-auto">
//       <div className="w-full  p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-opacity-50">
//     <h1 className="text-3xl font-semibold text-center text-gray-500">
//       SignUp
//       <span className=" text-[#f8f7f8]"> HYGGE</span>
//     </h1>

//     <form >
//       <div>
//         <label className=" label p-2">
//           <span className=" text-[#f8f7f8] label-text font-bold ">Username</span>
//         </label>
//         <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//       </div>

//       <div>
//         <label className="label">
//           <span className="text-[#f8f7f8] label-text font-bold ">Password</span>
//         </label>

//           <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//         <Link to="/signup" className="text-sm text-[#f8f7f8] font-bold mt-2 inline-block">{"Don't"} have an account</Link>

//         <div>
//           <button className="btn btn-block btn-sm mt-2 text-[#f8f7f8] font-bolf">Login</button>
//         </div>
//       </div>
//     </form>
//       </div>

//     </div>
//   )
// }

// export default Login


import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
				<h1 className='text-3xl font-semibold text-center text-slate-800'>
					Login
					<span className='text-[#eeeeae]'> Hygge</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-black mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
