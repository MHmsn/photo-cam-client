import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AllContext } from '../../contexts/AllContextProvider';
import CommentBox from '../CommentBox/CommentBox';
import ReviewCard from '../ReviewCard/ReviewCard';

const ServiceDetail = () => {
    const {user} = useContext(AllContext);
    //const {displayName, photoURL, uid} = user;
    const {name, img, details, price } = useLoaderData();
    useEffect(() => {
        document.title = name;
    },[name])

    return (
        <div className='min-h-screen my-10'>
            <h2 className='text-5xl my-10'>{name}</h2>
            <img src={img} className='lg:w-3/4 rounded-xl mx-auto mb-10' alt=''/>
            <p className='text-start text-3xl font-bold my-10'> Price: {price}</p>
            <h2 className='text-2xl my-10'>{details}</h2>
            {user?.uid? <CommentBox/>:<><p className='my-10'>To add reviews, Please <Link to='/login'>Login</Link></p></>}

            <ReviewCard/>
        </div>
    );
};

export default ServiceDetail;