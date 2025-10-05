import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/Logo Motion.png"

const Navbar = () => {


       const links = <>

         <li className='  text-white   text-lg lg:mr-3 '><NavLink className={({isActive})=> isActive ? "text-orange-400 " :"" } to='/'>Home</NavLink></li>
         <li className='  text-white   text-lg lg:mr-3 '><NavLink className={({isActive})=> isActive ? "text-orange-400 " :"" } to='/dashboard'>About us</NavLink></li>
         <li className='  text-white   text-lg lg:mr-3 '><NavLink className={({isActive})=> isActive ? "text-orange-400 " :"" } to='/dashboard'></NavLink></li>
         <li className='  text-white   text-lg lg:mr-3 '><NavLink className={({isActive})=> isActive ? "text-orange-400 " :"" } to='/dashboard'>White label</NavLink></li>
         <li className='  text-white   text-lg lg:mr-3 '><NavLink className={({isActive})=> isActive ? "text-orange-400 " :"" } to='/dashboard'>Contact us</NavLink></li>
         
          
       
       </>




    return (
        <div className="navbar bg-[#2c2c46] shadow-sm px-2 md:px-20 py-4  fixed top-0 z-50">
   <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black/35 rounded-box z-1 mt-3 w-30 md:w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <Link to="/" className="  text-xl md:text-3xl "><span>
          <img src={logo} className='w-16 h-16 md:w-30 md:h-20' alt="" />
         
         </span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal   backdrop-blur-md bg-white/20  border-white/20 shadow-md rounded-full px-6 py-2 text-white">
     {
        links
     }
    </ul>
  </div>
  <div className="navbar-end space-x-2.5">


       
  (
    <div className="dropdown dropdown-end">
      <div className='text-center'>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar border border-white/20 hover:border-white"
      >
        <div className="w-12 rounded-full">
          <img src={"/default-user.png"} alt="User Profile" />
        </div>
        
      </div>
       
       <p className=' text-amber-600 font-medium'>My Profile</p>
        </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-3 shadow-lg menu menu-sm dropdown-content bg-white/10 text-white backdrop-blur-md rounded-box w-52 border border-white/20"
      >
        <li className="font-semibold">
          <span>Hello, User </span>
        </li>
        <li className='font-bold hover:text-amber-600'>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className='font-bold hover:text-amber-600'>
          <button >Logout</button>
        </li>
      </ul>
    </div>
  )
    
  </div>
</div>
    );
};

export default Navbar;