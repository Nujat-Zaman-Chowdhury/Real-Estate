
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TbLogout } from "react-icons/tb";
import { GiTwirlyFlower } from "react-icons/gi";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    
   console.log(user);
    const navLinks = 
    <>
    <NavLink to="/" className={({isActive})=>(isActive? "text-[#647295] font-bold hover:bg-none bg-white border-[#647295]" : "bg-none text-bold")}>Home</NavLink>
    
    {
      user && <NavLink to="/agents" className={({isActive})=>(isActive? "text-[#647295] font-bold  bg-white border-[#647295]" : " bg-white border-none text-black")}>Agents</NavLink>
    }
    
    <NavLink to="/update-profile" className={({isActive})=>(isActive? "text-[#647295] font-bold  bg-white border-[#647295]" : " bg-white border-none text-black")}>Update Profile</NavLink>
    
    <NavLink to="/contact" className={({isActive})=>(isActive? "text-[#647295] font-bold  bg-white border-[#647295]" : " bg-white border-none text-black")}>Contact</NavLink>
    </>

    const handleLogOut = ()=>{
      logOut();
      console.log("logged out");
    }

    return (
        <div className="font-roboto  mt-5">
            <div className="navbar w-full md:max-w-7xl mx-auto px-0 md:px-3">
  <div className="navbar-start">
    <div className="dropdown p-0">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  p-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/" className="btn p-0 btn-ghost font-roboto  text-[#647295] font-bold gap-0 text-xl md:text-3xl "><GiTwirlyFlower className="md:mr-1 hidden md:flex" />LuxuryLair</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-base flex items-center">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

     {
      user?
      <div className="flex items-center gap-0 md:gap-4">
        <button onClick={handleLogOut} className="btn flex items-center bg-[#647295] text-white ">Sign Out  <TbLogout /></button>
        <div className="lg:tooltip tooltip-bottom" data-tip={user && user.displayName}>
        <img className="w-10 h-10 object-cover rounded-full  cursor-pointer"  src={user?.photoURL || 'no image'}  alt="" />
        </div>
      </div>
      :
      <div>
        <Link to="/login" className="btn bg-[#647295] text-white"><CiLogin /> Log In</Link>
      </div>
     } 
    
  </div>
</div>
        </div>
    );
};

export default Navbar;