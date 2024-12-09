import React from 'react';

const SharedComponent = ({title, subtitle}) => {
    return (
        <div className='bg-[#9538E2] h-96 pt-20 text-white flex flex-col items-center'>
            <h1 className='text-5xl font-bold text-white mb-5 text-center'>{title}</h1>
            <p className='max-w-2xl text-center mx-auto'>{subtitle}</p>
        </div>
    );
};

export default SharedComponent;