import Container from '../../../Shared/Container/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const PopularContestSection = () => {
     return (
          <Container>
               <SectionTitle subHeading={"Popular Section"}></SectionTitle>
               <Swiper
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
               </Swiper>


          </Container>

     );
};

export default PopularContestSection;