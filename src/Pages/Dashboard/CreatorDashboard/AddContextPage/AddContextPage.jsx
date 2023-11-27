import Container from "../../../../Shared/Container/Container";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Components/hook/useAxiosPublic";
// import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import useAuth from "../../../../Components/hook/useAuth";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddContextPage = () => {
     const {user}=useAuth();
     const { register, handleSubmit ,reset } = useForm();
     const axiosPublic = useAxiosPublic();
     const axiosSecure = useAxiosSecure();
     const onSubmit =async (data) => {
          console.log(data);
          //image upload to imgbb and then get an url
          const imageFile = {image: data.image[0]}
         const res = await axiosPublic.post(image_hosting_api,imageFile,{
          headers: {'Content-Type': 'multipart/form-data'}
         });
         if(res.data.success){
          // send the menuitem data to the data with the image url
          const addContext ={
               name:data.name,
               tag:data.tag,
               email:user?.email,
               price:parseFloat(data.price),
               prizeMoney:parseFloat(data.prizeMoney),
               deadLine:data.date,
               description:data.description,
               instruction:data.instruction,
               image: res.data.data.display_url,
               participants:0,
               status:'pending'

          };
          console.log(addContext);
          const contextRes = await axiosSecure.post('/createContext', addContext);
          console.log(contextRes.data);
          console.log('object');
          if(contextRes.data.insertedId){
               Swal.fire({
                    title: "Good job!",
                    text: `${data.name} contest added Successfully`,
                    icon: "success"
                  });
          }
          reset();
          
         }
         console.log(res.data);

     };

     return (
          <Container>
               <WebsiteTitle title={"Creator || Add Contest"}></WebsiteTitle>
               <SectionTitle subHeading={"Create A Contest"}></SectionTitle>
              <div className="bg- p-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-3 font-medium">
                        <div className="grid md:grid-cols-2 md:gap-5">
                          {/* context name */}
                          <div className="form-control w-full">
                              <label className="label">
                                   <span className="label-text">
                                   Contest Name*
                                   </span>
                              </label>
                              <input
                                   {...register("name", { required: true })}
                                   type="text"
                                   placeholder="Context Name"
                                   className="input input-bordered w-full"
                              />
                         </div>                         
                              {/*Context tags */}
                              <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text">
                                        Contest Type/Tags*
                                        </span>
                                   </label>

                                   <select
                                        {...register("tag", {
                                             required: true,
                                        })}
                                        className="select select-bordered w-full"
                                   >
                                        <option value="business">Business</option>
                                        <option value="medical">Medical</option>
                                        <option value="article">Article Writing</option>
                                        <option value="gaming">Gaming</option>
                                   </select>
                              </div>
                               {/*context price */}
                               <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text">
                                        Contest Entry Fee*
                                        </span>
                                   </label>
                                   <input
                                        {...register("price", {
                                             required: true,
                                        })}
                                        type="text"
                                        placeholder="Price"
                                        className="input input-bordered w-full"
                                   />
                              </div>
                               {/*context Prize Money */}
                               <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text">
                                        price Money*
                                        </span>
                                   </label>
                                   <input
                                        {...register("prizeMoney", {
                                             required: true,
                                        })}
                                        type="text"
                                        placeholder="Prize Money"
                                        className="input input-bordered w-full"
                                   />
                              </div>
                      
                         {/* Contest deadLine */}
                         <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text">
                                        Contest deadLine*
                                        </span>
                                   </label>
                                   <input
                                        {...register("date", {
                                             required: true,
                                        })}
                                        type="date"
                                        placeholder="Price Money"
                                        className="input input-bordered w-full"
                                   />
                              </div>
                         {/* Contest Description*/}
                         <div className="form-control w-full">
                              <label className="label">
                                   <span className="label-text">
                                        Contest Description*
                                   </span>
                              </label>
                              <textarea
                                   {...register("description", { required: true })}
                                   className="textarea textarea-bordered"
                                   placeholder="Description"
                              ></textarea>
                         </div>
                        </div>
                           {/* Task Submission text instruction*/}
                           <div className="form-control w-full">
                              <label className="label">
                                   <span className="label-text">
                                   Task Submission instruction*
                                   </span>
                              </label>
                              <textarea
                                   {...register("instruction", { required: true })}
                                   className="textarea textarea-bordered"
                                   placeholder="Task Submission instruction"
                              ></textarea>
                         </div>
                         {/* image */}
                         <div className="form-control w-full">
                              <input
                                   {...register("image")}
                                   type="file"
                                   className="file-input file-input-ghost w-full max-w-xs"
                              />
                         </div>
                    </div>
                    <div className="text-center">

                    <button className="btn mt-2 w-1/2 text-center red">
                         Create Contest
                    </button>
                    </div>
               </form>
              </div>
          </Container>
     );
};

export default AddContextPage;
