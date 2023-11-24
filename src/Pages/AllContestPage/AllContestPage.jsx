// import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
// import Container from "../../Shared/Container/Container";

// const AllContestPage = () => {
//      return (
//           <Container>
//                <WebsiteTitle title={'All Contest Page'}></WebsiteTitle>
//                <div className="min-h-screen">
//                     <select name="" id="">
//                          <option value="food">Food</option>
//                          <option value="car">car</option>
//                          <option value="house">house</option>
//                     </select>
//                     <button className="btn">select</button>
//                     <p>All Contest Page</p>
//                </div>
//           </Container>
//      );
// };

// export default AllContestPage;


import React, { useState } from 'react';
import WebsiteTitle from '../../Components/WebsiteTitle/WebsiteTitle';
import Container from '../../Shared/Container/Container';

const AllContestPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(selectedOption);
  };

  return (
    <Container>
      <WebsiteTitle title={'All Contest Page'} />
      <div className="min-h-screen">
        <select name="" id="" onChange={handleSelectChange} value={selectedOption}>
          <option value="food">Food</option>
          <option value="car">Car</option>
          <option value="house">House</option>
        </select>
        <button className="btn" onClick={handleButtonClick}>
          Select
        </button>
        <p>All Contest Page</p>
      </div>
    </Container>
  );
};

export default AllContestPage;
