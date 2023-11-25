import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageContext = () => {
     const axiosSecure = useAxiosSecure();
     const { data: contexts = [], refetch } = useQuery({
          queryKey: ["contexts"],
          queryFn: async () => {
               const res = await axiosSecure.get("/allContexts");
               return res.data;
          },
     });
     const handleUpdateStatus = (id) => {
          const contextUpdateStatus = { status: "confirmed" };
          axiosSecure
               .patch(`/allContexts/${id}`, contextUpdateStatus)
               .then((res) => {
                    if (res.data.modifiedCount > 0) {
                         Swal.fire({
                              title: "Good job!",
                              text: "You clicked the button!",
                              icon: "success",
                         });
                         refetch();
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
                    axiosSecure.delete(`/allContexts/${id}`).then((res) => {
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
               <p className="text-center font-bold text-2xl p-5">Total Context: {contexts.length}</p>
               <div>
                    <div className="overflow-x-auto text-black">
                         <table className="table">
                              {/* head */}
                              <thead>
                                   <tr>
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
                                                  {info.status === "confirm" ? (
                                                       <span className="text-red-500">
                                                            Service Confirmed
                                                       </span>
                                                  ) : (
                                                       <button
                                                            onClick={() =>
                                                                 handleUpdateStatus(
                                                                      info._id
                                                                 )
                                                            }
                                                            className="btn btn-ghost btn-xs"
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
                                                       className="btn btn-ghost btn-xs"
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
