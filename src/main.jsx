import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRouter from "./Router/Route";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <AuthProvider>
               <HelmetProvider>
                    <RouterProvider router={myCreatedRouter} />
               </HelmetProvider>
          </AuthProvider>
     </React.StrictMode>
);
