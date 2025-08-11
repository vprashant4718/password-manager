import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  {useDispatch, useSelector} from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '../redux/slice/createSlice';
// import OAuth from '../components/OAuth';
import { toast } from "react-toastify";


export default function SignIn() {
  const {loading, error:errormes}= useSelector((state => state.user));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({}); 


  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formdata.email || !formdata.password) {

       dispatch(signInFailure("All fields are required"));
       toast.error("All fields are required")
       return;
    }
    try {
      dispatch(signInStart());

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/sign-in`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if(data.success === false){
          dispatch(signInFailure(data.message==='getaddrinfo ENOTFOUND ac-qqzgln6-shard-00-01.jscrtou.mongodb.net'? 'no internet connect to internet' : data.message));
          toast.error(data.message==='getaddrinfo ENOTFOUND ac-qqzgln6-shard-00-01.jscrtou.mongodb.net'? "no internet connect to internet" : data.message);
          return;
        }
      toast.success("Sign in success")
      dispatch(signInSuccess(data));
      navigate('/');
      
    } catch (error) {
        dispatch(signInFailure(error.message));
        toast.error(error.message)
        return;
    }
  };
  return (
    <div className="flex flex-col  items-center m-auto gap-10 my-6 mt-10 min-h-[82vh]">
     <div className="text-white font-semibold text-3xl ">
        <h1>Sign In</h1>
     </div>

      <form
        onSubmit={handleSubmit}
        className="items-center flex flex-col gap-3"
      >
         <input
          type="text"
          id="email"
          placeholder="Email"
          className="w-[90vw] h-10 px-4 outline-none border rounded-lg sm:w-[50vw] lg:w-[40vw] lowercase"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-[90vw] h-10 px-4 outline-none border rounded-lg sm:w-[50vw] lg:w-[40vw] lowercase"
          onChange={handleChange}
        />
        <Button disabled={loading}
          type="submit"
          
          className="w-[90vw] border rounded-lg sm:w-[50vw] lg:w-[40vw] focus:outline-none bg-green-700 font-semibold"
        >
          {loading ? (
            "Loading..."
          ) : (
            "SignIn"
          )}
        </Button>

        {/* <OAuth/> */}
    <p>Don't have account ? <Link to={'/signup'} className="text-blue-700 font-semibold">SignUp</Link></p>

        {/* <div className="flex flex-col gap-3">
          {message &&    
        <Alert className="w-[90vw] border rounded-lg sm:w-[50vw] lg:w-[40vw] text-green-500 px-3 p-1" > 
          {message}
         </Alert>}
          {errormes &&   
          <Alert className="w-[90vw] border rounded-lg sm:w-[50vw] lg:w-[40vw] text-red-500 px-3 p-1" > 
          {errormes} 
          </Alert>} 
          </div> */}
      </form>

       
    </div>

  );
}
