import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-4'><Outlet></Outlet></div>
        </div>
    );
};

export default Main;