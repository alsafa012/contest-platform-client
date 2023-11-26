import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../../Shared/Container/Container';
import WebsiteTitle from '../../Components/WebsiteTitle/WebsiteTitle';

const ContestDetailsPage = () => {
     const data = useLoaderData();
     console.log(data);
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
     return (
          <div>
               <Container>
                    <WebsiteTitle title={"ContestDetailsPage"}></WebsiteTitle>
               </Container>
               <div>
               <div className=" bg-base-100 shadow-xl rounded-lg">
                    {/* <figure> */}
                    <img
                         className="w-full h-[250px] flex justify-center mb-3 object-fill"
                         src={image}
                         alt="Shoes"
                    />
                    {/* </figure> */}
                    <div className="text-lg font-medium px-5">
                         <h2 className="">Context-Name: {name}</h2>
                         <p>Context Tag: {tag}</p>
                         <p>Entry Fee: {price}TK</p>
                         <p>Total participants: {participants}persons</p>
                         <p>Description: {description}TK</p>
                         <p>Prize Money: {prizeMoney}</p>
                         <p>Context deadLine:{deadline}</p>
                         {/* <p>description: {description.slice(0, 30)}...</p> */}
                         <p className="text-red-400">Note: {instruction}</p>
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
          </div>
     );
};

export default ContestDetailsPage;