import { Link,useNavigate,useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Register = () => {
    const [showPassword , setShowPassword] = useState(false)
    const [error,setError] = useState('');
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location?.state || '/'

    const {
        register,
        handleSubmit,
       
        
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const {email,password,name,photo} = data;
        console.log(email,password,name,photo);

        if(password.length<6){
          setError("Password must be 6 characters or above");
          return
        }

        if(!/^[^A-Z]*[A-Z][^A-Z]*$/.test(password)){
          setError('Must have an Uppercase letter in the password');
          return
        }
        if(!/^(?=.*[a-z]).+$/.test(password)){
          setError('Must have a Lowercase letter in the password');
          return
        }

        
        setError("")
        createUser(email,password)
        .then(result=>{
          updateUserProfile(name,photo)
          .then(()=>navigate(from))
          
        })
        return toast.success("Successfully Registered")
        
        }

      

    return (
        <div className="hero w-full md:w-1/3 mx-auto my-5">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Register - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
    </Helmet>
        <div className=" w-full flex-col lg:flex-row-reverse">
         
          <div className="card shrink-0 py-4 shadow-lg bg-base-100">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3">Register now!</h1>
            
          </div>
            <form className="card-body pb-0 font-roboto" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                  
                </label>
                <input type="text" placeholder="Enter your name" className="input input-bordered w-full" 
                {...register("name", { required: true })}
                />
                {errors.name && <span className="text-red-500 py-2">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  ">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered w-full" 
                {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500 py-2">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  ">Photo URL</span>
                </label>
                <input type="text" placeholder="Enter your photo url" className="input input-bordered w-full" 
                {...register("photo")}
                />
              </div>
              <div className="form-control">
          <label className="label">
            <span className="label-text  ">Password</span>
          </label>
          <div className="input input-bordered w-full flex items-center justify-between">
          <input 
          type={showPassword? "text" : "password"} 
          placeholder="password"
          {...register("password", { required: true })}
           />
           
          <span onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer">
            {showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
            
          </div>
          {
            error && <small className="text-red-500">{error}</small> 
          }
          {errors.password && <span className="text-red-500 py-2">This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover font-roboto">Forgot password?</a>
          </label>
        </div>
              
              <div className="form-control mt-6">
                <button className="btn bg-[#647295] w-full text-white ">Register</button>
              </div>
      
              
            </form>
              <p className="text-sm text-center dark:text-gray-600 mt-3">Already have an account?
               <Link to="/Login" className="focus:underline hover:underline text-[#647295]"> Log in here</Link>
          </p>
          </div>
        </div>
      </div>
    );
};

export default Register;