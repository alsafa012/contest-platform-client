import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import Container from "../../Shared/Container/Container";
import { useEffect, useState } from "react";
import ShowAllContextCards from "./ShowAllContextCards";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AllContestPage = () => {
     const [allData, setAllData] = useState([]); 
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
