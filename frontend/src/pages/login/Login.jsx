import { Link } from "react-router-dom"



const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-52 mx-auto">
      <div className="w-full  p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-opacity-50">
    <h1 className="text-3xl font-semibold text-center text-gray-500">
      SignUp
      <span className=" text-[#f8f7f8]"> HYGGE</span>
    </h1>

    <form >
      <div>
        <label className=" label p-2">
          <span className=" text-[#f8f7f8] label-text font-bold ">Username</span>
        </label>
        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
      </div>

      <div>
        <label className="label">
          <span className="text-[#f8f7f8] label-text font-bold ">Password</span>
        </label>

          <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
        <Link to="/signup" className="text-sm text-[#f8f7f8] font-bold mt-2 inline-block">{"Don't"} have an account</Link>

        <div>
          <button className="btn btn-block btn-sm mt-2 text-[#f8f7f8] font-bolf">Login</button>
        </div>
      </div>
    </form>
      </div>

    </div>
  )
}

export default Login