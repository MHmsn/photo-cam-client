import React  from 'react';

const ReviewCard = ({review}) => {
    const {reviewerImg, reviewerName, comment, reviewDate} = review;
    
    return (
        <div className='text-start my-5 border-2 rounded-xl p-8'>
            <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex items-center'>
            <img src={reviewerImg} className=" rounded-full w-9 text-sm" alt='' />
            <h2 className='ml-3'>{reviewerName}</h2>
            </div>
            <p className=' text-gray-400 mt-5'>{reviewDate}</p>
            </div>

            <p className='mt-10'>{comment}</p>

        </div>
    );
};

export default ReviewCard;