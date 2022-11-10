import React, { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error404 = () => {
    let error = useRouteError();
    console.error(error);
    useEffect(() => {
        document.title = "Error";
      }, []);
    return (
        <div className='h-screen'>
            <div className='pt-32'>
            Error 404 - No content found!<br/>
            Please check your route and try again!
            <br/>
            <Link to='/' className='btn btn-outline mt-12'>Back to Home</Link>
            </div>
        </div>
    );
};


export default Error404;