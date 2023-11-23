import { Helmet } from "react-helmet-async";

const WebsiteTitle = ({ title }) => {
     return (
          <div>
               <Helmet>
                    <title>{title}</title>
               </Helmet>
          </div>
     );
};

export default WebsiteTitle;
