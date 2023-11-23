import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "../../../Shared/Container/Container";
const BannerSection = () => {
     return (
          <div className="text-center">
               <Container>
                    <Carousel>
                         <div>
                              <img src="http://localhost:5174/src/assets/home/01.jpg" />
                              {/* <p className="legend">Legend 1</p> */}
                         </div>
                         <div>
                              <img src="http://localhost:5174/src/assets/home/01.jpg" />
                              {/* <p className="legend">Legend 2</p> */}
                         </div>
                         <div>
                              <img src="http://localhost:5174/src/assets/home/01.jpg" />
                              {/* <p className="legend">Legend 3</p> */}
                         </div>
                         <div>
                              <img src="http://localhost:5174/src/assets/home/01.jpg" />
                              {/* <p className="legend">Legend 1</p> */}
                         </div>
                         <div>
                              <img src="http://localhost:5174/src/assets/home/01.jpg" />
                              {/* <p className="legend">Legend 2</p> */}
                         </div>
                         <div>
                              <img src="http://localhost:5174/src/assets/home/01.jpg" />
                              {/* <p className="legend">Legend 3</p> */}
                         </div>
                    </Carousel>
               </Container>
          </div>
     );
};

export default BannerSection;
