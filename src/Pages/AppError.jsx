import React from 'react';
import appErrorImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
         <div className='flex-1 grid grid-cols-1 mx-auto '>
                        <div>
                        <div><img src={appErrorImg} className='w-[500px] h-[500px] mx-auto' alt="" />
                        </div>
                        <div>
                        <h1 className='text-3xl text-center mt-3 mb-3'>Oops!! App not found!</h1>
                        <p className='text-xl text-center '>The App you are requesting is not found on our system.  please try another apps</p>
                        <div className='mb-6 mt-2 text-center'>
                        <button className='bg-[#632EE3] p-2 px-5 text-amber-100 rounded-lg'><Link to="/">Go Back!</Link> </button>
                        </div>
                        </div>
                        </div>
        
                    </div>
    );
};

export default AppError;