import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#9538E2] text-white max-w-7xl mx-auto rounded-r-xl rounded-l-xl -translate-y-5 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold text">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 max-w-2xl text-center mx-auto">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!.
                        </p>
                        <Link to="/dashboard"><button className="px-8 py-4 bg-violet-200 text-violet-800 font-bold rounded-full">Shop Now</button></Link>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-7xl flex justify-center -translate-y-40'>
                <div className='border-4 border-white backdrop-blur-xl inline-block p-5 rounded-xl mx-auto'>

                    <img className='max-w-4xl max-h-[400px] mx-auto rounded-xl' src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;