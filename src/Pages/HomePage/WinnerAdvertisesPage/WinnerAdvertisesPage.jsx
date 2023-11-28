import Container from "../../../Shared/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Components/hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const WinnerAdvertisesPage = () => {
     const axiosSecure = useAxiosSecure();
     const { data: createContext = [], refetch } = useQuery({
          queryKey: ["createContext"],
          queryFn: async () => {
               const res = await axiosSecure.get("/createContext");
               return res.data;
          },
     });
     // console.log(registerUser);
     const { data: registerUser = [] } = useQuery({
          queryKey: ["registerUser"],
          queryFn: async () => {
               const res = await axiosSecure.get("/registerUser");
               return res.data;
          },
     });
     console.log(registerUser);

     return (
          <Container>
               <div>
                    <SectionTitle
                         subHeading={"Winner Advertises"}
                    ></SectionTitle>
               </div>
               <Swiper
                    // slidesPerView={3}
                    // spaceBetween={30}
                    // pagination={{
                    //      clickable: true,
                    // }}
                    // modules={[Pagination]}
                    className="mySwiper my-10"
                    breakpoints={{
                         // when window width is >= 640px
                         640: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                         },
                         // when window width is >= 768px
                         768: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                         },
                         // when window width is >= 1024px
                         1024: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                         },
                    }}
               >
                    {createContext.map((info) => (
                         <SwiperSlide key={info._id} className="p-2">
                              <img
                                   className="mx-auto w-full h-[150px] mb-2"
                                   src={info.image}
                                   alt=""
                              />
                              {/* <div className=" md:flex-grow h-[100px] font-semibold mt-4">
                                   <div className="md:flex justify-between">
                                        <p>{info.name}</p>
                                        <p>
                                             Total participants:{" "}
                                             {info.participants}
                                        </p>
                                   </div>
                                   <p className="">
                                        Description: {info.description}
                                        <span className="text-red-600">
                                             ...
                                        </span>
                                   </p>
                              </div> */}

                              {/* <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                                   info
                              </h3> */}
                         </SwiperSlide>
                    ))}
               </Swiper>
               <SectionTitle subHeading={"Contest Winners"}></SectionTitle>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                    {registerUser.map(
                         (data) =>
                              data.status === "winner" && (
                                   <div key={data._id}>
                                        <div className="card card-compact bg-base-100 shadow-xl">
                                             <figure>
                                                  <img
                                                       className="w-full h-[150px]"
                                                       src={data?.contestImage}
                                                       alt="Shoes"
                                                  />
                                             </figure>
                                             <div className="card-body font-semibold space-y-2">
                                                  <h2 className="card-title">
                                                       Winner Name:{" "}
                                                       <span className="font-bold text-blue-400">
                                                            {data?.name}
                                                       </span>
                                                  </h2>
                                                  <p>{data?.contestName}</p>
                                                  <p className="text-green-400">
                                                       #{data?.contestTag}
                                                  </p>
                                                  <p>
                                                       Winning Amount: $
                                                       <span className="text-green-400 font-bold">
                                                            {
                                                                 data?.winnerPrizeMoney
                                                            }
                                                       </span>
                                                  </p>
                                                  <p>
                                                       Total Participants:{" "}
                                                       {data?.participants}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              )
                    )}
               </div>
          </Container>
     );
};

export default WinnerAdvertisesPage;
