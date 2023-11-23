import { Link, NavLink } from "react-router-dom";
import Container from "../../../Shared/Container/Container";

const Navbar = () => {
     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/login"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Login
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/registration"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Registration
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               <div className="bg-black">
                    <Container>
                         <div className=" navbar bg-black">
                              {/* bg-gradient-to-r from-blue-900 to-blue-900 */}
                              <div className="navbar-start">
                                   <div className="dropdown">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost lg:hidden"
                                        >
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-5 w-5"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M4 6h16M4 12h8m-8 6h16"
                                                  />
                                             </svg>
                                        </label>
                                        <ul
                                             tabIndex={0}
                                             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                                        >
                                             {navLists}
                                        </ul>
                                   </div>
                                   <img
                                        className="rounded-full h-[50px] w-[50px]"
                                        src=""
                                        alt=""
                                   />

                                   <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                        Contest Platform
                                   </p>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1 text-white">
                                        {navLists}
                                   </ul>
                              </div>

                              <div className="navbar-end ">
                                   <div className="dropdown dropdown-end">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost btn-circle avatar"
                                        >
                                             logout
                                        </label>

                                        <div>
                                             <ul
                                                  tabIndex={0}
                                                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                             >
                                                  <div>
                                                       <li>
                                                            <h3>User:</h3>
                                                       </li>

                                                       <li>
                                                            <Link
                                                                 to="/dashboard"
                                                                 className="font-medium"
                                                            >
                                                                 Dashboard
                                                            </Link>
                                                       </li>
                                                  </div>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Navbar;
