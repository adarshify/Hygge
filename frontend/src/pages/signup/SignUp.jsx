import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-60 lg:w-96 md:w-80 mx-auto'>
      <div className="w-full  p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-opacity-50">
      <h1 className="text-3xl font-semibold text-center text-gray-500">
      Login
      <span className=" text-[#f8f7f8]"> HYGGE</span>
    </h1>
    <form >
      <div>
        <label className=" label p-2">
          <span className=" text-[#f8f7f8] label-text font-bold ">Full Name</span>
        </label>
        <input type="text" placeholder="Enter Your Name" className="w-full input input-bordered h-10" />
      </div>

      <div>
        <label className=" label p-2">
          <span className=" text-[#f8f7f8] label-text font-bold ">Username</span>
        </label>
        <input type="text" placeholder="Enter Your Username" className="w-full input input-bordered h-10" />
      </div>


      <div>
        <label className="label">
          <span className="text-[#f8f7f8] label-text font-bold ">Password</span>
        </label>
        
        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
        


      </div>
      
      <div>
        <label className="label">
          <span className="text-[#f8f7f8] label-text font-bold ">Confirm Password</span>
        </label>


        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
       
        

      </div>
       <GenderCheckbox />

       <a href="#" className="text-sm text-[#f8f7f8] font-bold mt-2 inline-block">{"Don't"} have an account</a>


      <div>
          <button className="btn btn-block btn-sm mt-5 text-[#f8f7f8] font-bolf">Login</button>
        </div>

    </form>

      </div>

    </div>
  )
}

export default SignUp