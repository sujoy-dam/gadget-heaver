import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, removeRead } from '../Utilities/LocalStorage';
import ReadGadger from './ReadGadger';
// import { removeReadItem } from 'localforage';

const ReadList = () => {
  const [readList, setReadList] = useState([])
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    const storedReadList = getStoredReadList()
    // console.log(storedReadList)

    setReadList(storedReadList)
  }, [])
  useEffect(()=>{
    const reduc = [...readList].map(re => re.price)
   
    const plus = reduc.reduce((previous, current) => previous + current, 0)
    const fixed = plus.toFixed(2)
    setTotal(fixed)
  },[readList])

  // sort function 
  const handleSort = () => {
    // console.log('connected')
    const sortByPrice = [...readList].sort((a,b)=>b.price - a.price)
    setReadList(sortByPrice)
  }

  const handleRemove = (id)=>{
    removeRead(id)
    const storedReadList = getStoredReadList()
    // console.log(storedReadList)

    setReadList(storedReadList)
    
  }
  return (
    <div className='min-h-screen max-w-6xl mx-auto'>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className='flex gap-5 items-center'>
          <p>Total cost : {total}</p>
          <button onClick={()=>handleSort()} className="border2 border-violet-500 px-5 py-4 btn">Sort by Price</button>
        </div>
      </div>
      {
        readList.map(read => <ReadGadger read={read} handleRemove={handleRemove}></ReadGadger>)
      }
    </div>
  );
};

export default ReadList;