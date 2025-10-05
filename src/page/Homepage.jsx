import React from 'react';
import Banner from '../Component/Banner';
import Product from '../Component/Product';

const Homepage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Product></Product>

        </div>
    );
};

export default Homepage;