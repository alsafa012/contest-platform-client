import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Root from '../Layout/Root';

const myCreatedRouter = createBrowserRouter([
     {
       path: "/",
       element: <Root></Root>,
       children: [
          {
               path: "/",
               element:<HomePage></HomePage>
          }
       ]
     },
   ]);

export default myCreatedRouter;