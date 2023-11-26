import BannerSection from "../../Components/HomePageComponents/BannerSection/BannerSection";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../Shared/Container/Container";
import ScrollCount from "./ScrollCountSection/ScrollCount";
import PopularContestSection from "./PopularContestSection/PopularContestSection";
const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>

               <Container>
                    <BannerSection></BannerSection>
                    <PopularContestSection></PopularContestSection>
                    <ScrollCount></ScrollCount>
               </Container>
          </div>
     );
};

export default HomePage;
