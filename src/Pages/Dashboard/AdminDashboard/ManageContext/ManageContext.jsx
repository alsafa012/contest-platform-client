import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";

const ManageContext = () => {
     const axiosSecure = useAxiosSecure();
     const { data: contexts = [], refetch } = useQuery({
          queryKey: ["contexts"],
          queryFn: async () => {
               const res = await axiosSecure.get("/createContext");
               return res.data;
          },
     });
     const handleUpdateStatus = (id) => {   
          const initialCount = contexts.find(count=>count._id === id);
          const finalParticipants = initialCount.participants;
          Swal.fire({
               title: "Are you sure?",
               text: "Want to confirm this Context?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, di it!"
             }).then((result) => {
               if (result.isConfirmed) {

                    const contextUpdateStatus = { status: "confirmed",finalParticipants };
                    axiosSecure
                         .patch(`/createContext/${id}`, contextUpdateStatus)
                         .then((res) => {
                              if (res.data.modifiedCount > 0) {
                                   Swal.fire({
                                        title: "Good job!",
                                        text: "context has been confirmed!",
                                        icon: "success",
                                   });
                                   // navigate(location.pathname && location.pathname);
                                   refetch();
                              }
                         });
                 
               }
             });
     };
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
          <div>
               {/* <p className="text-center font-bold text-2xl p-5">Total Context: {contexts.length}</p> */}
               <WebsiteTitle title={"Admin || Manage Contest"}></WebsiteTitle>

               <SectionTitle subHeading={`Total Context: ${contexts.length}`}></SectionTitle>
               <div>
                    <div className="overflow-x-auto text-black">
                         <table className="table">
                              {/* head */}
                              <thead>
                                   <tr className="font-medium text-black">
                                        <th></th>
                                        <th>Context Name</th>
                                        <th>Creator Email</th>
                                        <th>Update Context Status</th>
                                        <th>Delete Context</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {contexts.map((info, index) => (
                                        <tr className="hover" key={info._id}>
                                             <th>{index + 1}</th>
                                             <td>{info?.name}</td>
                                             <td>{info?.email}</td>
                                             <td>
                                                  {info.status === "confirmed" ? (
                                                       <button className="red btn btn-sm" disabled>
                                                            Confirmed
                                                       </button>
                                                  ) : (
                                                       <button
                                                            onClick={() =>
                                                                 handleUpdateStatus(
                                                                      info._id
                                                                 )
                                                            }
                                                            className="btn btn-ghost btn-xs bg-green-300"
                                                       >
                                                            {info?.status}
                                                       </button>
                                                  )}
                                             </td>
                                             <th>
                                                  <button
                                                       onClick={() =>
                                                            handleRemoveStatus(
                                                                 info._id
                                                            )
                                                       }
                                                       className="btn btn-ghost btn-xs red"
                                                  >
                                                       Remove
                                                  </button>
                                             </th>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default ManageContext;
