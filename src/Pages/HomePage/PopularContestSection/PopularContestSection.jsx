import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";
const PopularContestSection = () => {
     const allContest = useLoaderData();
     // console.log(allContest);
     const shortedParticipated = [...allContest].sort(
          (a, b) => b.participants - a.participants
     );
     // console.log(shortedParticipated);

     return (
          <Container>
               <div className="my-10">
                    <SectionTitle subHeading={"Popular Section"}></SectionTitle>
               </div>

               {/* <div className="grid md:grid-cols-3 gap-5">
                         {shortedParticipated.slice(0,6).map((food) => (
                              <ShowTopSellingFoods
                                   key={food._id}
                                   food={food}
                              ></ShowTopSellingFoods>
                         ))}
                    </div> */}
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
                    {shortedParticipated.slice(0, 6).map((info) => (
                         <SwiperSlide key={info._id} className="p-2">
                              <img
                                   className="mx-auto w-full h-[150px] mb-2"
                                   src={info.image}
                                   alt=""
                              />
                              <div className=" md:flex-grow h-[100px] font-semibold mt-4">
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
                              </div>
                              <div className="text-center">
                                   <Link to={`/details/${info._id}`}>
                                        <button className="btn red w-full my-3">
                                             Details
                                        </button>
                                   </Link>
                              </div>
                              {/* <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                                   info
                              </h3> */}
                         </SwiperSlide>
                    ))}
               </Swiper>
               {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
               >
                    <SwiperSlide>
                         <img className="mx-auto" src="https://i.ibb.co/T4nXPQ1/images-1.jpg" alt="" />
                         <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                              Salads
                         </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="mx-auto" src="https://i.ibb.co/T4nXPQ1/images-1.jpg" alt="" />
                         <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                              pizzas
                         </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="mx-auto" src="https://i.ibb.co/T4nXPQ1/images-1.jpg" alt="" />
                         <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                              Soups
                         </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="mx-auto" src="https://i.ibb.co/T4nXPQ1/images-1.jpg" alt="" />
                         <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                              desserts
                         </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="mx-auto" src="https://i.ibb.co/T4nXPQ1/images-1.jpg" alt="" />
                         <h3 className="text-3xl uppercase font-bold text-white -mt-16 pb-20 text-center">
                              Salads
                         </h3>
                    </SwiperSlide>
               </Swiper> */}
          </Container>
     );
};

export default PopularContestSection;
