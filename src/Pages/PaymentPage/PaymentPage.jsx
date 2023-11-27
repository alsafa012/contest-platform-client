import React from "react";
import Container from "../../Shared/Container/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const PaymentPage = () => {
     const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE);
     return (
          <div className="min-h-screen">
               <Container>
                    <WebsiteTitle title={"Payment Page"}></WebsiteTitle>
                    <div className="my-10">
                    <SectionTitle subHeading={"Payment"}></SectionTitle>

                    </div>
                    <div className="md:w-1/2 mx-auto border ">
                         <Elements stripe={stripePromise}>
                              <CheckOutForm></CheckOutForm>
                         </Elements>
                    </div>
               </Container>
          </div>
     );
};

export default PaymentPage;
