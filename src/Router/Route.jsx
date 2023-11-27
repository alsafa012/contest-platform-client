import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Root from "../Layout/Root";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllContestPage from "../Pages/AllContestPage/AllContestPage";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import ManageContext from "../Pages/Dashboard/AdminDashboard/ManageContext/ManageContext";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import AddContextPage from "../Pages/Dashboard/CreatorDashboard/AddContextPage/AddContextPage";
import ContestDetailsPage from "../Pages/ContestDetailsPage/ContestDetailsPage";
import MyCreatedContextPage from "../Pages/Dashboard/CreatorDashboard/MyCreatedContextPage/MyCreatedContextPage";
import UpdateContest from "../Pages/Dashboard/CreatorDashboard/UpdateContest/UpdateContest";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ContestSubmissionPage from "../Pages/Dashboard/CreatorDashboard/ContestSubmissionPage/ContestSubmissionPage";

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <HomePage></HomePage>,
                    loader:()=>fetch('http://localhost:5000/createContext')
               },
               {
                    path: "/allContest",
                    element: <AllContestPage></AllContestPage>,
               },
               {
                    path: "/details/:id",
                    element: (
                         <PrivateRoute>
                              <ContestDetailsPage></ContestDetailsPage>
                         </PrivateRoute>
                    ),
                    loader: ({ params }) =>
                         fetch(
                              `http://localhost:5000/createContext/${params.id}`
                         ),
               },
               {
                    path: "/updateContest/:id",
                    element: (
                         <PrivateRoute>
                              <UpdateContest></UpdateContest>
                         </PrivateRoute>
                    ),
                    loader: ({ params }) =>
                         fetch(
                              `http://localhost:5000/createContext/${params.id}`
                         ),
               },
               {
                    path: "/payment/:id",
                    element: <PaymentPage></PaymentPage>,
                    loader: ({ params }) =>
                         fetch(
                              `http://localhost:5000/createContext/${params.id}`
                         ),
               },
               {
                    path: "/login",
                    element: <Login></Login>,
               },
               {
                    path: "/registration",
                    element: <Registration></Registration>,
               },
          ],
     },
     {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
          children: [
               // admin routes
               {
                    path: "/dashboard/users",
                    element: <ManageUser></ManageUser>,
               },
               {
                    path: "/dashboard/manageContext",
                    element: <ManageContext></ManageContext>,
                    loader: () => fetch("http://localhost:5000/createContext"),
               },
               // creator Routes
               {
                    path: "/dashboard/createContext",
                    element: <AddContextPage></AddContextPage>,
               },
               {
                    path: "/dashboard/seeAllContext",
                    element: <MyCreatedContextPage></MyCreatedContextPage>,
                    // loader:()=>fetch('http://localhost:5000/createContext')
               },
               {
                    path: "/dashboard/contestSubmission",
                    element: <ContestSubmissionPage></ContestSubmissionPage>,
                    // loader:()=>fetch('http://localhost:5000/createContext')
               },
               // user routes
               {
                    path: "/dashboard/userProfile",
                    element: <UserProfile></UserProfile>,
               },
               {
                    path: "/dashboard/userProfile",
                    element: <UserProfile></UserProfile>,
               },
          ],
     },
]);

export default myCreatedRouter;
