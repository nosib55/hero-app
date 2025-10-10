import React from 'react';

import HeroBanner from '../Components/HeroBanner';
import HomeCard from '../Components/HomeCard';
import useApplication from '../hooks/useApplication';
import { Link } from 'react-router';
import ErrorPage from './ErrorPage';
import Loading from '../Components/Loading';

const Home = () => {
    const { applications, loading, error } = useApplication();
    
const homeApplications = applications.slice(0, 8);
 if (loading) {
        return (
          <Loading></Loading>
        );
    }

    if (error) {
        return <ErrorPage></ErrorPage>;
    }

    return (
        <div>
            <HeroBanner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-auto">
                {homeApplications.map(app => (
            <HomeCard key={app.id} app={app} />
            
            
               
            ))}
            
        </div>
            <div className='text-center  mb-5'><Link className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 rounded-md  font-semibold text-white ' to="/app">Show All</Link></div>
        </div> 
    );
};

export default Home;
