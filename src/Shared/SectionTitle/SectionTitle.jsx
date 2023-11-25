
const SectionTitle = ({ subHeading }) => {
     return (
          <div className="text-center space-y-2 w-[80%] md:w-1/2 mx-auto mb-10">
               {/* <h1 className="text-[#D99904] mb-3"> ---{heading}--- </h1> */}
               <p className="text-2xl font-bold border-y-4 md:text-3xl py-4">{subHeading}</p>
          </div>
     );
};

export default SectionTitle;