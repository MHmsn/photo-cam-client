import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const {name} = useLoaderData();
    return (
        <div>
            This is {name}
        </div>
    );
};

export default ServiceDetail;