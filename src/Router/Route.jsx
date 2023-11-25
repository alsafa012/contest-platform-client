import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Root from '../Layout/Root';
import Login from '../Pages/LoginPage/Login';
import Registration from '../Pages/RegistrationPage/Registration';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import AllContestPage from '../Pages/AllContestPage/AllContestPage';
import ManageUser from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser';
import AdminRoute from './AdminRoute';
import ManageContext from '../Pages/Dashboard/AdminDashboard/ManageContext/ManageContext';
import UserProfile from '../Pages/Dashboard/UserDashboard/UserProfile/UserProfile';
import AddContextPage from '../Pages/Dashboard/CreatorDashboard/AddContextPage/AddContextPage';

const myCreatedRouter = createBrowserRouter([
     {
       path: "/",
       element: <Root></Root>,
       errorElement:<ErrorPage></ErrorPage>,
       children: [
          {
               path: "/",
               element:<HomePage></HomePage>
          },
          {
               path: "/allContest",
               element:<AllContestPage></AllContestPage>
          },
          {
               path: "/login",
               element:<Login></Login>
          },
          {
               path: "/registration",
               element:<Registration></Registration>
          },
       ]
     },
     {
          path:"/dashboard",
          element:<Dashboard></Dashboard>,
          children:[
               // admin routes
               {
                    path: "/dashboard/users",
                    element:<ManageUser></ManageUser>
               },
               {
                    path: "/dashboard/manageContext",
                    element:<ManageContext></ManageContext>
               },
               // creator Routes
               {
                    path: "/dashboard/createContext",
                    element:<AddContextPage></AddContextPage>
               },
               // user routes
               {
                    path: "/dashboard/userProfile",
                    element:<UserProfile></UserProfile>
               },
               {
                    path: "/dashboard/userProfile",
                    element:<UserProfile></UserProfile>
               },
          ]
     }
   ]);

export default myCreatedRouter;