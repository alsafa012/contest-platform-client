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
                    <SectionTitle subHeading={"Payment"}></SectionTitle>
                    <div className="w-10/12 mx-auto">
                         <Elements stripe={stripePromise}>
                              <CheckOutForm></CheckOutForm>
                         </Elements>
                    </div>
               </Container>
          </div>
     );
};

export default PaymentPage;
