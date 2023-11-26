import React from "react";
import { Link } from "react-router-dom";

const ShowAllContextCards = ({ data }) => {
     const {
          _id,
          name,
          tag,
          price,
          prizeMoney,
          deadline,
          description,
          instruction,
          image,
          participants,
          status,
     } = data;
     console.log(data);
     return (
          <div>
               <div className=" bg-base-100 shadow-xl rounded-lg">
                    {/* <figure> */}
                    <img
                         className="w-full h-[200px] flex justify-center mb-3"
                         src={image}
                         alt="Shoes"
                    />
                    {/* </figure> */}
                    <div className="text-lg font-medium px-5">
                         <h2 className="">Context-Name: {name}</h2>
                         <p>Context Tag: {tag}</p>
                         <p>Total Participants: {participants} persons</p>
                         <p>Entry Fee: {price}TK</p>
                         <p>Prize Money: {prizeMoney}TK</p>
                         <p>description: {description.slice(0, 30)}...</p>
                         {/* <p className="text-red-400">Note: {instruction}</p> */}
                         <div className="text-center">
                              <Link to={`/details/${_id}`}>
                                   <button className="btn red w-full my-3">
                                        Details
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowAllContextCards;
