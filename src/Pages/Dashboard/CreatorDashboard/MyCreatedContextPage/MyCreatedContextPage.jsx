import { useEffect, useState } from "react";
import useAuth from "../../../../Components/hook/useAuth";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import Container from "../../../../Shared/Container/Container";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useCreatedContext from "../../../../Components/hook/useCreatedContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import { Link, useLocation } from "react-router-dom";

const MyCreatedContextPage = () => {
     const [createdContext, setCreatedContext] = useState([]);
     const location = useLocation()
     // console.log(location);
     const axiosSecure = useAxiosSecure();
     console.log(createdContext);
     const { user } = useAuth();
     // const myAddedContext = useLoaderData();
     // console.log(myAddedContext);
     // console.log(loggedUserData);
     // useEffect(() => {
     //      if (user) {
     //           const filterUser = myAddedContext.filter((person) => person?.email === user?.email);
     //           setLoggedUserData(filterUser);
     //      }
     // }, [myAddedContext, user]);
     // const axiosSecure = useAxiosSecure();
     // const { refetch, data: myAddedContext = [] } = useQuery({
     //      queryKey: ["contexts"],
     //      queryFn: async () => {
     //           const res = await axiosSecure.get("/createContext");
     //           return res.data;
     //      },
     // });
     const [myAddedContext, refetch] = useCreatedContext();
     useEffect(() => {
          if (user) {
               const filterUser = myAddedContext.filter(
                    (person) => person?.email === user?.email
               );
               setCreatedContext(filterUser);
          }
     }, [myAddedContext, user]);
     console.log(myAddedContext);

     // const handleUpdateStatus = (id) => {
     //      Swal.fire({
     //           title: "Are you sure?",
     //           text: "Want to confirm this Context?",
     //           icon: "warning",
     //           showCancelButton: true,
     //           confirmButtonColor: "#3085d6",
     //           cancelButtonColor: "#d33",
     //           confirmButtonText: "Yes, di it!",
     //      }).then((result) => {
     //           if (result.isConfirmed) {
     //                const contextUpdateStatus = { status: "confirmed" };
     //                axiosSecure
     //                     .patch(`/createContext/${id}`, contextUpdateStatus)
     //                     .then((res) => {
     //                          if (res.data.modifiedCount > 0) {
     //                               Swal.fire({
     //                                    title: "Good job!",
     //                                    text: "context has been confirmed!",
     //                                    icon: "success",
     //                               });
     //                               refetch();
     //                          }
     //                     });
     //           }
     //      });
     // };

     const handleRemoveStatus = (id) => {
          Swal.fire({
               title: "Are you sure?",
               text: "This context will be remove the from the database",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, Remove this context!",
          }).then((result) => {
               if (result.isConfirmed) {
                    axiosSecure.delete(`/createContext/${id}`).then((res) => {
                         if (res.data.deletedCount > 0) {
                              Swal.fire({
                                   title: "Deleted!",
                                   text: "This context has been removed successfully.",
                                   icon: "success",
                              });
                         }
                         refetch();
                    });
               }
          });
     };
     return (
          <Container>
               <WebsiteTitle title={"My Created Contests"}></WebsiteTitle>
               <SectionTitle subHeading={"My Created Context"}></SectionTitle>
               <div className="">
                    <h2>{createdContext.length}</h2>

                    <div className="overflow-x-auto text-black">
                         <table className="table">
                              {/* head */}
                              <thead>
                                   <tr className="font-medium text-black">
                                        <th></th>
                                        <th>Contest Name</th>
                                        <th>Creator Tag</th>
                                        <th>Update Contest Status</th>
                                        <th>Delete Contest</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {createdContext.map((info, index) => (
                                        <tr className="hover" key={info._id}>
                                             <th>{index + 1}</th>
                                             <td>{info?.name}</td>
                                             <td>{info?.tag}</td>
                                             <td>
                                                  {info.status ===
                                                  "confirmed" ? (
                                                       <button
                                                            className="red btn btn-sm"
                                                            disabled
                                                       >
                                                            Confirmed by Admin
                                                       </button>
                                                  ) : (
                                                       <Link state={location?.pathname} to={`/updateContest/${info._id}`}>
                                                            <button
                                                                 // onClick={() =>
                                                                 //      handleUpdateStatus(
                                                                 //           info._id
                                                                 //      )
                                                                 // }
                                                                 className="btn btn-ghost btn-xs bg-green-300"
                                                            >
                                                                 Update
                                                            </button>
                                                       </Link>
                                                  )}
                                             </td>
                                             <th>
                                                  {info.status ===
                                                  "confirmed" ? (
                                                       <button
                                                            className="red btn btn-sm"
                                                            disabled
                                                       >
                                                            Confirmed by Admin
                                                       </button>
                                                  ) : (
                                                       <button
                                                            onClick={() =>
                                                                 handleRemoveStatus(
                                                                      info._id
                                                                 )
                                                            }
                                                            className="btn btn-ghost btn-xs bg-green-300"
                                                       >
                                                            Remove
                                                       </button>
                                                  )}
                                             </th>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
                    {/* <div>
                         {createdContext.map((context, index) => (
                              <ShowMyCreatedContext
                                   key={context._id}
                                   context={context}
                                   index={index}
                              ></ShowMyCreatedContext>
                         ))}
                    </div> */}
               </div>
          </Container>
     );
};

export default MyCreatedContextPage;
