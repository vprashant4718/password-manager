import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
const Manager = () => {
    
    const [hide, setHideEye] = useState("Password");
    const [formData, setFormData] = useState({url:"", username:"", password:""});
    



    const handleHidePassword =()=>{
        const passField = document.getElementById("password"); 
        const eyeSlash = document.getElementById("faEyeSlash");
        const eyeOpen = document.getElementById("faeye");
            
        if(passField.value.length < 1){
            return;
        }

        if(hide === 'text'){

            setHideEye('Password');
            eyeSlash.classList.add('hidden');
            eyeOpen.classList.remove('hidden');

            console.log(hide)
            return
        }
            
        else if(hide === 'Password'){
            setHideEye('text');
            eyeOpen.classList.add('hidden');
                eyeSlash.classList.remove('hidden');
            return

        }
    }


    const handleOnChange=(e)=>{
        setFormData({
           ...formData,
             [e.target.id]:e.target.value
        });
    }

    const savePassword = async(e)=>{
        e.preventDefault();
        console.log(formData)
        
    }

  return (
    <>
    <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgb(94,250,101)] opacity-50 blur-[80px]"></div></div>



        <div className='flex flex-col items-center justify-around mt-16 gap-12 px-5 sm:px-28 '>


            <div className="flex flex-col items-center justify-center gap-1">
                <h2 className=' font-bold  text-3xl'><span className='text-green-700'>&lt;</span>Pass<span className='text-green-700'>Keeper/&gt;</span></h2>

                <span className='text-sm text-center'>Your Own Password Manager</span>
            </div>


            <div className='flex flex-col justify-around items-center w-full gap-5'>

                <div className='w-full '>
                    <input value={formData.url} type="text" id="url" placeholder='Enter Website URL' className='border-1 rounded-2xl border-green-700 px-4 py-1 outline-none bg-white w-full' onChange={handleOnChange}/>
                </div>

                <div className='flex flex-col justify-between w-full  items-center gap-5 sm:flex-row'>
                    <input value={formData.username} type="text" id="username" placeholder='Enter Username' className='border-1 rounded-2xl border-green-700 px-4 py-1 outline-none bg-white w-full' onChange={handleOnChange}/>
                   
                    <input value={formData.password} type={hide} id="password" placeholder='Enter Password' className='border-1 rounded-2xl border-green-700 px-4 pr-10 py-1 outline-none bg-white w-full' onChange={handleOnChange}/>
                    <span className='absolute right-0 w-12 mt-15  sm:w-36 sm:mt-0'>
                        <FaEyeSlash id="faEyeSlash" className="text-xl cursor-pointer " onClick={handleHidePassword}/>
                        <FaEye id="faeye" className="text-xl cursor-pointer hidden" onClick={handleHidePassword}/>
                    </span>

                </div>

                <div className="btn bg-green-600 p-2 px-3 rounded-3xl text-white text-sm font-semibold flex flex-row cursor-pointer"  onClick={savePassword}>
                   <IoMdAdd className="text-2xl"/>
                    <button className="cursor-pointer">Add Password</button>
                </div>
            </div>


        <div className="passwordTable w-full">
            <h2 className="text-center text-xl font-semibold mb-4">Your Passwords</h2>
            <table className="table-auto rounded-md overflow-hidden w-full">

                <thead className="bg-green-800 text-white px-2 items-center text-center text-sm ">
                    <tr >
                    <th>Website</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-green-100 text-xs px-4">
                    <tr >
                    <td className="text-center w-32">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="text-center w-32">Malcolm Lockyer</td>
                    <td className="text-center w-32">1961</td>
                    <td className="text-center w-32 flex flex-row text-lg justify-center items-center gap-2">
                        <AiTwotoneEdit className="hover:text-blue-600 cursor-pointer " />
                        <AiTwotoneDelete className="hover:text-red-600 cursor-pointer"/>
                    </td>
                    </tr>
                    
                </tbody>
                </table>
        </div>




        </div>

    </>
  )
}

export default Manager