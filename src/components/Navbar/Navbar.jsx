import { Link } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
    <li><Link>Home</Link></li>
    <li><Link>Update Profile</Link></li>
    <li><Link>User Profile</Link></li>
    </>
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
    <Link to="/" className="btn btn-ghost  text-[#9F496E] text-bold gap-0 text-2xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-blue-700 text-transparent bg-clip-text animate-gradient bg-300%">LuxuryLair</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login"><button className="btn bg-[#647295] text-white">Login</button></Link>
    {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default Navbar;