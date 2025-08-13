import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LuLogOut } from "react-icons/lu";
import { toast } from 'react-toastify';
import { signOutStart, signOutSuccess } from '../redux/slice/createSlice';
const Navbar = () => {
    const {currentUser} = useSelector((state)=> state.user);
    const dispatch = useDispatch();

   const handleSignout =async()=>{
    try {
      dispatch(signOutStart())
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signout`,{
        method:"GET"
      });

      const data = await res.json();
      if(data.success === true){
          dispatch(signOutSuccess());
          toast.success(data.message);
      }
    } catch (error) {
      console.log(error)
    }
   }
  return (
   <nav className=' bg-slate-800 flex flex-row justify-around h-10 items-center '>
        <div className=' cursor-pointer'>
            <h2 className=' font-bold text-white text-xl'><span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>Keeper/&gt;</span></h2>
        </div>

        <ul>
            <li className=' list-none flex flex-row gap-4 text-white items-center' >
              
               {currentUser && <div className='flex flex-row items-center justify-center gap-3 border-gray-300 bg-gray-600 p-[2px] rounded-3xl pr-2'>

              <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" width={28} height={28} className=' rounded-full'/>
               <p className='text-xs truncate md:text-sm'>{currentUser?.username}</p>
               </div>}
               
            { currentUser && currentUser?
               (<button onClick={handleSignout} className=' flex flex-row  items-center justify-center bg-red-600 p-2 rounded-2xl px-3 font-semibold cursor-pointer hover:bg-red-700 text-lg'>
              <LuLogOut /> </button>)
                : (<Link to={'/sign-in'} className=' underline'>Sign In </Link>)
            }
               
            </li>
        </ul>
   </nav>
  )
}

export default Navbar