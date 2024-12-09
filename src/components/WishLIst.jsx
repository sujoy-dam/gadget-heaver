import React, { useEffect, useState } from 'react';
import WishGadget from './WishGadget';
import { getStoredWishList } from '../Utilities/LocalStorage';

const WishLIst = () => {
    const [wishList, setWishList] = useState([])
    useEffect(() => {
        const storedWishList = getStoredWishList()
        // console.log(storedWishList)

        setWishList(storedWishList)
    }, [])
    return (
        <div className='min-h-screen max-w-6xl mx-auto'>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-2xl font-bold">Wish List</h1>
            </div>
            {
                wishList.map(read => <WishGadget wish={read}></WishGadget>)
            }
        </div>
    );
};

export default WishLIst;