import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Components/hook/useAuth";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import Container from "../../../../Shared/Container/Container";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import ShowRegisteredContests from "./ShowRegisteredContests";

const UserRegisteredContestPage = () => {
     const { user } = useAuth();
     const axiosSecure = useAxiosSecure();
     const { data: registerUser = [], refetch } = useQuery({
          queryKey: ["registerUser"],
          queryFn: async () => {
               const res = await axiosSecure.get("/registerUser");
               return res.data;
          },
     });
     const participants = registerUser.filter(
          (item) => item?.email === user?.email
     );
     const allContest = participants.sort(
          (a, b) => new Date(a.deadLine) - new Date(b.deadLine)
     );

     return (
          <div>
               <Container>
                    <WebsiteTitle
                         title={"My Registered Contest"}
                    ></WebsiteTitle>
                    <SectionTitle
                         subHeading={"My Registered Contest"}
                    ></SectionTitle>
                    <div>
                         <div className="overflow-x-auto text-black">
                              <table className="table">
                                   {/* head */}
                                   <thead>
                                        <tr className="font-medium text-black">
                                             <th></th>
                                             <th>Context Name</th>
                                             <th>Submission Task</th>
                                             <th>Contest Deadline</th>
                                             <th>Result</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {allContest.map((info, index) => (
                                             <ShowRegisteredContests
                                                  key={info._id}
                                                  index={index}
                                                  info={info}
                                                  refetch={refetch}
                                             ></ShowRegisteredContests>
                                        ))}
                                        
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default UserRegisteredContestPage;
