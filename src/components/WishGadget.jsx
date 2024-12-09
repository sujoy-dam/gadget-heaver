import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const WishGadget = ({wish}) => {
    const { product_image, product_title, price, specification } = wish
    return (
        <div className='flex border-4 gap-5 items-center mb-5 p-5 rounded-xl shadow-2xl bg-gray-100 max-w-6xl mx-auto'>
            <div className='border-4'>
                <img className='w-52 rounded-xl' src={product_image} alt="" />
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>{product_title}</h1>
                    <button><TiDeleteOutline className='text-4xl' /></button>
                </div>
                <p className='font-medium my-3'>{specification.map(s => <span>{s}</span>)}</p>
                <p className='font-medium'>Price : {price}</p>
            </div>
        </div>
    );
};

export default WishGadget;