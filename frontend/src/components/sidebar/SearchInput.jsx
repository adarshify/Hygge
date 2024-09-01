import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-box bg-[#f7f8f7] text-black min-w-[270px]' />
        <button type='submit' className='btn btn-circle bg-slate-800 text-[#f7f8ad] text-bold border-[#f7f8f7]'>
            <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput