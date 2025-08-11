import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import OAuth from "../components/OAuth";
import { toast } from "react-toastify";


export default function SignUp() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({});
  const [loading, setloading] = useState(false);
 
   

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.username || !formdata.email || !formdata.password) {
      return toast.error("All fields are required");
    }
    try {
      setloading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if(data.success === false){
        setloading(false);
        
       return toast.error(data.message==='getaddrinfo ENOTFOUND ac-qqzgln6-shard-00-01.jscrtou.mongodb.net'? 'no internet connect to internet' : data.message);
      }
      setloading(false);
      toast.success('User Created Successfully');
      navigate('/sign-in');
      
      
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col  items-center m-auto gap-10 mt-10 my-6 min-h-[82vh]">
      <div className="text-white font-semibold text-3xl mt-2">
        <h1>Sign Up</h1>
     </div>

      <form
        onSubmit={handleSubmit}
        className="items-center flex flex-col gap-3"
      >
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-[90vw] h-10 px-4 outline-none border rounded-lg sm:w-[50vw] lg:w-[40vw] lowercase"
          onChange={handleChange}
        />
        <input
          type="email"
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
          className="w-[90vw] border rounded-lg sm:w-[50vw] lg:w-[40vw] focus:outline-none bg-green-700 dark:text-white"
        >
          {loading ? (
            // <Spinner className="text-sm dark:text-white" />
            "Loading..."
          ) : (
            "SignUp"
          )}
        </Button>
        {/* <OAuth /> */}


          <p>Already have an account ? <Link to={'/sign-in'} className="text-blue-700 font-semibold">SignIn</Link></p>

        {/* <div>
          {message &&    
        <Alert className="w-[90vw] border rounded-lg sm:w-[50vw] lg:w-[40vw] text-green-500 px-3 p-1">
          {message}
         </Alert>}
          {errormessage &&   
          <Alert className="w-[90vw] border rounded-lg sm:w-[50vw] lg:w-[40vw] text-red-500 px-3 p-1"> 
          {errormessage} 
          </Alert>} 
          </div> */}
      </form>

       
    </div>

  );
}