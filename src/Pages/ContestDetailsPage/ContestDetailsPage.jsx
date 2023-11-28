import { Link, useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import useAdmin from "../../Components/hook/useAdmin";
import useCreator from "../../Components/hook/useCreator";
import CountDown from "../../Shared/CountDown/CountDown";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/hook/useAxiosSecure";
import useAuth from "../../Components/hook/useAuth";

const ContestDetailsPage = () => {
     const data = useLoaderData();
     const [isAdmin] = useAdmin();
     const [isCreator] = useCreator();
     const axiosSecure = useAxiosSecure();
     const { data: registerUser = [], refetch } = useQuery({
          queryKey: ["registerUser"],
          queryFn: async () => {
               const res = await axiosSecure.get("/registerUser");
               return res.data;
          },
     });
     const { user } = useAuth();
     const {
          _id,
          name,
          tag,
          price,
          prizeMoney,
          deadLine,
          description,
          instruction,
          image,
          participants,
     } = data;

     // time counter
     const SubmissiondeadLine = new Date(deadLine).getTime();
     const today = new Date().getTime();
     const difference = SubmissiondeadLine - today;
     // console.log(today);
     // console.log(SubmissiondeadLine);
     // console.log(difference);
     console.log('auth',user?.email);
     const userExist = registerUser.filter(item=>item.email === user?.email)
     console.log( 'userExist',userExist);
     const isExist = userExist.find(item=>item.userId === _id);
     console.log('isExist',isExist);
         





     return (
          <div className="mb-10">
               <Container>
                    <WebsiteTitle title={"ContestDetailsPage"}></WebsiteTitle>
                    <div>
                         <div className=" bg-base-100 shadow-xl rounded-lg">
                              {/* <figure> */}
                              <img
                                   className="w-full h-[250px] flex justify-center mb-3 object-fill"
                                   src={image}
                                   alt="Shoes"
                              />
                              {/* </figure> */}
                              <div className="text-lg font-semibold px-5 ">
                                   <h2 className="">Contest-Name: {name}</h2>
                                   <p>
                                        <small className="text-blue-400">
                                             #{tag}
                                        </small>
                                   </p>
                                   <p>Entry Fee: ${price}</p>
                                   <p>
                                        Total participants: {participants}{" "}
                                        persons
                                   </p>
                                   <p>Prize Money: ${prizeMoney}</p>
                                   {/* <p>Contest deadLine:{deadLine}</p> */}
                                   <p>description: {description}...</p>
                                   {/* <p>description: {description.slice(0, 30)}...</p> */}
                                   <p className="text-red-400">
                                        Note: {instruction}
                                   </p>
                                   <div className="text-center">
                                        <h2 className="underline">
                                             Contest deadLine
                                        </h2>
                                        <CountDown
                                             deadLine={deadLine}
                                        ></CountDown>
                                   </div>
                                   <div className="text-center">
                                        {isAdmin ||
                                        isCreator ||
                                        difference < 1 || isExist ? (
                                             <button
                                                  disabled
                                                  className="red btn w-full my-3"
                                             >
                                                  Register Here
                                             </button>
                                        ) : (
                                             <Link to={`/payment/${_id}`}>
                                                  <button className="btn red w-full my-3">
                                                       Register Here
                                                  </button>
                                             </Link>
                                        )}
                                   </div>
                                   {/* { registerUser.map(data=>data?.register === 'success') ? 
                                 <div className="text-center">
                                        {isAdmin ||
                                        isCreator ||
                                        difference < 1 ? (
                                             <button
                                                  disabled
                                                  className="red btn w-full my-3"
                                             >
                                                  Register Here
                                             </button>
                                        ) : (
                                             <Link to={`/payment/${_id}`}>
                                                  <button className="btn red w-full my-3">
                                                       Register Here
                                                  </button>
                                             </Link>
                                        )}
                                   </div>
                                   :
                                    <p>ok</p>} */}
                                   {/* { registerUser.map(data=>data?.register === 'success') ?  */}
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default ContestDetailsPage;
