import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = ({count,handleCount}) => {
    return (
        <div className='mt-5 sticky top-0 z-10 mx-auto '>
            <Navbar count={count}></Navbar>
        </div>
    );
};

export default Header;