import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Components/hook/useAdmin";
import useCreator from "../Components/hook/useCreator";

const Dashboard = () => {
     const [isAdmin] = useAdmin();
     const [isCreator] = useCreator();
     // const isCreator = true;
     return (
          <div>
               <div className="min-h-screen md:flex container mx-auto">
                    <div className="md:w-[20%] bg-emerald-500">
                         <ul className="menu p-4 space-y-2">
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
                                             <NavLink to="/dashboard/userProfile">
                                                  Creator Profile
                                             </NavLink>
                                        </li>
                                   </>
                              )}
                              {/*  */}
                              {!isAdmin && !isCreator && (
                                   <>
                                        <li>
                                             <NavLink to="/dashboard/allContext">
                                                  Participated Contest
                                             </NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/dashboard/userProfile">
                                                  My Winning Contest Page
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
                              {/* shared lists */}
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
                    <div className="md:flex-1 border bg-red-300 p-5">
                         <Outlet></Outlet>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;
