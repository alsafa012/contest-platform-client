import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Root from '../Layout/Root';
import Login from '../Pages/LoginPage/Login';
import Registration from '../Pages/RegistrationPage/Registration';

const myCreatedRouter = createBrowserRouter([
     {
       path: "/",
       element: <Root></Root>,
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
   ]);

export default myCreatedRouter;