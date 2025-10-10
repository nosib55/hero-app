import React, { useState } from 'react';
import useApplication from '../hooks/useApplication';
import AppCards from '../Components/AppCards';
import AppError from './AppError';
import Loading from '../Components/Loading';

const Application = () => {
  const [search, setSearch] = useState('');
  const { applications,loading } = useApplication();

  const trimmedSearch = search.trim().toLowerCase();

  const filteredApplications = applications.filter(app =>
    app.title.toLowerCase().includes(trimmedSearch)
  );

   if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div className='bg-gray-100 mx-auto pt-6'> 
      <div>
        <h1 className='text-3xl font-bold text-center my-4'>Our All Applications</h1>
        <p className='text-center mb-4'>Explore All Apps on the Market developed by us. We code for Millions</p>

        <div className='flex justify-between items-center px-4 mb-4'>
          <p className='text-lg font-semibold'>({filteredApplications.length}) Apps Found</p>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder='Search'
            className='border border-gray-500 rounded-md w-[300px] p-2'
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {filteredApplications.length > 0 ? (
          filteredApplications.map(app => (
            <AppCards key={app.id} app={app} />
          ))
        ) : ( <div className='col-span-4'>
             <AppError></AppError>
        </div>
         
        )}
      </div>
    </div>
  );
};

export default Application;
