import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const {name} = useLoaderData();
    useEffect(() => {
        document.title = name
    },[name])
    return (
        <div>
            This is {name}
        </div>
    );
};

export default ServiceDetail;