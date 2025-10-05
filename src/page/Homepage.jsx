import React from 'react';
import CardComponent from '../Component/CardComponent';
import CaseStudyComponent from '../Component/CaseStudyComponent';
import BlogComponent from '../Component/BlogComponent';
import OurServices from '../Component/ServiceCard';


const Homepage = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#2c2c46]'>
           <CardComponent></CardComponent>

           <CaseStudyComponent></CaseStudyComponent>

           <BlogComponent></BlogComponent>

           <OurServices></OurServices>
        </div>
    );
};

export default Homepage;