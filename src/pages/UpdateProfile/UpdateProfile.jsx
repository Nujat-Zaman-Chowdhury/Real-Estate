import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegUser } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const UpdateProfile = () => {
    const {user,updateUserProfile} = useContext(AuthContext)

    console.log(location);
    const [userName,setUserName] = useState('');
    const [userPhoto,setUserPhoto] = useState('')
    

    const handleSubmit = ()=>{
        // console.log(userName);
        updateUserProfile(userName,userPhoto)
        
        
    }
    

    return (
    <div>
    {/* <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 w-1/3 mx-auto">
	<img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">Front-End developer</p>
		</div>
		<div className="flex flex-col justify-center pt-2 space-x-4 align-center">
			<a  href="#"  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				{user?.email}
			</a>
			
        <a
          onClick={() => document.getElementById("my_modal_2").showModal()}
          href="#"
          className="label-text-alt link link-hover flex justify-center items-center"
        >
          <button className="btn">Update</button>
        </a>
     
      <dialog id="my_modal_2" className="modal flex flex-col">
        <div  className="modal-box fle">
        <label htmlFor="name">Name</label><br />
        <input className="border-2" type="text" name="name" id="" onChange={(e)=>setUserName(e.target.value)} />

          <button onClick={handleSubmit}>Save</button>
          
        </div>
        <form method="dialog" className="modal-backdrop">
        <button>close</button>
        </form>
      </dialog>
		</div>
	</div>
</div> */}


       
<div className="w-full md:w-1/3 mx-auto">
    
<div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
    <h2 className="text-center mb-3">Your profile</h2>
	<img src={user.photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2 space-y-3 flex flex-col justify-center text-center font-roboto">
		
		<h2 className="text-xl font-semibold tracking-wide">{user?.displayName}</h2>
        <p className="dark:text-gray-800 font-playfair">{user?.email}</p>
        
        <a
          onClick={() => document.getElementById("my_modal_2").showModal()}
          href="#"
          className="label-text-alt link link-hover flex justify-center items-center"
        >
          {/* <button className="btn">Update</button> */}
        <button className="btn btn-outline" onClick={()=>document.getElementById('my_modal_5').showModal()}>Update Profile</button>
        </a>
	</div>
</div>
</div>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Update Your profile</h3>
    <form className="w-2/3 mx-auto mt-3 space-y-4">
        <label className="input input-bordered flex items-center gap-2">
        <FaRegUser className="text-gray-500"></FaRegUser>
    <input onChange={(e)=>setUserName(e.target.value)} type="text" className="" name="name" placeholder="Your Name" />
    </label>
        <label className="input input-bordered flex items-center gap-2">
    <CiLink></CiLink>
    <input onChange={(e)=>setUserPhoto(e.target.value)}  type="text" className="" placeholder="Photo URL"  />
    
    </label>
    <button onClick={handleSubmit} className="btn w-full">Save</button>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-xl"><IoCloseOutline /></button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default UpdateProfile;