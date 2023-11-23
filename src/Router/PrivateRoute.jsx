import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     // const navigate = useNavigate();
     const location = useLocation();
     if (loading) {
          return (
               <div className="text-5xl ml-[50%] mt-[15%]">
                    <span className="loading loading-bars loading-sm text-warning "></span>
                    <span className="loading loading-bars loading-md text-warning "></span>
                    <span className="loading  loading-bars text-warning "></span>
               </div>
          );
     }

     if (user) {
          return children;
     } else {
          return (
               <Navigate
                    state={{ from: location }}
                    replace
                    to="/login"
               ></Navigate>
          );
     }
};

export default PrivateRoute;
