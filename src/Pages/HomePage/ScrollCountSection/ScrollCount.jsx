import Container from "../../../Shared/Container/Container";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const ScrollCount = () => {
     const [scrollTrigger, setScrollTrigger] = useState(false);
     return (
          <div>
               <Container>
                    <ScrollTrigger
                         onEnter={() => setScrollTrigger(true)}
                         onExit={() => setScrollTrigger(false)}
                    >
                         <div className="relative w-full">
                              <div className=" h-[300px] bg-[url('https://i.ibb.co/cTCW7LV/images-4.jpg')] bg-fixed bg-cover object-fill bg-center"></div>
                              <div className="absolute top-4 space-y-3 md:space-y-0 md:top-[45%] w-full md:flex md:justify-around text-center md:items-center md:gap-5">
                                   <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-50">
                                             {scrollTrigger && (
                                                  <CountUp
                                                       className="text-[#FF444A]"
                                                       start={0}
                                                       end={55}
                                                       duration={2.75}
                                                  />
                                             )}
                                             +
                                        </h2>
                                        <p className="text-3xl md:text-4xl font-bold text-yellow-50">
                                             Contest
                                        </p>
                                   </div>
                                   <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-50">
                                             <span>Up to</span>
                                             {scrollTrigger && (
                                                  <CountUp
                                                       className="text-[#FF444A] ml-3"
                                                       start={0}
                                                       end={80}
                                                       duration={2.75}
                                                  />
                                             )}
                                             +
                                        </h2>
                                        <p className="text-3xl md:text-4xl font-bold text-yellow-50">
                                             Participants
                                        </p>
                                   </div>
                                   <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-50">
                                             {scrollTrigger && (
                                                  <CountUp
                                                       className="text-[#FF444A]"
                                                       start={0}
                                                       end={30}
                                                       duration={2.75}
                                                  />
                                             )}
                                             +
                                        </h2>
                                        <p className="text-3xl md:text-4xl font-bold text-yellow-50">
                                             Creators
                                        </p>
                                   </div>
                              </div>
                         </div>
                         {/* </div> */}
                    </ScrollTrigger>
               </Container>
          </div>
     );
};

export default ScrollCount;
