import { CiLocationOn } from "react-icons/ci";
import { PiPhoneDuotone } from "react-icons/pi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoIssueReopened } from "react-icons/go";
// import Footer from "../../Shared/Footer/Footer";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const ContactUsPage = () => {
     return (
          <div>
               <div>
                    <div className="text-center my-5">
                         <SectionTitle subHeading={"Contact Us"}></SectionTitle>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center my-10">
                         <div className="space-y-4 shadow-xl rounded-lg p-5">
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <CiLocationOn></CiLocationOn>
                                   </p>
                              </div>
                              <h2 className="text-xl font-medium">
                                   Postal Address
                              </h2>
                              <div className="font-light text-lg">
                                   <p>Contest Hub</p>
                                   <p>85/7 Mohammadpur </p>
                                   <p>Dhaka, ON BD</p>
                              </div>
                         </div>
                         <div className="space-y-4 shadow-xl rounded-lg p-5">
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <AiOutlineFieldTime></AiOutlineFieldTime>
                                   </p>
                              </div>

                              <h2 className="text-xl font-medium">
                                   Phone & E-mail
                              </h2>
                              <div className="font-light text-lg">
                                   <p className="text-black">
                                        Phone:018456....9
                                   </p>
                                   <p>Fax: 1-800-69-45</p>
                                   <p>
                                        <a
                                             className="text-black underline hover:no-underline"
                                             href="#"
                                        >
                                             alsafa024@gmail.com
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <div className=" space-y-4 shadow-xl rounded-lg p-5">
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <PiPhoneDuotone></PiPhoneDuotone>
                                   </p>
                              </div>
                              <h2 className="text-xl font-medium">
                                   Open Hours
                              </h2>
                              <div className="font-light text-lg">
                                   <p>Monday – Friday</p>
                                   <p>8.00 am – 5.00 pm</p>
                                   Weekend Closed
                                   <p></p>
                              </div>
                         </div>
                         <div className=" space-y-4 shadow-xl rounded-lg p-5">
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <GoIssueReopened></GoIssueReopened>
                                   </p>
                              </div>
                              <h2 className="text-xl font-medium">Contests</h2>
                              <div className="font-light text-lg">
                                   <p>Mornings, 8 am – 12 noon</p>
                                   <p>Afternoons, 1 pm – 5 pm</p>
                                   <p>FULL Day, 8 am – 5 pm</p>
                              </div>
                         </div>
                    </div>
                    {/* <Footer></Footer> */}
               </div>
          </div>
     );
};

export default ContactUsPage;
