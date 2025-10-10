import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const HomeCard = ({ app }) => {
   const{id}=app;
    return (
      
        <div>
            <Link to={`/app/${id}`}>
        <div>
            <div className="card bg-base-100 max-w-[348px] shadow-sm hover:shadow-lg transition-shadow duration-300">
  <figure className='h-52 overflow-hidden rounded-2xl'>
    <img
      src={app.image}
      alt="Apps"  className='w-[70%]'/>
  </figure>
  <div className="card-body ">
    <h2 className="card-title flex justify-center">{app.title}</h2>

     <div className="card-actions center flex justify-center mt-4 gap-30">
                            <button className="btn-primary"> <img src={downloadIcon} alt="Downloads" className="inline-block mr-1 h-5" /> {app.downloads}</button>
                            <button className="btn-primary"><img src={ratingIcon} alt="Ratings" className="inline-block mr-1 h-5" /> {app.ratingAvg}</button>
                        </div>
   
  </div>
</div>
 
</div>
</Link>
</div>

    );
};

export default HomeCard;