import React from 'react';
import Banner from '../components/Banner';

import { Link, NavLink, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const categories = useLoaderData();
    const navigation = useNavigation();
    console.log(navigation)
    // console.log(categories)
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven || Home</title>
            </Helmet>

            <Banner></Banner>
            {/* <ExploreGadget categories={categories}></ExploreGadget> */}
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-5xl font-bold text-center mb-20'>Explore Cutting-Edge Gadgets</h1>
                <div className="flex gap-5">

                    <div className='flex py-6 rounded-xl h-[450px] flex-col w-[20%] gap-5 px-10 shadow-2xl'>
                       <NavLink to="/" className={({ isActive }) => `flex justify-center py-3 text-xl bg-gray-200 rounded-full gap-10 ${isActive ? ' text-white bg-blue-400 font-medium' : ''}`}>All Gadget</NavLink>
                        {
                            categories.map(category => <NavLink to={`/category/${category.category}`} className={({ isActive }) => `flex justify-center py-3 text-xl bg-gray-200 rounded-full gap-10 ${isActive ? ' text-white bg-blue-400 font-medium' : ''}`}>{category.category}</NavLink>)
                        }
                    </div>

                    <div className="w-[75%] min-h-96">
                        {
                            navigation.state==="Loading"?<p>Loading</p>:<Outlet></Outlet>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;