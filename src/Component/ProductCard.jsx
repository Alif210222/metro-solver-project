import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductCard = () => {

         const [products,setProduct] = useState([])

     
    useEffect(()=>{
          fetch("/data.json")
          .then(res => res.json() )
          .then(data => setProduct(data))
          .catch(err => console.error ("Error loading data" , err))
    } , [])   

      
    return (
          <div className='flex gap-4'>

           {
              products.map(product => (
                 <div key={product.id} className="border p-4 rounded-lg shadow ">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold text-amber-600">${product.price}</p>
            <button className="mt-2 bg-amber-400 px-4 py-2 rounded">Buy Now</button>
          </div>
              )

              )
           }
           </div>
        
    );
};

export default ProductCard;