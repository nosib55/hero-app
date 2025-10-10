import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { Link} from 'react-router';

const AppCards = ({ app }) => {

   
    const{title,image,ratingAvg,downloads,id}=app
    return (
        <div>
           
         <Link to={`/app/${id}`}> 
            <div  className="card bg-white max-w-[348px] shadow-sm hover:shadow-xl transition-shadow duration-300 mb-5 mt-5 rounded-lg" >
                
                <figure className='h-52 overflow-hidden rounded-2xl'>
                    <img
                        src={image}
                        alt="Apps" className='w-[70%]' />

                </figure>
                <div className="card-body ">
                    <h2 className="card-title flex justify-center">{title}</h2>

                    <div className="card-actions center flex justify-center mt-4 gap-30">
                        <button className="btn-primary"> <img src={downloadIcon} alt="Downloads" className="inline-block mr-1 h-5" /> {downloads}</button>
                        <button className="btn-primary"><img src={ratingIcon} alt="Ratings" className="inline-block mr-1 h-5" /> {ratingAvg}</button>
                    </div>

                </div>
            </div>
          </Link>
        </div>
    );
};

export default AppCards;