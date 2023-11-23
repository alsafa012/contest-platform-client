import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Root from '../Layout/Root';
import Login from '../Pages/LoginPage/Login';
import Registration from '../Pages/RegistrationPage/Registration';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';

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
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          // children:[
          //      {
          //           path: "/dashboard/cart",
          //           element:<Cart></Cart>
          //      },
          //      // admin routes
          //      {
          //           path: "/dashboard/users",
          //           element:<AllUsers></AllUsers>
          //      },
          //      {
          //           path: "/dashboard/addItems",
          //           element:<AdminRoute><AddItems></AddItems></AdminRoute>
          //      },
          // ]
     }
   ]);

export default myCreatedRouter;