import React, { useContext } from 'react';
import { AllContext } from '../../contexts/AllContextProvider';

const ReviewCard = () => {
    const {user} = useContext(AllContext);
    return (
        <div className='text-start my-5 border-2 rounded-xl p-8'>
            <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex items-center'>
            <img src={user.photoURL} className=" rounded-full w-9 text-sm" alt={user.displayName} title={user.displayName}/>
            <h2 className='ml-3'>{user.displayName}</h2>
            </div>
            <p className=' text-gray-400 mt-5'>29/12/22</p>
            </div>

            <h2 className='mt-10'>lorem ipsum dolor si amet</h2>

        </div>
    );
};

export default ReviewCard;