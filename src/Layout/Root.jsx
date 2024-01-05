import { Outlet } from 'react-router-dom';
import Navbar from '../Components/HomePageComponents/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
     return (
          <div>
               <Navbar></Navbar>
               {/* <div> */}
               <Outlet></Outlet>
               {/* </div> */}
               <Footer></Footer>
          </div>
     );
};

export default Root;