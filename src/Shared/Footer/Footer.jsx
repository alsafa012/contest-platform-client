import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Footer = () => {
     return (
          <div>
               <div>
                    <footer className="p-10 bg-[#272530] text-white font-medium rounded">
                         <Container>
                              <div className="footer">
                                   <aside>
                                        <img
                                             className="w-[80px] h-[80px]"
                                             // todo: add logo
                                             src=""
                                             alt=""
                                        />
                                        <p className="text-xl font-medium">
                                             Contest Platform
                                             <br />
                                             Providing reliable tech since 2022
                                        </p>
                                   </aside>
                                   <nav>
                                        <header className="footer-title">
                                             Services
                                        </header>
                                        <a className="link link-hover">
                                             Branding
                                        </a>
                                        <a className="link link-hover">
                                             Home Delivery
                                        </a>
                                        <a className="link link-hover">
                                             Online Booking
                                        </a>
                                   </nav>
                                   <nav>
                                        <header className="footer-title">
                                             Company
                                        </header>
                                        <Link
                                             to="/about"
                                             className="link link-hover"
                                        >
                                             About us
                                        </Link>
                                        <Link
                                             to="/contact"
                                             className="link link-hover"
                                        >
                                             Contact
                                        </Link>
                                        <a className="link link-hover">Jobs</a>
                                   </nav>
                                   <nav>
                                        <header className="footer-title">
                                             Legal
                                        </header>
                                        <a className="link link-hover">
                                             Terms of use
                                        </a>
                                        <a className="link link-hover">
                                             Privacy policy
                                        </a>
                                        <a className="link link-hover">
                                             Cookie policy
                                        </a>
                                   </nav>
                              </div>
                         </Container>
                    </footer>
               </div>
          </div>
     );
};

export default Footer;
