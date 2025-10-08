import React from 'react';
import App from '../App';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Rootlayout = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Navber></Navber>
            <main className='min-h-[calc(100vh-271px)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;