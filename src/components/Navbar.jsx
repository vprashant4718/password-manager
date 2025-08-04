import React from 'react'

const Navbar = () => {
  return (
   <nav className=' bg-slate-800 flex flex-row justify-around h-10 items-center '>
        <div>
            <h2 className=' font-bold text-white text-xl'><span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>Keeper/&gt;</span></h2>
        </div>

        <ul>
            <li className=' list-none flex flex-row gap-4 text-white' >
                <a href='#'> Home </a>
                <a href='#'> about </a>
                <a href='#'> contact </a>
            </li>
        </ul>
   </nav>
  )
}

export default Navbar