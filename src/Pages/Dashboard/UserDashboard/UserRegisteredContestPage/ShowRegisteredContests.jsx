import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import Swal from "sweetalert2";

const ShowRegisteredContests = ({ info, refetch, index }) => {
     // status : winner
     const { _id, status, contestName, deadLine, task } = info || {};
     const axiosSecure = useAxiosSecure();
     const timeOver = new Date(deadLine) < new Date();
     const handleSubmit = (id) => {
          console.log(id);
          const updateTask = {task: 'Submitted'}
          axiosSecure.put(`/registerUser/${id}`, updateTask)
          .then(res=>{
               if(res.data.modifiedCount>0){
                    Swal.fire({
                         title: "Good job!",
                         text: "You clicked the button!",
                         icon: "success"
                       });
                       refetch();
               }
          })
     };
     return (
          <tr className="hover">
               <th>{index + 1}</th>
               <td>{contestName}</td>
               <td>
                    {timeOver ? (
                         <button disabled className="btn">
                              Time Over
                         </button>
                    ) : (
                         <button
                              onClick={() => handleSubmit(_id)}
                              className="btn red"
                         >
                              {/* sub */}
                              {task=== 'Submitted'? <button disabled className="">Submit done</button> : <button>Submit</button>}
                         </button>
                    )}
               </td>
               <td>{deadLine}</td>
               <td>{status}</td>
          </tr>
     );
};

export default ShowRegisteredContests;
