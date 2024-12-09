import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList } from '../Utilities/LocalStorage';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { CountContext } from '../App';

const Details = () => {
    const {count,setCount,countW,setCountW}=useContext(CountContext)

    // const [products, setProducts]=useState([])
    const { product_id } = useParams()
    const gadgets = useLoaderData();
    const gadget = gadgets.find(gt => gt.product_id === product_id)
    // console.log(gadget)
    const { product_title, product_image, category, price, description, specification, availability, rating } = gadget;


    const handleReadList = gadget => {

        console.log('readlist')
        const storedList = getStoredReadList()
        const existGadget = storedList.find(a => a.product_id == gadget.product_id)
        if (existGadget) {
            toast.warning("This Gadget is already exist in Read List")
            return;
        }
        // console.log(storedList)
        setCount(Number(count)+1)
        addToStoredReadList(gadget)
        toast.success("Gadget added successfully in Read List")
    }
    const handleWishList = gadget => {
        // console.log(gadget)
        const storedList = getStoredWishList()
        const existGadget = storedList.find(a => a.product_id == gadget.product_id)
        if (existGadget) {
            toast.warning("This Gadget is already exist in Wish List")
            return;
        }
        // console.log(storedList)
        setCountW(Number(countW)+1)
        addToStoredWishList(gadget)
        toast.success("Gadget added successfully in Wish List")
    }
    // console.log(products)
    return (
        <div className='min-h-screen'>
            <div className='bg-[#9538E2] h-96 pt-20 text-white'>
                <h1 className='text-5xl font-bold text-white mb-5 text-center'>Product Details</h1>
                <p className='max-w-2xl text-center mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div>
                <div className="hero bg-base-200 border-4 border-violet-400 rounded-xl -translate-y-40 max-w-4xl mx-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm w-full h-full rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">{product_title}</h1>
                            <h2 className='text-xl font-bold my-5'>Price : $ {price}</h2>
                            <p className='font-bold text-green-500 px-3 py-2 bg-gray-300 w-24 rounded-xl'>{`${availability ? "In Stock" : "Stock Out"}`}</p>
                            <p className='font-medium'>{description}</p>
                            <p className='font-bold text-lg mt-4 mb-5'>Specification:</p>
                            <p>{specification.map(s => <li className="list-decimal">{s}</li>)}</p>
                            <p className='font-bold text-xl my-4'>Rating:</p>
                            <div className='flex items-center gap-5'>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>{rating}</p>
                            </div>
                            <div className='flex items-center gap-5 mt-8'>

                                <Link>
                                    <button onClick={() => handleReadList(gadget)} className="bg-violet-400 btn text-white flex items-center gap-3 px-5 py-3 rounded-2xl">Add To Cart <BsCart /></button>
                                </Link>
                                <div className='p-3 border-2 flex justify-center items-center rounded-full bg-white text-black'><button onClick={() => handleWishList(gadget)}><FaRegHeart /></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;