import React from "react";
import Container from "../../../../Shared/Container/Container";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import useAuth from "../../../../Components/hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const UserWinningContestPage = () => {
     const { user } = useAuth();
     const axiosSecure = useAxiosSecure();
     const { data: registerUser = [], refetch } = useQuery({
          queryKey: ["registerUser"],
          queryFn: async () => {
               const res = await axiosSecure.get("/registerUser");
               return res.data;
          },
     });
     console.log(registerUser);

     const userContest = registerUser.filter(
          (info) => info?.email === user?.email
     );
     console.log(userContest);
     const contestWinner = userContest.filter(
          (info) => info?.status === "winner"
     );
     console.log(contestWinner);

     return (
          <div>
               <Container>
                    <WebsiteTitle title={"My Winning Contest"}></WebsiteTitle>

                    <div className="mb-5 mt-2">
                         <SectionTitle
                              subHeading={"My Winning Contest"}
                         ></SectionTitle>
                    </div>
                    {contestWinner.length === 0 ? (
                         <div>
                              <p className="text-3xl text-red-400 font-bold text-center">You hame not participate any contest yet..!</p>
                         </div>
                    ) : (
                         <div>
                              {contestWinner.map((data) => (
                                   <div key={data._id}>
                                        <div className="space-y-2 m-2">
                                             <h1 className="font-medium text-2xl">
                                                  *Contest Name:{" "}
                                                  {data.contestName}
                                             </h1>
                                             <p className="font-bold text-2xl text-green-500">
                                                  *You are the {data.status} of
                                                  this Contest..!!
                                             </p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    )}
               </Container>
          </div>
     );
};

export default UserWinningContestPage;
