import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import router from "./Routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <>
    <RouterProvider router={router} />
       <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
    />
  </>
);
