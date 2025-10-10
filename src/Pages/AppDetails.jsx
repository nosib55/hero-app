import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApplication from '../hooks/useApplication';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import Rechart from './Rechart'; 

const AppDetails = () => {
  const { id } = useParams();
  const { applications, loading } = useApplication();
  const [isInstalled, setIsInstalled] = useState(false);
  const [app, setApp] = useState(null);

  useEffect(() => {
    if (applications && applications.length > 0) {
      const found = applications.find((app) => app.id === Number(id));
      setApp(found || null);
    }
  }, [applications, id]);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const alreadyInstalled = installedApps.some((a) => a.id === Number(id));
    setIsInstalled(alreadyInstalled);
  }, [id]);

  if (loading) return <Loading />;

  if (!app) {
    return (
      <div className="w-11/12 mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-600">App not found</h1>
      </div>
    );
  }

  const { image, title, downloads, ratingAvg, companyName, size, reviews, description, ratings } = app;

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const alreadyInstalled = installedApps.some((a) => a.id === Number(id));

    if (!alreadyInstalled) {
      installedApps.push(app);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success(`${title} installed successfully! ✅`);
    } else {
      toast.info(`${title} is already installed.`);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="w-11/12 mx-auto card bg-base-100 shadow-sm p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <div>
            <img className="max-w-48 object-cover rounded-xl" src={image} alt={title} />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500 mt-2">
              Developed by: <span className="text-[#39bcf9] font-bold">{companyName}</span>
            </p>

            <div className="divider"></div>

            <div className="flex items-center gap-10 flex-wrap">
              <div>
                <img className="h-8 w-8" src={downloadIcon} alt="Downloads" />
                <p className="text-gray-500">Downloads</p>
                <h1 className="text-2xl font-bold">{downloads}</h1>
              </div>
              <div>
                <img className="h-8 w-8" src={ratingIcon} alt="Ratings" />
                <p className="text-gray-500">Average Ratings</p>
                <h1 className="text-2xl font-bold">{ratingAvg}</h1>
              </div>
              <div>
                <img className="h-8 w-8" src={reviewIcon} alt="Reviews" />
                <p className="text-gray-500">Total Reviews</p>
                <h1 className="text-2xl font-bold">{reviews}</h1>
              </div>
            </div>

            <div className="my-4">
              <button
                onClick={handleInstall}
                className={`btn text-white ${isInstalled ? 'bg-[#00d390]' : 'bg-[#00d390]'}`}
              >
                {isInstalled ? `Installed` : `Install Now (${size}MB)`}
              </button>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Ratings Overview</h2>
          <Rechart ratings={ratings} />
        </div>

        <div className="divider"></div>

        <div>
          <h1 className="text-xl font-bold">Description</h1>
          <p className="whitespace-pre-line text-gray-500 my-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
