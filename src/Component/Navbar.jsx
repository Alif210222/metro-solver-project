import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/Logo Motion.png"

const Navbar = () => {


       const links = <>

         <li className='  text-white border p-2 rounded-full px-4 border-[#9e1ee9]  text-md lg:mr-3 '>Home</li>
         <li className='  text-white border border-white/10  p-2 rounded-full px-4  text-md lg:mr-3 hover:border-[#9e1ee9]'>About us</li>
         <li className='  text-white border border-white/10 p-2 rounded-full px-4 text-md lg:mr-3 hover:border-[#9e1ee9]'>Product</li>
         <li className='  text-white border border-white/10 p-2 rounded-full px-4 text-md lg:mr-3 hover:border-[#9e1ee9]'>White label</li>
         <li className='  text-white border border-white/10 p-2 rounded-full px-4 text-md lg:mr-3 hover:border-[#9e1ee9]'>contact us</li>
         
          
       
       </>




    return (
        <div className="navbar bg-[#1E2532] shadow-sm px-2 md:px-20 py-4  fixed top-0 z-50">
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
          <img src={logo} className='w-16 h-16 md:w-40 md:h-20' alt="" />
         
         </span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal   backdrop-blur-md bg-white/10  border-white/20 shadow-md rounded-full  px-8 py-3  text-white">
     {
        links
     }
    </ul>
  </div>
  <div className="navbar-end space-x-2.5">


      <button className='bg-[#320a49] px-5 py-2 text-white rounded-full border border-[#a616ca]'>Sing up</button>
    
  </div>
</div>
    );
};

export default Navbar;