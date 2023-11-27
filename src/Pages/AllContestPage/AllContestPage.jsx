import Swal from "sweetalert2";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import useAdmin from "../../Components/hook/useAdmin";
import useCreator from "../../Components/hook/useCreator";
import Container from "../../Shared/Container/Container";
import { useEffect, useState } from "react";
import ShowAllContextCards from "./ShowAllContextCards";
import useAxiosPublic from "../../Components/hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/hook/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AllContestPage = () => {
     const [allData, setAllData] = useState([]);
     // const axiosPublic = useAxiosPublic();
     // // const axiosSecure = useAxiosSecure()
     // const { data: allData = [], refetch } = useQuery({
     //      queryKey: ["myContexts"],
     //      queryFn: async () => {
     //           const res = await axiosPublic.get("/createContext");
     //           return res.data;
     //      },
     // });
     useEffect(() => {
          fetch("http://localhost:5000/createContext")
               .then((res) => res.json())
               .then((data) => setAllData(data));
     }, []);
     console.log(allData);

     return (
          <Container>
               <WebsiteTitle title={"All Contest Page"}></WebsiteTitle>
               <div className="min-h-screen">
                    <div className="mt-8 mb-5">
                         <SectionTitle
                              subHeading={"All Contests"}
                         ></SectionTitle>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl">
                         {allData.map(
                              (data) =>
                                   data.status === "confirmed" && (
                                        <ShowAllContextCards
                                             key={data._id}
                                             data={data}
                                        ></ShowAllContextCards>
                                   )
                         )}
                    </div>
               </div>
          </Container>
     );
};

export default AllContestPage;
