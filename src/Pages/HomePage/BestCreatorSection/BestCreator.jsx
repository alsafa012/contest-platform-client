import { Swiper, SwiperSlide } from "swiper/react";
// import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const BestCreator = () => {
     const [bestCreator,setBestCreator]=useState([])
     useEffect(() => {
          fetch("http://localhost:5000/bestCreator")
               .then((res) => res.json())
               .then((data) => setBestCreator(data));
     }, []);
     return (
          <div>
                  <div className="my-10 md:my-20">
               <SectionTitle
                    subHeading="Best Creator Collections"
               ></SectionTitle>
               <div className=" md:mx-24">
                    <Swiper
                         navigation={true}
                         modules={[Navigation]}
                         className="mySwiper"
                    >
                         {bestCreator.map((item) => (
                              <SwiperSlide key={item._id}>
                                   <div className="p-5 flex flex-col items-center justify-center mx-10 md:mx-24 space-y-3">
                                        {/* <Rating
                                             style={{ maxWidth: 180 }}
                                             value={item.rating}
                                             readOnly
                                        /> */}
                                        <figure>

                                        <img className="w-full h-[300px] object-fill" src={item.image} alt="" />
                                        </figure>
                                        <p className="text-xl text-[#CD9003] font-bold">{item.name}</p>
                                        <p className="bg-green-400 p-2 rounded-lg">{item.contestName}</p>
                                        <p className="text-center md:w-[60%]">{item.contestDescription}</p>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          </div>
          </div>
     );
};

export default BestCreator;