import React from 'react';

const Stat = () => {
    return (
       <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  p-10 '>
        <div className='text-center mb-5 text-white font-bold text-4xl'>
            <h2>Trusted by Millions, Built for You</h2></div>
<div className="stats  w-full text-white rounded-lg">
    

  <div className="stat place-items-center">
    <div className="stat-title">Total Downloads</div>
    <div className="stat-value">29.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Total Reviews</div>
    <div className="stat-value text-secondary">906K</div>
    <div className="stat-desc text-secondary">46% more than last month</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Active Apps</div>
    <div className="stat-value">132+</div>
    <div className="stat-desc">31 more will Launch</div>
  </div>
</div>

       </div>
    );
};

export default Stat;