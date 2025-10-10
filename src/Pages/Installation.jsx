import React, { useEffect, useState, useMemo } from 'react';
import { Download, Star } from 'lucide-react';
import { toast } from 'react-toastify';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(data);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error("App Uninstalled Successfully!"); 
  };

  const parseDownloads = (value) => {
    if (!value) return 0;
    const str = value.toString().toLowerCase();
    const num = parseFloat(str.replace(/[^0-9.]/g, "")) || 0;
    if (str.includes("m")) return num * 1_000_000;
    if (str.includes("k")) return num * 1_000;
    return num;
  };

  const sortedApps = useMemo(() => {
    const arr = [...installedApps];
    if (sortOrder === "high-low") {
      arr.sort((a, b) => parseDownloads(b.reviews) - parseDownloads(a.reviews));
    } else {
      arr.sort((a, b) => parseDownloads(a.reviews) - parseDownloads(b.reviews));
    }
    return arr;
  }, [installedApps, sortOrder]);

  return (
    <div className="mt-8 bg-gray-50 min-h-screen p-6">
      <div className="border border-dashed border-gray-300 rounded-md py-6 px-8 mb-6">
        <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-center text-gray-500 mt-1">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="border border-dashed border-gray-300 rounded-md p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg">{installedApps.length} Apps Found</h2>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Sort by Downloads:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="high-low">High-Low</option>
              <option value="low-high">Low-High</option>
            </select>
          </div>
        </div>

        {sortedApps.length === 0 ? (
          <p className="text-gray-400 text-center text-xl mt-10">
            No apps installed yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="flex justify-between items-center border border-gray-200 rounded-md bg-white p-4 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-14 w-14 rounded-md bg-gray-100 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{app.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1 text-green-600">
                        <Download size={14} /> {app.reviews ?? "0"}K
                      </span>
                      <span className="flex items-center gap-1 text-orange-500">
                        <Star size={14} /> {app.ratingAvg ?? "0"}
                      </span>
                      <span>{app.size ?? "—"} MB</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{app.companyName}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-md text-sm"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Installation;
