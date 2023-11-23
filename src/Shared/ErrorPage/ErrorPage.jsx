import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const ErrorPage = () => {
     return (
          <div>
               <Container>
                    <div className="mt-5 md:mt-10">
                         <div className="flex justify-center items-center gap-2 md:gap-5">
                              <img
                                   className=" w-[100px] lg:w-[300px] h-[120px] lg:h-[300px] object-fill"
                                   // src="https://i.ibb.co/6ng70Gv/01.png"
                                   alt=""
                              />
                              <img
                                   className=" w-[100px] lg:w-[300px] h-[120px] lg:h-[300px] object-fill"
                                   // src="https://i.ibb.co/BGxbz4V/02.png"
                                   alt=""
                              />
                              <img
                                   className=" w-[100px] lg:w-[300px] h-[120px] lg:h-[300px] object-fill"
                                   // src="https://i.ibb.co/6ng70Gv/01.png"
                                   alt=""
                              />
                         </div>

                         <p className="my-5 text-center text-2xl md:text-4xl font-bold">
                              Page Not Found.
                         </p>
                         <div className="flex justify-center">
                              <Link to="/">
                                   <button className="btn">BAck to home</button>
                              </Link>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default ErrorPage;
