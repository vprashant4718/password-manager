import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaCopy} from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux"; 
import { toast } from "react-toastify";

const Manager = () => {

    const {currentUser} = useSelector((state)=> state.user);
    const [hide, setHideEye] = useState("Password");
    const [formData, setFormData] = useState({webUrl:"", username:"", password:""});
    const [allPasswords, setAllPasswords] = useState();
    

 const fetchPasswords = async()=>{
    try {
        const res = await fetch(`/api/password/fetchAllPassword/${currentUser?._id}`,{
            method:"GET"
        });

        const data = await res.json();

        // console.log(data.message)
        // if(data.success === false){
        //     toast.error(data.message);
        // }
        
        setAllPasswords(data?.data);
        
    } catch (error) {
        console.log(error);
    }

}

useEffect(() => {
fetchPasswords();
}, [])

useEffect(() => {
  allPasswords
}, []);




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

        try{
            const res = await fetch(`/api/password/addpass/${currentUser?._id}`,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"   
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if(!res.ok){
               return toast.error(data.message);
            }

            await fetchPasswords();
            toast.success(data.message);

        }catch(error){
            console.log(error);
        }
        
    }


    const copyText = (text)=>{
      navigator.clipboard.writeText(text).then(
        toast.info("Text Copied!")
      )

    }

  return (
    <>
    <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgb(94,250,101)] opacity-50 blur-[80px]"></div></div>



        <div className='flex flex-col items-center justify-around mt-16 gap-12 px-5 sm:px-28 '>


            <div className="flex flex-col items-center justify-center gap-1">
                <h2 className=' font-bold  text-3xl'><span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>Keeper/&gt;</span></h2>

                <span className='text-sm text-center'>Your Own Password Manager</span>
            </div>


            <div className='flex flex-col justify-around items-center w-full gap-5'>

                <div className='w-full '>
                    
                    <input value={formData.webUrl} type="text" id="webUrl" placeholder='Enter Website webUrl' className='border-1 rounded-2xl border-green-600 px-4 py-1 outline-none bg-white text-black w-full' onChange={handleOnChange}/>
                </div>

                <div className='flex flex-col justify-between w-full  items-center gap-5 sm:flex-row'>
                    <input value={formData.username} type="text" id="username" placeholder='Enter Username' className='border-1 rounded-2xl border-green-700 px-4 py-1 outline-none bg-white text-black w-full' onChange={handleOnChange}/>
                   
                    <input value={formData.password} type={hide} id="password" placeholder='Enter Password' className='border-1 rounded-2xl border-green-700 px-4 pr-10 py-1 outline-none bg-white text-black w-full' onChange={handleOnChange}/>
                    <span className='absolute right-0 w-12 mt-15  sm:w-36 sm:mt-0'>
                        <FaEyeSlash id="faEyeSlash" className="text-xl cursor-pointer text-black" onClick={handleHidePassword}/>
                        <FaEye id="faeye" className="text-xl cursor-pointer hidden text-black" onClick={handleHidePassword}/>
                    </span>

                </div>

                <div className="btn bg-green-600 p-2 px-3 rounded-3xl text-white text-sm font-semibold flex flex-row cursor-pointer hover:bg-green-700"  onClick={savePassword}>
                   <IoMdAdd className="text-2xl"/>
                    <button className="cursor-pointer hover:bg-green-700">Add Password</button>
                </div>
            </div>


        <div className="passwordTable w-full h-[46vh]">
            {allPasswords && allPasswords.length > 0?<><h2 className="text-center text-xl font-semibold mb-4">Your Passwords</h2>
            <table className="table-auto rounded-md overflow-hidden w-full">

                <thead className="bg-green-600 text-white px-2 items-center text-center text-sm ">
                    <tr >
                    <th>Website</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-green-100 text-xs px-4 text-black">
                    {
                        allPasswords?.map((pass)=>(
                            <tr key={pass?._id}>
                    <td className="text-center w-32 "> 
                        <div className="flex flex-row  justify-between gap-2 px-2">
                        <span className="truncate w-28 ">{pass?.webUrl}</span>
                        <FaCopy className="text-sm cursor-pointer hover:text-lime-500" onClick={()=>copyText(pass?.webUrl)}/>
                        </div>
                    </td>
                    <td className="text-center w-32">
                        <div className="flex flex-row  justify-between gap-2 px-2">
                        <span className="truncate w-28 ">{pass?.username}</span>
                        <FaCopy className="text-sm cursor-pointer hover:text-lime-500" onClick={()=>copyText(pass?.username)}/>
                        </div>
                    </td>
                    <td className="text-center w-32">
                        <div className="flex flex-row  justify-between gap-2 px-2">
                        <span className="truncate w-28 ">{pass?.password}</span>
                        <FaCopy className="text-sm cursor-pointer hover:text-lime-500" onClick={()=>copyText(pass?.password)}/>
                        </div>
                    </td>
                    <td className="text-center w-32">
                        <div className="flex flex-row text-lg justify-center items-center gap-2">
                        <AiTwotoneEdit className="hover:text-blue-600 cursor-pointer text-xl" />
                        <AiTwotoneDelete className="hover:text-red-600 cursor-pointer text-xl"/>
                        </div>
                    </td>
                    </tr>
                        ))
                    }
                    
                </tbody>
                </table></>: <h2 className="text-center text-xl font-semibold mb-4">You have not saved any passwords yet</h2>}
        </div>




        </div>

    </>
  )
}

export default Manager