import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { CountContext } from '../App';

const Navbar = () => {
    const { count, countW } = useContext(CountContext)
    console.log(count)


    const location = useLocation()
    // console.log(location.pathname)

    const nav = <>
        <li><NavLink to="/" className={`${location.pathname === "/" || location.pathname.includes('/category') ? "text-white" : "text-gray-900"}`}>Home</NavLink></li>
        <li><NavLink to="/Statistics" className={`${location.pathname === "/" || location.pathname.includes('/category') ? "text-white" : "text-gray-900"}`}>Statistics</NavLink></li>
        <li><NavLink to="/dashboard" className={`${location.pathname === "/" || location.pathname.includes('/category') ? "text-white" : "text-gray-900"}`}>Dashboard</NavLink></li>
        <li><NavLink to="/about" className={`${location.pathname === "/" || location.pathname.includes('/category') ? "text-white" : "text-gray-900"}`}>About Us</NavLink></li>
    </>
    return (
        <div className={`navbar max-w-7xl px-20 py-5 mx-auto backdrop-blur-3xl text-violet-400 font-bold sticky top-0 z-10 rounded-xl ${location.pathname === "/" || location.pathname.includes('/category') ? "bg-[#9538E2] " : "bg-transparent"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <p className={`text-2xl ${location.pathname === "/" || location.pathname.includes('/category') ? "text-white" : "text-gray-900"}`}>Gadget Heaven</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className='relative'>
                    <div className='p-3 border-2 rounded-full bg-white text-black'><BsCart /></div>
                    <div className='absolute  rounded-full -top-3 -right-1 font-bold text-xl text-gray-950'>{count}</div>
                </div>
                <div className='relative'>

                    <div className='p-3 border-2 rounded-full bg-white text-black'><FaRegHeart /></div>
                    <div className='absolute  rounded-full -top-3 -right-1 font-bold text-xl text-gray-950'>{countW}</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;