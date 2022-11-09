import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-8'><Outlet></Outlet></div>
            <Footer/>
        </div>
    );
};

export default Main;