import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/hook/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Components/hook/useAuth";
import moment from "moment/moment";
import Swal from "sweetalert2";
import Container from "../../Shared/Container/Container";

const CheckOutForm = () => {
     const [errorMessage, setErrorMessage] = useState("");
     const [clientSecret, setClientSecret] = useState("");
     const [transactionId, setTransactionId] = useState("");
     const stripe = useStripe();
     const elements = useElements();
     const axiosSecure = useAxiosSecure();
     const { user } = useAuth();
     const { price, _id ,participants , status ,name,email,deadLine } = useLoaderData();
     const totalPrice = parseFloat(price).toFixed(2);
     console.log(participants);
     const initialParticipants = parseInt(participants);
     const finalParticipants = initialParticipants + 1;
     // const status = status 
     const totalParticipants = {finalParticipants,status}
     console.log(totalParticipants);
     
     useEffect(() => {
          axiosSecure
               .post("/create-payment-intent", { price: totalPrice })
               .then((res) => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
               });
     }, [axiosSecure, totalPrice]);

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (!stripe || !elements) {
               return;
          }
          const card = elements.getElement(CardElement);

          if (card === null) {
               return;
          }
          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: "card",
               card,
          });
          if (error) {
               console.log("payment err", error);
               setErrorMessage(error.message);
          } else {
               console.log("payment method", paymentMethod);
               setErrorMessage("");
          }
          // confirm payment
          const { paymentIntent, error: confirmError } =
               await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                         card: card,
                         billing_details: {
                              email: user?.email || "anonymous",
                              name: user?.displayName || "anonymous",
                         },
                    },
               });
          if (confirmError) {
               console.log("confirm Error");
          } else {
               console.log("paymentIntend", paymentIntent);
               if (paymentIntent.status === "succeeded") {
                    console.log("transaction id", paymentIntent.id);
                    setTransactionId(paymentIntent.id);
                    const registerUser = {
                         email: user?.email,
                         name: user?.displayName,
                         date: moment().format("MMMM Do YYYY, h:mm:ss a"),
                         contestName:name,
                         userId: _id,
                         creatorEmail:email,
                         status: "pending",
                         register:'success',
                         transactionId: paymentIntent.id,
                         task:'pending',
                         deadLine: deadLine,
                    };
                    console.log(registerUser);
                    axiosSecure
                         .post("registerUser", registerUser)
                         .then((res) => {
                              if (res.data.insertedId) {
                                   Swal.fire({
                                        title: "Good job!",
                                        text: "Registration successfully",
                                        icon: "success",
                                   });
                                   console.log(res.data);
                              }
                         });
                         // increment Participants
                         axiosSecure.patch(`/createContext/${_id}`,totalParticipants)
                         .then(res=>{
                              console.log("participants",res.data);
                         })
               }
          }
     };
     return (

          <Container>

          <form onSubmit={handleSubmit}>
               <CardElement
                    options={{
                         style: {
                              base: {
                                   fontSize: "16px",
                                   color: "#424770",
                                   "::placeholder": {
                                        color: "#aab7c4",
                                   },
                              },
                              invalid: {
                                   color: "#9e2146",
                              },
                         },
                    }}
               />
               <div className="text-center">
                    
               <button
                    className="btn red w-[40%] mt-16 mb-2"
                    type="submit"
                    disabled={!stripe || !clientSecret}
               >
                    Pay
               </button>
               </div>
               <p className="text-red-500 text-center">{errorMessage}</p>
               {transactionId && (
                    <p className="text-green-600 text-center">
                         Your Transaction Id:{transactionId}
                    </p>
               )}
          </form>
          </Container>

     );
};

export default CheckOutForm;
