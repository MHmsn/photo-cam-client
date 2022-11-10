import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AllContext } from '../../contexts/AllContextProvider';
import CommentBox from '../CommentBox/CommentBox';
import ReviewCard from '../ReviewCard/ReviewCard';

const ServiceDetail = () => {
    const {name, img, details, price,_id } = useLoaderData();
    const {user} = useContext(AllContext);
    const [reviews, setReviews] = useState([]);
    
    reviews.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
      });
      console.log(reviews);
    useEffect(() => {
        document.title = name;
    },[name])
    
    
    useEffect(() => {
        fetch(`https://service-server-seven.vercel.app/reviews/${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    },[_id])

    return (
        <div className='min-h-screen my-10'>
            <h2 className='text-5xl my-10'>{name}</h2>
            <img src={img} className='lg:w-3/4 rounded-xl mx-auto mb-10' alt=''/>
            <p className='text-start text-3xl font-bold my-10'> Price: {price}</p>
            <h2 className='text-2xl my-10'>{details}</h2>
            {user?.uid? <CommentBox serviceId={_id} reviews={reviews} setReviews={setReviews}/>:<><p className='my-10'>To add reviews, Please <Link to='/login'>Login</Link></p></>}

            <div>
            {reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
            
        </div>
    );
};

export default ServiceDetail;