import Swal from "sweetalert2";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import useAdmin from "../../Components/hook/useAdmin";
import useCreator from "../../Components/hook/useCreator";
import Container from "../../Shared/Container/Container";

const AllContestPage = () => {
  const [isAdmin] = useAdmin();
  const [isCreator]=useCreator();
  console.log(isAdmin);
  console.log(isCreator);
  const admin =  () =>{
    Swal.fire({
      title: "Good job!",
      text: "admin",
      icon: "success"
    });
  }
  const creator =  () =>{
    Swal.fire({
      title: "Good job!",
      text: "creator",
      icon: "success"
    });
  }
  const user =  () =>{
    Swal.fire({
      title: "Good job!",
      text: "user",
      icon: "success"
    });
  }
     return (
          <Container>
               <WebsiteTitle title={'All Contest Page'}></WebsiteTitle>
               <div className="min-h-screen">
                {isAdmin && <button onClick={admin} className="btn m-5">isadmin</button>}
               { isCreator && <button onClick={creator} className="btn m-5">iscreator</button>}
              { !isAdmin && !isCreator && <button onClick={user} className="btn m-5">isUser</button>}
               </div>
          </Container>
     );
};

export default AllContestPage;


// import React, { useState } from 'react';
// import WebsiteTitle from '../../Components/WebsiteTitle/WebsiteTitle';
// import Container from '../../Shared/Container/Container';

// const AllContestPage = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log(selectedOption);
//   };

//   return (
//     <Container>
//       <WebsiteTitle title={'All Contest Page'} />
//       <div className="min-h-screen">
//         <select name="" id="" onChange={handleSelectChange} value={selectedOption}>
//           <option value="food">Food</option>
//           <option value="car">Car</option>
//           <option value="house">House</option>
//         </select>
//         <button className="btn" onClick={handleButtonClick}>
//           Select
//         </button>
//         <p>All Contest Page</p>
//       </div>
//     </Container>
//   );
// };

// export default AllContestPage;
