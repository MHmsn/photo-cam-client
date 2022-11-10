import React, { useEffect } from 'react';

const MyReviews = () => {

    useEffect(() => {
        document.title = "My Reviews - Photo Cam";
      }, []);

    return (
        <div>
            This is MyReviews
        </div>
    );
};

export default MyReviews;