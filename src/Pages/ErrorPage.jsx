import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <div className='flex-1 grid grid-cols-1 mx-auto '>
                <div>
                <div><img src={errorImg} className='w-[500px] h-[500px] ' alt="" />
                </div>
                <div>
                <h1 className='text-3xl text-center mt-3 mb-3'>Oops, page not found!</h1>
                <p className='text-xl text-center '>The page you are looking for is not available.</p>
                <div className='mb-6 mt-2 text-center'>
                <button className='bg-[#632EE3] p-2 px-5 text-amber-100 rounded-lg'><Link to='/'>Go Back!</Link> </button>
                </div>
                </div>
                </div>

            </div>

         <Footer></Footer>
        </div>
    );
};

export default ErrorPage;