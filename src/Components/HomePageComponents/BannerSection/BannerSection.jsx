// import Container from "../../../Shared/Container/Container";
import "../BannerSection/BannerSection.css";
const BannerSection = () => {
     return (
          <div className="text-center">
               {/* <Container> */}
                    <div
                         className="hero min-h-screen"
                         style={{
                              backgroundImage:
                                   "url(https://i.ibb.co/sQghWrf/Metallic-pieces-in-design-with-blue-stroke-gaming-background.jpg)",
                         }}
                    >
                         <div className="hero-overlay bg-opacity-60"></div>
                         <div className="hero-content text-center text-neutral-content">
                              <div className="max-w-md">
                                   <h1 className="mb-5 text-2xl md:text-5xl font-bold ">
                                        Hello Welcome to Contest HUB
                                        {/* <span
                                             className="styles-module_blinking__9VXRT styles-module_blinkingCursor__yugAC"
                                             style={{ color: 'inherit' }}
                                        > */}
                                        {/* </span> */}
                                   </h1>
                                   <p>
                                        The ultimate platform where creativity
                                        knows no bounds. Unleash your talents,
                                        participate in exciting contests, and
                                        let your imagination soar...
                                   </p>
                                   <div className="mt-4 md:mt-5 flex justify-center">
                                        <input
                                             id="inputField"
                                             type="text"
                                             name="name"
                                             placeholder="Search here...."
                                             className="input border-none w-3/5 md:w-[80%] px-2 py-3 md:px-4 md:py-4 text-black rounded-l-2xl"
                                        />
                                        <button
                                             // onClick={handleClickBtn}
                                             className="bg-[#FF444A] text-[#FFFFFF] font-semibold  px-2 py-3 md:px-3 md:py-3 -ml-2 rounded-r-2xl"
                                        >
                                             Search
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               {/* </Container> */}
          </div>
     );
};

export default BannerSection;
