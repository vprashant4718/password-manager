import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LuLogOut } from "react-icons/lu";
const Navbar = () => {
    const {currentUser} = useSelector((state)=> state.user);

   
  return (
   <nav className=' bg-slate-800 flex flex-row justify-around h-10 items-center '>
        <div>
            <h2 className=' font-bold text-white text-xl'><span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>Keeper/&gt;</span></h2>
        </div>

        <ul>
            <li className=' list-none flex flex-row gap-4 text-white items-center' >
               <Link to={'/'}> Home</Link>

               <div className='flex flex-row items-center justify-center gap-3 border-gray-300 bg-gray-600 p-[2px] rounded-3xl pr-2'>

              <img src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" width={28} height={28}/>
               <p >{currentUser?.username}</p>
               </div>
               
               <button  className=' flex flex-row  items-center justify-center bg-red-600 p-2 rounded-2xl px-3 font-semibold cursor-pointer hover:bg-red-700 text-lg'>
                {/* <p>Log</p> */}
                <LuLogOut/>

                </button>
               
            </li>
        </ul>
   </nav>
  )
}

export default Navbar