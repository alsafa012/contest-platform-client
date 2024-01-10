import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import Swal from "sweetalert2";

const ShowRegisteredContests = ({ info, refetch, index }) => {
     // status : winner
     const { _id, status, contestName, deadLine, task } = info || {};
     const axiosSecure = useAxiosSecure();
     const timeOver = new Date(deadLine) < new Date();
     const handleSubmit = (id) => {
          console.log(id);
          const updateTask = { task: "Submitted" };
          axiosSecure.put(`/registerUser/${id}`, updateTask).then((res) => {
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
     const handleTimeOver = () => {
          Swal.fire({
               icon: "error",
               title: "Time Over",
               text: "Cannot Submit",
          });
     };
     return (
          <tr className="hover">
               <th>{index + 1}</th>
               <td>{contestName}</td>
               <td>
                    {timeOver ? (
                         <button onClick={handleTimeOver} className="btn red">
                              Time Over
                         </button>
                    ) : (
                         <button
                              onClick={() => handleSubmit(_id)}
                              className="btn red"
                         >
                              {/* sub */}
                              {task === "Submitted" ? (
                                   <button disabled className="">
                                        Submit done
                                   </button>
                              ) : (
                                   <button>Submit</button>
                              )}
                         </button>
                    )}
               </td>
               <td>{deadLine}</td>
               <td>
                    <button className="red btn btn-sm">{status}</button>
               </td>
          </tr>
     );
};

export default ShowRegisteredContests;
