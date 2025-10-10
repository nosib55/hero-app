import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-24 h-24 border-4 border-t-blue-500 border-gray-700 rounded-full animate-spin"></div>

      <h1 className="text-3xl mt-8 font-bold tracking-wider animate-pulse">
        Loading <span className="text-blue-400">HERO-APP.IO</span>...
      </h1>

      <p className="mt-4 text-gray-400 text-sm animate-pulse">
        Please wait, we’re preparing something awesome 🚀
      </p>
    </div>
  );
};

export default Loading;
