import useAdmin from "../Components/hook/useAdmin";
import useAuth from "../Components/hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
     const [isAdmin, isAdminLoading] = useAdmin();
     const { user, loading } = useAuth();
     // const navigate = useNavigate();
     const location = useLocation();
     if (loading || isAdminLoading) {
          return (
               <div className="text-5xl ml-[50%] mt-[15%]">
                    <span className="loading loading-bars loading-sm text-warning "></span>
                    <span className="loading loading-bars loading-md text-warning "></span>
                    <span className="loading  loading-bars text-warning "></span>
               </div>
          );
     }

     if (user && isAdmin) {
          return children;
     } else {
          // navigate('/login')
          //     return <Navigate state={location.pathname} to="/login"></Navigate>;
          return (
               <Navigate
                    state={{ from: location }}
                    replace
                    to="/login"
               ></Navigate>
          );
     }
};

export default AdminRoute;
