// import React, { useState } from 'react'
// import GenderCheckbox from './GenderCheckbox'
// import { Link } from 'react-router-dom'
// import useSignup from "../../hooks/useSignup";

// const SignUp = () => {
//   const [input,setinput] = useState ({
//     fullName:'',
//     username:'',
//     password:'',
//     confirmPassword:'',
//     gender:''
//   });

   
//   const { loading, signup } = useSignup();



//   const handleCheckboxChange = (gender) => {
//     	setinput({ ...input, gender });
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       await signup(input);
//     };
  

//   return (
//     <div className='flex flex-col items-center justify-center min-w-60 lg:w-96 md:w-80 mx-auto'>
//       <div className="w-full  p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-opacity-50">
//       <h1 className="text-3xl font-semibold text-center text-gray-500">
//       Login
//       <span className=" text-[#f8f7f8]"> HYGGE</span>
//     </h1>
//     <form onSubmit={handleSubmit} >
//       <div>
//         <label className=" label p-2">
//           <span className=" text-[#f8f7f8] label-text font-bold ">Full Name</span>
//         </label>
//         <input type="text" placeholder="Enter Your Name" className="w-full input input-bordered h-10" value={input.fullName} 
//          onChange={(e) => setinput({...input, fullName: e.target.value})}
//          />
//       </div>

//       <div>
//         <label className=" label p-2">
//           <span className=" text-[#f8f7f8] label-text font-bold ">Username</span>
//         </label>
//         <input type="text" placeholder="Enter Your Username" className="w-full input input-bordered h-10" value={input.username}
//          onChange={(e) => setinput({...input, username: e.target.value})}
        
//         />
//       </div>


//       <div>
//         <label className="label">
//           <span className="text-[#f8f7f8] label-text font-bold ">Password</span>
//         </label>
        
//         <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
//          value={input.password}
//          onChange={(e) => setinput({...input, password: e.target.value})}

//          />
        


//       </div>
      
//       <div>
//         <label className="label">
//           <span className="text-[#f8f7f8] label-text font-bold ">Confirm Password</span>
//         </label>


//         <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" value={input.confirmPassword}
//          onChange={(e) => 	// const data = await res.json();
//           if (data.error) {
//           	throw new Error(data.error);
//           }
//           localStorage.setItem("chat-user", JSON.stringify(data));
//           setAuthUser(data);setinput({...input, confirmPassword: e.target.value})}
        
//         />
       
        

//       </div>
//       <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

//        <Link to="/login" className="text-sm text-[#f8f7f8] font-bold mt-2 inline-block">{"Don't"} have an account</Link>


//       <div>
//           <button className="btn btn-block btn-sm mt-5 text-[#f8f7f8] font-bolf">Login</button>
//         </div>

//     </form>

//       </div>

//     </div>
//   )
// }

// export default SignUp;



import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";

import useSignup from "../../hooks/useSignup";


const SignUp = () => {
	const [input, setinput] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setinput({ ...input, gender });
	};

  const handleSubmit = async (e) =>{
         console.log(input);
		 e.preventDefault();
		        await signup(input);

      }

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10'
							value={input.fullName}
							onChange={(e) => setinput({ ...input, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10'
							value={input.username}
							onChange={(e) => setinput({ ...input, username: e.target.value })}
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
							value={input.password}
							onChange={(e) => setinput({ ...input, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={input.confirmPassword}
							onChange={(e) => setinput({ ...input, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
          <button className="btn btn-block btn-sm mt-5 text-[#f8f7f8] font-bolf">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
