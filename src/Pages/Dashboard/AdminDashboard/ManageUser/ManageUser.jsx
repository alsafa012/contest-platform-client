import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAdmin from "../../../../Components/hook/useAdmin";
import useAuth from "../../../../Components/hook/useAuth";
import { useState } from "react";

const ManageUser = () => {
     // const [category, setCategory] = useState("");
     const [isAdmin] = useAdmin();
     console.log(isAdmin);
     const { user } = useAuth();
     const currentUser = user?.email;
     console.log(currentUser);
     const axiosSecure = useAxiosSecure();
     const { refetch, data: users = [] } = useQuery({
          queryKey: ["users"],
          queryFn: async () => {
               const res = await axiosSecure.get("/users");
               return res.data;
          },
     });

     const [selectedOption, setSelectedOption] = useState("");

     const handleSelectChange = (event) => {
          setSelectedOption(event.target.value);
     };

     // const handleButtonClick = () => {

     // };
     const handleUserUpdate = (id) => {
          const updateRole = { selectedOption };
          console.log(updateRole);
          axiosSecure.patch(`/users/role/${id}`, updateRole).then((res) => {
               console.log(res.data);
               if (res.data.modifiedCount > 0) {
                    Swal.fire({
                         title: "Good job!",
                         text: "User current role update successfully",
                         icon: "success",
                    });

                    refetch();
               }
          });
     };

     // make admins
     // const handleMAkeAdmin = (user) => {
     //      Swal.fire({
     //           title: "Are you sure want to admit as an Admin Role?",
     //           // text: "You won't be able to revert this!",
     //           icon: "warning",
     //           showCancelButton: true,
     //           confirmButtonColor: "#3085d6",
     //           cancelButtonColor: "#d33",
     //           confirmButtonText: "Yes",
     //      }).then((result) => {
     //           if (result.isConfirmed) {
     //                axiosSecure
     //                     .patch(`/users/admin/${user._id}`)
     //                     .then((res) => {
     //                          console.log(res.data);
     //                          if (res.data.modifiedCount > 0) {
     //                               Swal.fire({
     //                                    title: "Good job!",
     //                                    text: `${user.name} is become an admin`,
     //                                    icon: "success",
     //                               });

     //                               refetch();
     //                          }
     //                     });
     //           }
     //      });
     // };

     // delete a user
     // const handleRemoveUser = (id) => {
     //      // if(user.role !== "admin"){
     //      //      return alert("not admin");
     //      // }
     //      if(isAdmin.admin === 'false'){
     //           return alert("not admin");
     //      }
     //      Swal.fire({
     //           title: "Are you sure?",
     //           text: "You won't be able to revert this!",
     //           icon: "warning",
     //           showCancelButton: true,
     //           confirmButtonColor: "#3085d6",
     //           cancelButtonColor: "#d33",
     //           confirmButtonText: "Yes, delete it!",
     //      }).then((result) => {
     //           if (result.isConfirmed) {
     //                axiosSecure.delete(`/users/${id}`).then((res) => {
     //                     if (res.data.deletedCount > 0) {
     //                          Swal.fire({
     //                               title: "Deleted!",
     //                               text: "Your file has been deleted.",
     //                               icon: "success",
     //                          });
     //                          refetch();
     //                     }

     //                     console.log(res.data);
     //                });
     //           }
     //      });
     // }; // make admins

     return (
          <div>
               <div>
                    <div className="flex justify-evenly">
                         <h2 className="text-3xl font-medium">All Users</h2>
                         <h2 className="text-3xl font-medium">
                              {/* <p>{users.length}</p> */}
                              Total Users: {users.length}
                         </h2>
                    </div>
                    <div>
                         <div className="overflow-x-auto">
                              <table className="table">
                                   {/* head */}
                                   <thead>
                                        <tr>
                                             <th></th>
                                             <th>Name</th>
                                             <th>Email</th>
                                             <th>Role</th>
                                             <th>Manage Role</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {users.map((user, index) => (
                                             <tr
                                                  className="hover"
                                                  key={user._id}
                                             >
                                                  <th>{index + 1}</th>
                                                  <td>{user.name}</td>
                                                  <td>{user.email}</td>
                                                  <td>{user.role}</td>
                                                  <td>
                                                       <select
                                                       className="p-2 mr-2 rounded-xl"
                                                            name=""
                                                            id=""
                                                            onChange={
                                                                 handleSelectChange
                                                            }
                                                            value={
                                                                 selectedOption
                                                            }
                                                       >
                                                            <option value="admin">
                                                                 Admin
                                                            </option>
                                                            <option value="creator">
                                                                 Creator
                                                            </option>
                                                            <option value="user">
                                                                 User
                                                            </option>
                                                       </select>
                                                       <button
                                                            className="btn"
                                                            onClick={() =>
                                                                 handleUserUpdate(
                                                                      user._id
                                                                 )
                                                            }
                                                       >
                                                            Update
                                                       </button>
                                                       {/* <button
                                                            onClick={() =>
                                                                 handleRemoveUser(
                                                                      user._id
                                                                 )
                                                            }
                                                            className="btn btn-xs"
                                                       >
                                                            <FaTrashAlt></FaTrashAlt>
                                                       </button> */}
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ManageUser;
