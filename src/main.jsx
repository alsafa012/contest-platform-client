import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRouter from "./Router/Route";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <AuthProvider>
               <QueryClientProvider client={queryClient}>
                    <HelmetProvider>
                         <RouterProvider router={myCreatedRouter} />
                    </HelmetProvider>
               </QueryClientProvider>
          </AuthProvider>
     </React.StrictMode>
);
