// Footer.jsx
import React from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
 import logo from "../assets/Logo Motion.png"
import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-[#141923] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12">

        {/*  Newsletter Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2b2f3a]/60 via-[#3b2a56]/50 to-[#211a2b]/40 p-8 md:p-12 mb-12 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link to="/" className="  text-xl md:text-3xl "><span>
          <img src={logo} className='w-16 h-16 md:w-40 md:h-20' alt="" />
         
         </span> </Link>
            <div className="flex-1 flex items-start gap-6">
            
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#4fa3ff] to-[#9b5bff] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h7l3-8 3 16 3-6h3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-sm text-gray-300 mt-2 max-w-xl">
                  Join the 25000+ clients in our company — get updates, offers & insights.
                </p>
              </div>
            </div>

            {/* Email pill input + subscribe button */}
            <div className="flex-1 w-full md:w-auto flex items-center justify-end">
              <div className="w-full md:w-[560px]">
                <div className="flex items-center bg-white rounded-full p-[2px]">
                  {/* Input */}
                  <input
                    aria-label="Enter your email"
                    className="flex-1 rounded-full px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your email"
                    type="email"
                  />

                  {/* Subscribe button with gradient border wrapper */}
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-[#5B2BE0] to-[#9C40FF] ml-3">
                    <button
                      type="button"
                      className=" md:flex hidden items-center gap-2 bg-[#6d2dd6] px-6 py-3 rounded-full text-white font-medium hover:brightness-105 transition"
                      aria-label="Subscribe"
                    >
                      {/* small sparkle icon */}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l1.8 3.8L18 7l-4.2 1.2L12 12 9 8.2 4.8 7 9 5.8 12 2z" fill="white" opacity="0.95"/>
                      </svg>
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Footer main area  */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">

          {/*  Contact Column (left) */}
          <div className="space-y-6">
            <h4 className="text-3xl font-semibold">Got Questions? <br /> Call us !</h4>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2e2540]">
                  <svg className="w-10 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10c4 8 8 8 18 10" stroke="#cdbfff" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M21 12v4" stroke="#cdbfff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-200 font-medium">Head office:</div>
                  <div>Metro Solver Limited</div>
                  <div className="mt-1 text-sm text-gray-300">Grantham Road, London E12 5LX, United Kingdom</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2e2540]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.13 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.67.36 1.32.69 1.93a1 1 0 0 1-.23 1.04L7.6 8.6a15.05 15.05 0 0 0 6 6l1.88-1.95a1 1 0 0 1 1.04-.23c.61.33 1.26.57 1.93.69a1 1 0 0 1 .75 1V21z" stroke="#cdbfff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="tel:+447936455446" className="text-gray-200">+44 7936 455446</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2e2540]">
                  <svg className="w-10 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8.5l9 6 9-6" stroke="#cdbfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#cdbfff" strokeWidth="1.5"/>
                  </svg>
                </div>
                <a href="official@metrosolver.com" className="text-gray-200">official@metrosolver.com</a>
              </div>
            </div>

            {/* Currency selector with gradient border */}
            <div className="pt-2">
              <div className="text-sm text-gray-400 mb-2">Country Currency</div>
              <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-[#5B2BE0] to-[#9C40FF]">
                <select
                  aria-label="Country Currency"
                  className="bg-[#1c2130] text-white py-3 pl-4 pr-9 rounded-lg appearance-none w-64"
                  defaultValue="GBP"
                >
                  <option value="GBP">  GBP - British Pound</option>
                  <option value="USD"> USD - US Dollar</option>
                  <option value="EUR"> EUR - Euro</option> 
                  
                </select> 
                
              </div>
            </div>
          </div>

          {/*  Column 2: Company  */}
          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a className="hover:text-white" href="#">Home</a></li>
              <li><a className="hover:text-white" href="#">About us</a></li>
              <li><a className="hover:text-white" href="#">Our Team</a></li>
              <li><a className="hover:text-white" href="#">User Profile</a></li>
              <li><a className="hover:text-white" href="#">White Labelling</a></li>
            </ul>
          </div>

          {/*  Column 3: About Us */}
          <div>
            <h5 className="text-white font-semibold mb-4">About Us</h5>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a className="hover:text-white" href="#">Our Stories</a></li>
              <li><a className="hover:text-white" href="#">Career</a></li>
              <li><a className="hover:text-white" href="#">Send Message</a></li>
              <li><a className="hover:text-white" href="#">Blog</a></li>
            </ul>
          </div>

          {/*  Column 4: Support  */}
          <div>
            <h5 className="text-white font-semibold mb-4">Support</h5>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a className="hover:text-white" href="#">Help Center</a></li>
              <li><a className="hover:text-white" href="#">Contact Us</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms and Conditions</a></li>
              <li><a className="hover:text-white" href="#">Start Earning</a></li>
            </ul>
          </div>

          {/* --- Column 5: Services --- */}
          <div>
            <h5 className="text-white font-semibold mb-4">Services</h5>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a className="hover:text-white" href="#">Digital Marketing</a></li>
              <li><a className="hover:text-white" href="#">Creative Writing Solution</a></li>
              <li><a className="hover:text-white" href="#">Web & Software Development</a></li>
              <li><a className="hover:text-white" href="#">E-Commerce Solution</a></li>
              <li><a className="hover:text-white" href="#">Graphic Design</a></li>
              <li><a className="hover:text-white" href="#">Multimedia & Video Editing</a></li>
            </ul>
          </div>
        </div>

        {/* ===== Partners row ===== */}
        <div className="border-t border-[#2a2635] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400">Our Future Partners</div>

          
            <div className="md:flex hidden items-center gap-6 overflow-x-auto py-4">
              
              {[
                "Meta",
                "Google Marketing Platform",
                "Microsoft",
                "AWS Partner",
                "Google Partner",
                "Amazon spn",
                "TikTok"
              ].map((name, i) => (
                <div key={i} className="flex-shrink-0 w-28 h-10 rounded-md flex items-center justify-center bg-[#11121a]/40 text-xs text-gray-200">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Bottom legal row ===== */}
        <div className="mt-6 border-t border-[#151520] pt-6 pb-10 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© Metro Solver. All Rights Reserved 2024</div>
          <div className="text-right">Metro Solver Ltd incorporated in England & Wales Registration No:15792819</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
