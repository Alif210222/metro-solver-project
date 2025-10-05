import React from 'react';
import CardComponent from '../Component/CardComponent';
import CaseStudyComponent from '../Component/CaseStudyComponent';


const Homepage = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#2c2c46]'>
           <CardComponent></CardComponent>

           <CaseStudyComponent></CaseStudyComponent>

           
        </div>
    );
};

export default Homepage;