import { useQuery } from "@tanstack/react-query";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import Container from "../../../../Shared/Container/Container";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import useAuth from "../../../../Components/hook/useAuth";
import Swal from "sweetalert2";

const ContestSubmissionPage = () => {
     const { user } = useAuth();
     const axiosSecure = useAxiosSecure();
     const { refetch, data: registeredUser = [] } = useQuery({
          queryKey: ["registerUser"],
          queryFn: async () => {
               const res = await axiosSecure.get("/registerUser");
               return res.data;
          },
     });
     console.log(registeredUser);
     const handleUserWin = (id) => {

          const filterUser = registeredUser.find(item=> item?._id === id);
          const contestName = filterUser?.contestName;
          const isWinner = registeredUser.filter(item=> item?.contestName === contestName);
          const isExist = isWinner.find(item=> item?.status === 'winner');
          if(!isExist) {
               const updateWinnerUser = { confirm: 'winner' };
               console.log(updateWinnerUser);
               axiosSecure.patch(`/registerUser/${id}`, updateWinnerUser)
               .then((res) => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                         Swal.fire({
                              title: "Good job!",
                              text: "is now contest winner",
                              icon: "success",
                         });
     
                         refetch();
                    }
               });
               
          }
          else{
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Winner already announced!",
                  });
          }


          // const updateWinnerUser = { confirm: 'winner' };
          // console.log(updateWinnerUser);
          // axiosSecure.patch(`/registerUser/${id}`, updateWinnerUser)
          // .then((res) => {
          //      console.log(res.data);
          //      if (res.data.modifiedCount > 0) {
          //           Swal.fire({
          //                title: "Good job!",
          //                text: "is now contest winner",
          //                icon: "success",
          //           });

          //           refetch();
          //      }
          // });
     };
     return (
          <div>
               <Container>
                    <WebsiteTitle title={"Submission Page"}></WebsiteTitle>
                    <div className="my-8">
                         <SectionTitle
                              subHeading={"Contest Submission Page"}
                         ></SectionTitle>
                    </div>
                    <div>
                         <div className="overflow-x-auto">
                              <table className="table">
                                   
                                   <thead>
                                        <tr className="font-medium text-black">
                                             {/* <th></th> */}
                                             <th>Contest Name</th>
                                             <th>Participator MAne</th>
                                             <th>Participator Email</th>
                                             <th>Task Submission</th>
                                             <th>Winner Announce</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {registeredUser.map(
                                             (info, index) =>
                                                  info?.creatorEmail ===
                                                       user?.email && (
                                                       <tr
                                                            className="hover"
                                                            key={info._id}
                                                       >
                                                            {/* <th>{index + 1}</th> */}
                                                            <td>
                                                                 {
                                                                      info?.contestName
                                                                 }
                                                            </td>
                                                            <td>
                                                                 {info.name}
                                                            </td>
                                                            <td>
                                                                 {info.email}
                                                            </td>
                                                            <td>
                                                                 {info.task}
                                                            </td>
                                                            <td>
                                                                 {info.status ===
                                                                 "winner" ? (
                                                                      <button className="btn bg-green-300 text-black border-none">
                                                                           Winner
                                                                      </button>
                                                                 ) : (
                                                                      <button 
                                                                      onClick={()=>handleUserWin(info._id)}
                                                                      className="btn red">
                                                                           {
                                                                                info?.status
                                                                           }
                                                                      </button>
                                                                 )}
                                                            </td>
                                                       </tr>
                                                  )
                                        )}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default ContestSubmissionPage;












