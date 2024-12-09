import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';


const CardsContainer = () => {
    const navigate = useNavigate()
    const [gadgets, setGadget] = useState([]);
    const { category } = useParams()
    const datas = useLoaderData()
    // setGadget(datas)
    useEffect(() => {

        if (category) {
            const filterByGadget = [...datas].filter(gadget => gadget.category === category)
            setGadget(filterByGadget)
            // if(filterByGadget.length==0){
            //     navigate('/not-found')
            //     return
            // }
        }

        else {
            setGadget(datas)
        }
    }, [category, datas])
    // console.log(gadgets)
    // console.log(datas)
    return (
        <div className='rounded-lg shadow-2xl p-5 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {

                gadgets.length > 0 ? gadgets.map(data => <Card data={data}></Card>): <h1 className='mx-auto text-4xl font-bold text-blue-400'>No data Found</h1>
            }
        </div>
    );
};

export default CardsContainer;