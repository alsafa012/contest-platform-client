import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../Components/hook/useAdmin";
// import useCreator from "../Components/hook/useCreator";
import { FaListUl } from "react-icons/fa";
import useAdmin from "../Components/hook/useAdmin";
import useCreator from "../Components/hook/useCreator";
// {/* <FaListUl /> */}
const DashboardYry = () => {
     const [isAdmin] = useAdmin();
     const [isCreator] = useCreator();
     // const isCreator = true;
     return (
          <div className="container mx-auto">
               <div className="drawer lg:drawer-open min-h-screen">
               {/* <div className="drawer lg:drawer-open min-h-screen overflow-hidden max-h-screen"> */}
                    <input
                         id="my-drawer-2"
                         type="checkbox"
                         className="drawer-toggle"
                    />
                    <div className="drawer-content relative max-h-screen overflow-y-auto">
                         {/* Page content here */}
                         <label
                              htmlFor="my-drawer-2"
                              className="btn btn-primary bg-red-400 border-none drawer-button lg:hidden fixed z-10 top-0 right-0 "
                         >
                              <FaListUl /> 
                         </label>
                         {/* <div className="border bg-red-300"> */}
                              <Outlet></Outlet>
                         {/* </div> */}
                    </div>
                    <div className="drawer-side min-h-screen ">
                         <label
                              htmlFor="my-drawer-2"
                              aria-label="close sidebar"
                              className="drawer-overlay"
                         ></label>
                         <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                              {/* Sidebar content here */}
                              {/* <ul className="menu p-4 space-y-2"> */}
                              {isAdmin && (
                                   <>
                                        <li>
                                             <NavLink to="/dashboard/users">
                                                  Manage User
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/manageContext">
                                                  Manage Contest
                                             </NavLink>
                                        </li>
                                   </>
                              )}
                              {isCreator && (
                                   <>
                                        <li>
                                             <NavLink to="/dashboard/createContext">
                                                  Create A Contest
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/seeAllContext">
                                                  My Created Contest
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/contestSubmission">
                                                  All Submissions
                                             </NavLink>
                                        </li>
                                   </>
                              )}
                              {/*  */}
                              {!isAdmin && !isCreator && (
                                   <>
                                        <li>
                                             <NavLink to="/dashboard/userRegister">
                                                  My Registered Contest
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/userWinning">
                                                  My Winning Contest
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/userProfile">
                                                  My Profile
                                             </NavLink>
                                        </li>
                                   </>
                              )}
                              <div className="divider"></div>
                              <li>
                                   <NavLink to="/">
                                        <FaHome></FaHome>Home
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="/">
                                        <FaSearch></FaSearch> Menu
                                   </NavLink>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default DashboardYry;
