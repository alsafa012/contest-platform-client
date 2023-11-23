import Container from "../../../Shared/Container/Container";
const BannerSection = () => {
     return (
          <div className="text-center">
               <Container>
                    <div
                         className="hero min-h-screen"
                         style={{
                              backgroundImage:
                                   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                         }}
                    >
                         <div className="hero-overlay bg-opacity-60"></div>
                         <div className="hero-content text-center text-neutral-content">
                              <div className="max-w-md">
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
                                   <h1 className="mb-5 text-5xl font-bold">
                                        Hello there
                                   </h1>
                                   <p className="mb-5">
                                        Provident cupiditate voluptatem et in.
                                        Quaerat fugiat ut assumenda excepturi
                                        exercitationem quasi. In deleniti eaque
                                        aut repudiandae et a id nisi.
                                   </p>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default BannerSection;
