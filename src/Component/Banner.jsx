import React from 'react';
import banner from "../assets/cat-big.png"

const Banner = () => {
    return (
         <div 
          className="mt-10 h-[750px] bg-cover bg-no-repeat bg-center rounded-xl flex items-center px-10 "
          style={{ 
            backgroundImage: `url(${banner})`,
              
         }}
        >
          <div className="mb-30 p-6 rounded-lg  max-w-xl">
            <h1 className="text-[46px] font-bold mb-4">
              Pamper Your Pet,<br /> Because They Deserve <br /> the Best
            </h1>
            <p className="mb-4 text-[20px]">
              Discover a world of treats, toys, and essentials handpicked for <br /> your furry friends. Shop now and make tails wag with joy!
            </p>
            <button className="bg-amber-400 py-2 px-4 border-0 rounded-lg font-semibold text-black">
              Find the Pet
            </button>
          </div>
        </div>
    );
};

export default Banner;