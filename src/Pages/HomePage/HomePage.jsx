import BannerSection from "../../Components/HomePageComponents/BannerSection/BannerSection";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../Shared/Container/Container";
import ScrollCount from "./ScrollCountSection/ScrollCount";
const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>

               <Container>
                    <BannerSection></BannerSection>
                    <ScrollCount></ScrollCount>
               </Container>
          </div>
     );
};

export default HomePage;
