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
import ManageContext from "../Pages/Dashboard/AdminDashboard/ManageContext/ManageContext";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import AddContextPage from "../Pages/Dashboard/CreatorDashboard/AddContextPage/AddContextPage";
import ContestDetailsPage from "../Pages/ContestDetailsPage/ContestDetailsPage";
import MyCreatedContextPage from "../Pages/Dashboard/CreatorDashboard/MyCreatedContextPage/MyCreatedContextPage";
import UpdateContest from "../Pages/Dashboard/CreatorDashboard/UpdateContest/UpdateContest";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ContestSubmissionPage from "../Pages/Dashboard/CreatorDashboard/ContestSubmissionPage/ContestSubmissionPage";
import UserRegisteredContestPage from "../Pages/Dashboard/UserDashboard/UserRegisteredContestPage/UserRegisteredContestPage";
import UserWinningContestPage from "../Pages/Dashboard/UserDashboard/UserWinningContestPage/UserWinningContestPage";
import AuthProvider from "../Provider/AuthProvider";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <HomePage></HomePage>,
                    loader: () => fetch("https://context-platform-server.vercel.app/createContext"),
               },
               {
                    path: "/contacts",
                    element: <ContactUsPage></ContactUsPage>,
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
                              `https://context-platform-server.vercel.app/createContext/${params.id}`
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
                              `https://context-platform-server.vercel.app/createContext/${params.id}`
                         ),
               },
               {
                    path: "/payment/:id",
                    element: (
                         <PrivateRoute>
                              <PaymentPage></PaymentPage>
                         </PrivateRoute>
                    ),
                    loader: ({ params }) =>
                         fetch(
                              `https://context-platform-server.vercel.app/createContext/${params.id}`
                         ),
               },
          ],
     },
     {
          path: "/dashboard",
          element: (
               <PrivateRoute>
                    <Dashboard></Dashboard>
               </PrivateRoute>
          ),
          children: [
               // admin routes
               {
                    path: "/dashboard/users",
                    element: (
                         <PrivateRoute>
                              <ManageUser></ManageUser>
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/dashboard/manageContext",
                    element: (
                         <PrivateRoute>
                              <ManageContext></ManageContext>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("https://context-platform-server.vercel.app/createContext"),
               },
               // creator Routes
               {
                    path: "/dashboard/createContext",
                    element: (
                         <PrivateRoute>
                              <AddContextPage></AddContextPage>
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/dashboard/seeAllContext",
                    element: (
                         <PrivateRoute>
                              <MyCreatedContextPage></MyCreatedContextPage>
                         </PrivateRoute>
                    ),
                    // loader:()=>fetch('https://context-platform-server.vercel.app/createContext')
               },
               {
                    path: "/dashboard/contestSubmission",
                    element: (
                         <PrivateRoute>
                              <ContestSubmissionPage></ContestSubmissionPage>
                         </PrivateRoute>
                    ),
                    // loader:()=>fetch('https://context-platform-server.vercel.app/createContext')
               },
               // user routes
               {
                    path: "/dashboard/userRegister",
                    element: (
                         <PrivateRoute>
                              <UserRegisteredContestPage></UserRegisteredContestPage>
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/dashboard/userWinning",
                    element: (
                         <PrivateRoute>
                              <UserWinningContestPage></UserWinningContestPage>
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/dashboard/userProfile",
                    element: (
                         <PrivateRoute>
                              <UserProfile></UserProfile>
                         </PrivateRoute>
                    ),
               },
          ],
     },
     {
          path: "/login",
          element: <Login></Login>,
     },
     {
          path: "/registration",
          element: <Registration></Registration>,
     },
]);

export default myCreatedRouter;
