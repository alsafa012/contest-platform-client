import { useQuery } from "@tanstack/react-query";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import useAuth from "../../../../Components/hook/useAuth";
import Container from "../../../../Shared/Container/Container";
import useAxiosPublic from "../../../../Components/hook/useAxiosPublic";
import Swal from "sweetalert2";

// import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

// user profile settings
const UserProfile = () => {
     const { user, updateUserProfile } = useAuth();
     const axiosPublic = useAxiosPublic();
     const { refetch, data: users = [] } = useQuery({
          queryKey: ["users"],
          queryFn: async () => {
               const res = await axiosPublic.get("/users");
               return res.data;
          },
     });
     // console.log(users);
     const axiosSecure = useAxiosSecure();
     const { data: registerUser = [] } = useQuery({
          queryKey: ["registerUser"],
          queryFn: async () => {
               const res = await axiosSecure.get("/registerUser");
               return res.data;
          },
     });
     const loggedUser = registerUser.filter(
          (info) => info?.email === user?.email
     );
     console.log(loggedUser);
     const nothingWin = loggedUser.filter((info) => info.status === "pending");
     const contestWin = loggedUser.filter((info) => info.status === "winner");
     const nothingWinValue = nothingWin.length;
     const contestWinValue = contestWin.length;
     console.log(nothingWinValue);
     console.log(contestWinValue);
     const data = [
          { name: "Nothing Win", value: nothingWinValue },
          { name: "Winning", value: contestWinValue },
     ];

     const COLORS = ["#0088FE", "#00C49F"];
     const RADIAN = Math.PI / 180;
     const renderCustomizedLabel = ({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          percent,
     }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
               <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
               >
                    {`${(percent * 100).toFixed(0)}%`}
               </text>
          );
     };

     // user profile settings

     const handleUpdateName = (id) => {
          // e.preventDefault();
          // const name = e.target.name.value;
          const name = document.getElementById("name").value;
          console.log(name);
          updateUserProfile(name)
               .then(() => {
                    const updatedUserName = { name: name };
                    axiosPublic
                         .patch(`/users/${id}`, updatedUserName)
                         .then((res) => {
                              if (res.data.modifiedCount > 0) {
                                   Swal.fire({
                                        title: "Good job!",
                                        text: "name updated!",
                                        icon: "success",
                                   });
                                   refetch();
                              }
                              console.log(res.data);
                         });
                    document.getElementById("name").value = "";
               })
               .catch((error) => {
                    console.log(error);
               });
     };
     // handleUpdatePhoto
     const handleUpdatePhoto = (id) => {
          console.log(id);
          const photo = document.getElementById("photo").value;
          const name = user?.displayName;
          console.log(photo);
          updateUserProfile(name, photo)
               .then(() => {
                    Swal.fire({
                         title: "Good job!",
                         text: "photo updated!",
                         icon: "success",
                    });
               })
               .catch((error) => {
                    console.log(error);
               });
          document.getElementById("photo").value = "";
     };
     return (
          <div>
               <Container>
                    <WebsiteTitle title={"Profile Update"}></WebsiteTitle>
                    <div className="mt-5">
                         <SectionTitle subHeading={"My Profile"}></SectionTitle>
                    </div>

                    <div className="w-full mt-10 text-white">
                         {users.map(
                              (email) =>
                                   email?.email === user?.email && (
                                        <div key={email._id}>
                                             {/* <p>{email.name}</p>
                                             <p>{email.email}</p>
                                             <p>{email.role}</p> */}
                                             {/* <p>{email._id}</p> */}
                                             <div className="md:w-[65%] mx-auto border p-5 bg-gray-600 rounded-lg">
                                                  <div className="w-full flex justify-center my-3">
                                                       <img
                                                            className="rounded-full w-[80px] border-gray-500 "
                                                            src={user?.photoURL}
                                                            alt=""
                                                       />
                                                  </div>
                                                  <div className="text-black md:flex gap-2 items-center text-lg font-medium mt-2 mb-3 ">
                                                       <p className="border p-3 bg-white my-3 md:my-0 text-base rounded-xl md:w-1/2">
                                                            Email: {user?.email}
                                                            {/* Email: {email.name} */}
                                                       </p>

                                                       <p className="border p-3 bg-white text-base rounded-xl md:w-1/2">
                                                            {/* {user?.displayName} */}
                                                            Name: {email.name}
                                                       </p>
                                                  </div>
                                                  <div className="flex gap-2 justify-center">
                                                       {/* 1st modal */}
                                                       <div>
                                                            {/* The button to open modal */}
                                                            <label
                                                                 htmlFor="my_modal_7"
                                                                 className="btn red text-white border-none"
                                                            >
                                                                 Update Name
                                                            </label>

                                                            {/* Put this part before </body> tag */}
                                                            <input
                                                                 type="checkbox"
                                                                 id="my_modal_7"
                                                                 className="modal-toggle"
                                                            />
                                                            <div
                                                                 className="modal"
                                                                 role="dialog"
                                                            >
                                                                 <div className="modal-box">
                                                                      <div className="flex justify-center">
                                                                           {/* <div className="mx-auto"> */}
                                                                           <input
                                                                                className="input input-bordered input-warning w-full max-w-xs"
                                                                                type="text"
                                                                                name="name"
                                                                                id="name"
                                                                           />
                                                                           <button
                                                                                onClick={() =>
                                                                                     handleUpdateName(
                                                                                          email._id
                                                                                     )
                                                                                }
                                                                                className="btn red ml-2"
                                                                           >
                                                                                update
                                                                           </button>
                                                                           {/* </div> */}
                                                                      </div>
                                                                 </div>
                                                                 <label
                                                                      className="modal-backdrop"
                                                                      htmlFor="my_modal_7"
                                                                 >
                                                                      Close
                                                                 </label>
                                                            </div>
                                                       </div>

                                                       {/* 2nd modal */}
                                                       <div>
                                                            {/* The button to open modal */}
                                                            <label
                                                                 htmlFor="my_modal_8"
                                                                 className="btn red"
                                                            >
                                                                 Update Photo
                                                            </label>

                                                            <input
                                                                 type="checkbox"
                                                                 id="my_modal_8"
                                                                 className="modal-toggle"
                                                            />
                                                            <div
                                                                 className="modal"
                                                                 role="dialog"
                                                            >
                                                                 <div className="modal-box">
                                                                      <input
                                                                           className="input input-bordered input-warning w-full max-w-xs"
                                                                           type="text"
                                                                           name="photo"
                                                                           id="photo"
                                                                      />
                                                                      <button
                                                                           onClick={
                                                                                handleUpdatePhoto
                                                                           }
                                                                           className="btn red ml-2"
                                                                      >
                                                                           update
                                                                      </button>
                                                                      {/* </form> */}
                                                                 </div>
                                                                 <label
                                                                      className="modal-backdrop"
                                                                      htmlFor="my_modal_8"
                                                                 >
                                                                      Close
                                                                 </label>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                         )}
                    </div>
                         <div className="mt-5">
                              <SectionTitle
                                   subHeading={"My Success"}
                              ></SectionTitle>
                         </div>
                    <div className="flex justify-center -mt-5">
                         <PieChart width={400} height={400}>
                              <Pie
                                   data={data}
                                   cx="50%"
                                   cy="50%"
                                   labelLine={false}
                                   label={renderCustomizedLabel}
                                   outerRadius={80}
                                   fill="#8884d8"
                                   dataKey="value"
                              >
                                   {data.map((entry, index) => (
                                        <Cell
                                             key={`cell-${index}`}
                                             fill={
                                                  COLORS[index % COLORS.length]
                                             }
                                        />
                                   ))}
                              </Pie>
                              <Legend />
                         </PieChart>
                    </div>
               </Container>
               {/* <form onSubmit={handleUpdateName}>
                         <input type="text" name="name" id="" />
                         <button className="btn btn-sm">update Name</button>
                         </form> */}
               {/* <form onSubmit={handleUpdatePhoto}>
                         <input type="text" name="photo" id="" />
                         <button className="btn btn-sm">update Image</button>
                         </form> */}
          </div>
     );
};

export default UserProfile;
