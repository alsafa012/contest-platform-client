import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hook/useAdmin";
import useCreator from "../../hook/useCreator";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
const Navbar = () => {
     const { user, userSignOut } = useAuth();
     const [toggle, setToggle] = useState(false);
     // const [isAdmin] = useAdmin();
     // const [isCreator]=useCreator();
     const [isAdmin] = useAdmin();
     const [isCreator] = useCreator();
     // console.log(isAdmin);
     // console.log(isCreator);
     // const isAdmin = true;
     // const isCreator=true;
     const navigate = useNavigate();

     const handleUserSignOut = () => {
          Swal.fire({
               title: "Are you sure?",
               text: "You want to sign out?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes",
          }).then((result) => {
               if (result.isConfirmed) {
                    userSignOut()
                         .then(() => {
                              Swal.fire(
                                   "Good job!",
                                   "User Sign out successfully",
                                   "success"
                              );
                              navigate("/");
                         })
                         .catch();
               }
          });
     };

     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-white"
                         //           : ""
                         // }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/allContest"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         Our Contests
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/contacts"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         Contact Us
                    </NavLink>
               </li>
               {!user && (
                    <li>
                         <NavLink
                              to="/login"
                              // className={({ isActive, isPending }) =>
                              //      isPending
                              //           ? "pending"
                              //           : isActive
                              //           ? "text-[#ff6900] underline"
                              //           : ""
                              // }
                         >
                              Login
                         </NavLink>
                    </li>
               )}
               {!user && (
                    <li>
                         <NavLink
                              to="/registration"
                              // className={({ isActive, isPending }) =>
                              //      isPending
                              //           ? "pending"
                              //           : isActive
                              //           ? "text-[#ff6900] underline"
                              //           : ""
                              // }
                         >
                              Registration
                         </NavLink>
                    </li>
               )}
          </>
     );
     return (
          <div>
               {/* #252734 dark */}
               {/*  #2a2c39 light */}
               <div className="bg-[#252734]">
                    {/* <div className="bg-black fixed z-30 top-0 left-0 right-0" > */}
                    <Container>
                         <div className="navbar">
                              {/* bg-gradient-to-r from-blue-900 to-blue-900 */}
                              <div className="navbar-start">
                                   <details className="dropdown mr-5 lg:hidden">
                                        <summary className="flex justify-center items-center">
                                             <label
                                                  onClick={() =>
                                                       setToggle(!toggle)
                                                  }
                                                  className="btn bg-[#2a2c39] text-white"
                                             >
                                                  <button>
                                                       {toggle ? (
                                                            <IoClose />
                                                       ) : (
                                                            <FaListUl />
                                                       )}
                                                  </button>
                                             </label>
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                             {navLists}
                                        </ul>
                                   </details>
                                   {/* <div className="dropdown">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost lg:hidden"
                                        >
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-5 w-5 text-white"
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
                                   </div> */}
                                   <img
                                        className="rounded-full w-10 h-10 md:h-[50px] md:w-[50px]"
                                        src="https://i.ibb.co/NWVnrNn/png-transparent-computer-icons-translation-context-word-intellectual-miscellaneous-company-text-thum.png"
                                        alt="logo"
                                   />

                                   <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                        Contest Hub
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
                                             {user ? (
                                                  <div className="w-10 rounded-full">
                                                       <img
                                                            src={user.photoURL}
                                                       />
                                                  </div>
                                             ) : (
                                                  <Link to="/login">
                                                       <button className="text-white">
                                                            Sign Up
                                                       </button>
                                                  </Link>
                                             )}
                                        </label>

                                        {user && (
                                             <div>
                                                  <ul
                                                       tabIndex={0}
                                                       className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                                  >
                                                       <div>
                                                            <li>
                                                                 <h2 className="font-medium">
                                                                      User:
                                                                      {
                                                                           user.displayName
                                                                      }
                                                                 </h2>
                                                            </li>

                                                            <div>
                                                                 {user &&
                                                                      isAdmin && (
                                                                           <>
                                                                                <li>
                                                                                     <Link to="/dashboard/users">
                                                                                          <h4>
                                                                                               Dashboard
                                                                                          </h4>
                                                                                     </Link>
                                                                                </li>
                                                                           </>
                                                                      )}
                                                            </div>
                                                            <div>
                                                                 {user &&
                                                                      isCreator && (
                                                                           <>
                                                                                <li>
                                                                                     <Link to="/dashboard/createContext">
                                                                                          <h4>
                                                                                               Dashboard
                                                                                          </h4>
                                                                                     </Link>
                                                                                </li>
                                                                           </>
                                                                      )}
                                                            </div>
                                                            <div>
                                                                 {user &&
                                                                      !isAdmin &&
                                                                      !isCreator && (
                                                                           <>
                                                                                <li>
                                                                                     <Link to="/dashboard/userProfile">
                                                                                          <h4>
                                                                                               Dashboard
                                                                                          </h4>
                                                                                     </Link>
                                                                                </li>
                                                                           </>
                                                                      )}
                                                            </div>
                                                            <li>
                                                                 {user ? (
                                                                      <button
                                                                           onClick={
                                                                                handleUserSignOut
                                                                           }
                                                                           className="font-medium"
                                                                      >
                                                                           Sign
                                                                           Out
                                                                      </button>
                                                                 ) : (
                                                                      <Link to="/login">
                                                                           <button className="">
                                                                                Sign
                                                                                Up
                                                                           </button>
                                                                      </Link>
                                                                 )}
                                                            </li>
                                                       </div>
                                                  </ul>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Navbar;
