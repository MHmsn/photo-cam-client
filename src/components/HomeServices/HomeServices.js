import React, { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homeservices')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <div className='mt-5'>
        <h2 className='text-3xl'>Some of the services I offer...</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            <PhotoProvider>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </PhotoProvider>
        </div>
        <Link to='/services'><button className='btn btn-primary'>See All</button></Link>
        </div>
    );
};

export default HomeServices;