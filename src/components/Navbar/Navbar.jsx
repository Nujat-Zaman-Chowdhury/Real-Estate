
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    
   
    const navLinks = <>
    <li><Link>Home</Link></li>
    {
      user && <li><Link to="/update-profile">Update Profile</Link></li>
    }
    {/* <li><Link>User Profile</Link></li> */}
    </>

    const handleLogOut = ()=>{
      logOut();
    }

    return (
        <div className="font-roboto my-3">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost  text-[#9F496E] text-bold gap-0 text-3xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-[#647295] text-transparent bg-clip-text animate-gradient bg-300%">LuxuryLair</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

     {
      user?
      <div className="flex items-center gap-3">
        <button onClick={handleLogOut} className="btn bg-[#647295] text-white">Sign Out</button>
        <img className="w-10 rounded-full" src={user?.photoURL || 'no image'} alt="" />
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