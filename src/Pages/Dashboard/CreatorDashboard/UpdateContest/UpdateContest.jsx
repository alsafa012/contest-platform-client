import { useForm } from "react-hook-form";
import WebsiteTitle from "../../../../Components/WebsiteTitle/WebsiteTitle";
import Container from "../../../../Shared/Container/Container";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../Components/hook/useAxiosPublic";
import useAxiosSecure from "../../../../Components/hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateContest = () => {
     const data = useLoaderData();
     // console.log(data.data);
     const {_id} = data;
     const { register, handleSubmit } = useForm();
     const axiosPublic = useAxiosPublic();
     const axiosSecure = useAxiosSecure();
     const onSubmit = async (data) => {
          console.log(data);
          //image upload to imgbb and then get an url
          const imageFile = { image: data.image[0] };
          const res = await axiosPublic.post(image_hosting_api, imageFile, {
               headers: { "Content-Type": "multipart/form-data" },
          });
          if (res.data.success) {
               // send the menuitem data to the data with the image url
               const addContext = {
                    name: data.name,
                    tag: data.tag,
                    price: parseFloat(data.price),
                    prizeMoney: parseFloat(data.prizeMoney),
                    deadLine: data.date,
                    description: data.description,
                    instruction: data.instruction,
                    image: res.data.data.display_url,
               };
               console.log(addContext);
               const contextRes = await axiosSecure.put(`/createContext/${_id}`,addContext);
               // console.log(contextRes.data);
               // console.log("object");
               if (contextRes.data.modifiedCount > 0) {
                    Swal.fire({
                         title: "Good job!",
                         text: "contest updated successfully",
                         icon: "success",
                    });
               }
          }
          console.log(res.data);
     };
     return (
          <div className="bg-pink-300">
               <Container>
                    <WebsiteTitle
                         title={"Creator || Update Context"}
                    ></WebsiteTitle>
                    <SectionTitle subHeading={"Update Context"}></SectionTitle>
                    <p>{data._id}</p>
                    <div className="p-2">
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="space-y-3 font-medium">
                                   <div className="grid md:grid-cols-2 md:gap-5">
                                        {/* context name */}
                                        <div className="form-control w-full">
                                             <label className="label">
                                                  <span className="label-text">
                                                       Context Name*
                                                  </span>
                                             </label>
                                             <input
                                                  {...register("name", {
                                                       required: true,
                                                  })}
                                                  defaultValue={data.name}
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
                                                  defaultValue={data.tag}
                                                  className="select select-bordered w-full"
                                             >
                                                  <option value="business">
                                                       Business
                                                  </option>
                                                  <option value="medical">
                                                       Medical
                                                  </option>
                                                  <option value="article">
                                                       Article Writing
                                                  </option>
                                                  <option value="gaming">
                                                       Gaming
                                                  </option>
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
                                                  defaultValue={data.price}
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
                                                  defaultValue={data.prizeMoney}
                                                  type="text"
                                                  placeholder="Prize Money"
                                                  className="input input-bordered w-full"
                                             />
                                        </div>

                                        {/* Contest Deadline */}
                                        <div className="form-control w-full">
                                             <label className="label">
                                                  <span className="label-text">
                                                       Contest Deadline*
                                                  </span>
                                             </label>
                                             <input
                                                  {...register("date", {
                                                       required: true,
                                                  })}
                                                  defaultValue={data.deadline}
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
                                             defaultValue={data.description}
                                                  {...register("description", {
                                                       required: true,
                                                  })}
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
                                             {...register("instruction", {
                                                  required: true,
                                             })}
                                             defaultValue={data.instruction}
                                             className="textarea textarea-bordered"
                                             placeholder="Task Submission instruction"
                                        ></textarea>
                                   </div>
                                   {/* image */}
                                   <div className="form-control w-full">
                                        <input
                                        // defaultValue={data.image}
                                             {...register("image")}
                                             type="file"
                                             className="file-input file-input-ghost w-full max-w-xs"
                                        />
                                   </div>
                              </div>
                              <div className="text-center">
                                   <button className="btn mt-2 w-1/2 text-center red">
                                        Create Context
                                   </button>
                              </div>
                         </form>
                    </div>
               </Container>
          </div>
     );
};

export default UpdateContest;
