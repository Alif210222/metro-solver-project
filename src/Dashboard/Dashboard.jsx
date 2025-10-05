import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';




const DashBoardLayout = () => {


    return (
       <div className="drawer lg:drawer-open  bg-gradient-to-br from-[#5f2701] via-[#311701] to-[#100700] ">
                         

  <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content min-h-screen flex flex-col bg-gradient-to-br from-[#060127] via-[#0f0800] to-[#231001] ">

            {/* Navbar */}
    <div className="navbar  w-full lg:hidden">
      <div className="flex-none ">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 22"
            className="inline-block h-6 w-8  mt-10 stroke-current text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2 mt-10 text-lg text-white">Dashboard</div>
      
    </div>
 
<div className=''>


    {/* Page content here */}
      <Outlet></Outlet>
    {/* Page content here */}
</div>

 </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

    

    <ul className="menu w-64  space-y-2   bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 text-white border border-white/20         ">
         {/* logo */}

         <Link to="/" className="btn btn-ghost text-3xl text-white "><span>
               
                  
        </span > AppOrbit</Link>


       <ul className='p-1 bg-amber-50'></ul>

      <li className='text-white text-xl mt-6'>
        <NavLink to="/" >
         
          Home

        </NavLink>
      </li>

      {/* user section  */}


     
        <>
         <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/myProfile"  className={({isActive})=> isActive ? "text-orange-400 " :"" }>
         
          My Profile
        </NavLink>
      </li>
      <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/addProduct" className={({isActive})=> isActive ? "text-orange-400 " :"" }>
        
          Add Product
        </NavLink>
      </li>
      <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/myProduct" className={({isActive})=> isActive ? "text-orange-400 " :"" }>
          
           My Product
        </NavLink>
      </li >
        
        </> 
     

       
      

   {/* moderator section  */}

   
     <>
     <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/productReview" className={({isActive})=> isActive ? "text-orange-400 " :"" }>
          
         Product Review Queue
        </NavLink>
        </li >
        <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/reportedProduct" className={({isActive})=> isActive ? "text-orange-400 " :"" }>
         
           Reported Product 
        </NavLink>
        </li >
     
     </>
   

       

    {/* admin section  */}

      
        <>
        
     <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/statistics"  className={({isActive})=> isActive ? "text-orange-400 " :"" }>
         
           Statistics Page
        </NavLink>
   </li >

   <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/manageUser" className={({isActive})=> isActive ? "text-orange-400 " :"" }>
        
           Manage User
        </NavLink>
   </li >
   <li className='text-white text-lg font-medium'>
        <NavLink to="/dashboard/manageCoupon" className={({isActive})=> isActive ? "text-orange-400 " :"" }>
         
           Manage Coupon
        </NavLink>
   </li >
        
        </>
      


    </ul>
  </div>
</div>
    );
};

export default DashBoardLayout;