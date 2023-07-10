import React from 'react';
import { categories } from '../data/data.js';

const category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1640px] px04 py-12'>
        <h1 className='text-green-500 font-bold text-center'>Top Rated Menu Items</h1>
        {/*categories*/}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4 justify-between items-center'>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img src={item.image} alt={item.name} 
                className='w-20'/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default category