import React, { useState } from 'react';
import ReadList from "../components/ReadList"
import WishList from "../components/WishLIst"
import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    const [isActive, setActive] = useState({
        status: "cart"
    })
    const handleCart = (cart) => {
        setActive({
            status: "cart"
        })
    }
    const handleWhishList = wishlist => {
        setActive({
            status: "wishlist"
        })
    }
    // console.log(isActive)
    return (
        <div className='space-y-4'>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className='bg-[#9538E2] h-96 pt-20 text-white flex flex-col items-center'>
                <h1 className='text-5xl font-bold text-white mb-5 text-center'>Dashboard</h1>
                <p className='max-w-2xl text-center mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='space-x-5 mt-5'>
                    <button className={`${isActive.status == "cart" ? "btn bg-blue-500" : "btn"}`} onClick={() => handleCart("cart")}>Cart</button>
                    <button className={`${isActive.status == "wishlist" ? "btn bg-blue-500" : "btn"}`} onClick={() => handleWhishList("wishlist")}>WishList</button>
                </div>
            </div>
            {
                isActive.status === "cart" ? <ReadList></ReadList> : <WishList></WishList>
            }
        </div>
    );
};

export default Dashboard;