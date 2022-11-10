import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const {name, img, details, price } = useLoaderData();
    useEffect(() => {
        document.title = name
    },[name])

    return (
        <div className='min-h-screen my-10'>
            <h2 className='text-5xl my-10'>{name}</h2>
            <img src={img} className='lg:w-3/4 rounded-xl mx-auto mb-10' alt=''/>
            <p className='text-start text-3xl font-bold my-10'> Price: {price}</p>
            <h2 className='text-2xl my-10'>{details}</h2>
        </div>
    );
};

export default ServiceDetail;