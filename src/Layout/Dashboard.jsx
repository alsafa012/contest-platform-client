import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Components/hook/useAdmin";
import useCreator from "../Components/hook/useCreator";
import { FaListUl } from "react-icons/fa";
// {/* <FaListUl /> */}
const Dashboard = () => {
     const [isAdmin] = useAdmin();
     const [isCreator] = useCreator();
     // const isCreator = true;
     return (
          <div>
               <div className="min-h-screen relative md:flex container mx-auto max-h-screen md:overflow-hidden">
                    <div className="md:w-[20%] bg-emerald-500 hidden md:block">
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
                    <div className="border border-red-500">
                    <details className="dropdown dropdown-left md:hidden block fixed z-10 right-0">
                    {/* <div tabIndex={0} role="button" className="btn m-1"><FaListUl /></div> */}
                    <summary className="m-1 btn"><FaListUl /></summary>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[250px]">
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
                    </ul>
                    </details>
                    </div>
                    <div className="md:flex-1 border bg-red-300 p-5 overflow-y-auto">
                         <Outlet></Outlet>
                    </div>
               </div>
               <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
          </div>
          // <div className="">
          //      <div className="drawer lg:drawer-open">
          //           {/* <input
          //                id="my-drawer-2"
          //                type="checkbox"
          //                className="drawer-toggle"
          //           /> */}
          //           <div id="my-drawer-2" type="checkbox" className="drawer-toggle border bg-red-300 p-5">
          //                <Outlet></Outlet>
          //           </div>
          //           {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
          //           <div className="drawer-content absolute top-5 left-5">
          //                {/* Page content here */}
          //                <label
          //                     htmlFor="my-drawer-2"
          //                     className="btn btn-primary drawer-button lg:hidden"
          //                >
          //                     <FaListUl />
          //                </label>
          //           </div>
          //           <div className="drawer-side">
          //                <label
          //                     htmlFor="my-drawer-2"
          //                     aria-label="close sidebar"
          //                     className="drawer-overlay"
          //                ></label>
          //                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          //                     {/* Sidebar content here */}
          //                     {isAdmin && (
          //                          <>
          //                               <li>
          //                                    <NavLink to="/dashboard/users">
          //                                         Manage User
          //                                    </NavLink>
          //                               </li>
          //                               <li>
          //                                    <NavLink to="/dashboard/manageContext">
          //                                         Manage Contest
          //                                    </NavLink>
          //                               </li>
          //                          </>
          //                     )}
          //                     {isCreator && (
          //                          <>
          //                               <li>
          //                                    <NavLink to="/dashboard/createContext">
          //                                         Create A Contest
          //                                    </NavLink>
          //                               </li>
          //                               <li>
          //                                    <NavLink to="/dashboard/seeAllContext">
          //                                         My Created Contest
          //                                    </NavLink>
          //                               </li>
          //                               <li>
          //                                    <NavLink to="/dashboard/contestSubmission">
          //                                         All Submissions
          //                                    </NavLink>
          //                               </li>
          //                          </>
          //                     )}
          //                     {/*  */}
          //                     {!isAdmin && !isCreator && (
          //                          <>
          //                               <li>
          //                                    <NavLink to="/dashboard/userRegister">
          //                                         My Registered Contest
          //                                    </NavLink>
          //                               </li>
          //                               <li>
          //                                    <NavLink to="/dashboard/userWinning">
          //                                         My Winning Contest
          //                                    </NavLink>
          //                               </li>
          //                               <li>
          //                                    <NavLink to="/dashboard/userProfile">
          //                                         My Profile
          //                                    </NavLink>
          //                               </li>
          //                          </>
          //                     )}
          //                </ul>
          //           </div>
          //      </div>
          //      <div className="border bg-red-300 p-5">
          //           {/* <Outlet></Outlet> */}
          //      </div>
          // </div>
     );
};

export default Dashboard;
