
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    
   console.log(user);
    const navLinks = <>
    <li><NavLink to="/" className={({isActive})=>(isActive? "text-[#647295] font-bold hover:bg-none bg-white border-[#647295]" : "text-bold")}>Home</NavLink></li>
    
    {
      user && <li><NavLink to="/agents" className={({isActive})=>(isActive? "text-[#647295] font-bold  bg-white border-[#647295]" : " bg-white border-none text-black")}>Agents</NavLink></li>
    }
    
    <li><NavLink to="/update-profile" className={({isActive})=>(isActive? "text-[#647295] font-bold  bg-white border-[#647295]" : " bg-white border-none text-black")}>Update Profile</NavLink></li>
    
    {/* <li><Link>User Profile</Link></li> */}
    </>

    const handleLogOut = ()=>{
      logOut();
      console.log("logged out");
    }

    return (
        <div className="font-roboto px-8 pb-3 pt-5">
            <div className="navbar m-0 p-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 p-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost font-playfair  text-[#647295] font-bold gap-0 text-4xl md:text-3xl ">LuxuryLair</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 text-base">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

     {
      user?
      <div className="flex items-center gap-6">
        <button onClick={handleLogOut} className="btn bg-[#647295] text-white ">Sign Out</button>
        <div className="lg:tooltip tooltip-bottom" data-tip={user && user.displayName}>
        <img className="w-10 h-10 object-cover rounded-full  cursor-pointer"  src={user?.photoURL || 'no image'}  alt="" />
        </div>
      </div>
      :
      <div>
        <Link to="/login" className="btn bg-[#647295] text-white">Log In</Link>
      </div>
     } 
    
  </div>
</div>
        </div>
    );
};

export default Navbar;