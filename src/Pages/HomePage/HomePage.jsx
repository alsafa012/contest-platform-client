import BannerSection from "../../Components/HomePageComponents/BannerSection/BannerSection";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../Shared/Container/Container";
const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>

               <Container>
                    <BannerSection></BannerSection>
               </Container>
          </div>
     );
};

export default HomePage;
