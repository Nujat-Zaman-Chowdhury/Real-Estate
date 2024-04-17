import { Link,useNavigate,useLocation} from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const Login = () => {
  const [error,setError] = useState('');
    const [showPassword , setShowPassword] = useState(false)
    const {signInUser,googleLogin,githubLogin}= useContext(AuthContext)
    // const [loginError,setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
    // console.log(from);
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const {email,password} = data
        // console.log(email,password);

        
        signInUser(email,password)
        .then(result=>{
            if(result.user){
              navigate(from)
            }
            console.log(result.user)
            return toast.success("Successfully Logged in")
        })

        .catch(error=>{
           return setError(error.message.split("/")[1].replace(/[()]/g,''))
          
        })
        
      }

      const handleSocialLogin = (socialProvider)=>{
        socialProvider()
        .then(result=>{
          if(result.user){
            navigate(from)
          }
          return toast.success("Successfully logged in")
          
        })
        .catch(error=>{
          console.log(error)
        })
      }

    

    return (
      
        <div className="hero w-full md:w-1/3 mx-auto my-5">
          <HelmetProvider>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Login - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
          </Helmet>
          </HelmetProvider>
  <div className=" w-full flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 py-4 shadow-lg bg-base-100">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-3 ">Login now!</h1>
    </div>
      <form className="card-body pb-0" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"
          {...register("email", { required: true })}
           className="input input-bordered w-full"  />
           {errors.email && <span className="text-red-500 py-2">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="input input-bordered w-full flex items-center justify-between">
          <input 
          type={showPassword? "text" : "password"} 
          {...register("password", { required: true })}
          placeholder="password"  />
          <span onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer">
            {showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
          </div>
          {errors.password && <span className="text-red-500 py-2">This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

          </label>
          {
            error && <small className="text-red-500">{error}</small> 
          }
        </div>
        
        <div className="form-control">
          <button className="btn bg-[#647295] w-full text-white">Login</button>
        </div>

        
      </form>
      
        <div className="px-8">
        <div className="divider divider-default">OR</div>
        <div className="flex flex-col gap-4 justify-center items-center mt-2">
        <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline w-full"><FaGoogle />Login with Google</button>
        <button onClick={()=>handleSocialLogin(githubLogin)} className="btn btn-outline w-full"><FaGithub />Login with Github</button>
        </div>
        </div>
        <p className="text-sm text-center dark:text-gray-600 mt-3">Do not have account?
		<Link to="/register" className="focus:underline hover:underline text-[#647295]"> Register here</Link>
	</p>
    </div>
    
  </div>
 
</div>
    );
};

export default Login;