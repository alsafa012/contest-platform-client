import { useState } from "react";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
const Registration = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [errorMessage, setErrorMessage] = useState("");
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const onSubmit = (data) => {
          console.log(data);
          setErrorMessage("");
     };
     return (
          <div>
               <WebsiteTitle title={"Registration"}></WebsiteTitle>
               <div>
                    <p className=" text-3xl font-bold mb-6 text-center text-[#FF444A] mt-5">
                         Sign Up Page
                    </p>

                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="w-4/5 md:w-1/2 mx-auto"
                    >
                         <div className="form-control">
                              <label className="label">
                                   <span className="label-text">Name</span>
                              </label>
                              <input
                                   {...register("name", { required: true })}
                                   type="text"
                                   name="name"
                                   placeholder="Name"
                                   className="input input-bordered"
                                   // required
                              />
                              {errors.name && (
                                   <span className="mt-2 text-red-500">
                                        This field is required
                                   </span>
                              )}
                         </div>
                         <div className="form-control">
                              <label className="label">
                                   <span className="label-text">Photo</span>
                              </label>
                              <input
                                   {...register("photo", { required: true })}
                                   type="text"
                                   name="photo"
                                   placeholder="photo url"
                                   className="input input-bordered"
                                   // required
                              />
                              {errors.photo && (
                                   <span className="mt-2 text-red-500">
                                        Photo is required
                                   </span>
                              )}
                         </div>
                         <div className="form-control">
                              <label className="label">
                                   <span className="label-text">Email</span>
                              </label>
                              <input
                                   {...register("email", { required: true })}
                                   type="text"
                                   name="email"
                                   placeholder="Email"
                                   className="input input-bordered"
                                   // required
                              />
                              {errors.email && (
                                   <span className="mt-2 text-red-500">
                                        This field is required
                                   </span>
                              )}
                         </div>
                         <div className="form-control relative">
                              <label className="label">
                                   <span className="label-text">Password</span>
                              </label>
                              <input
                                   {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                   })}
                                   type={showPassword ? "text" : "password"}
                                   name="password"
                                   placeholder="Password"
                                   className="input input-bordered"
                                   // required
                              />
                              {errors.password?.type === "required" && (
                                   <p
                                        className="mt-2 text-red-500"
                                        role="alert"
                                   >
                                        password is required
                                   </p>
                              )}
                              {errors.password?.type === "maxLength" && (
                                   <p
                                        className="mt-2 text-red-500"
                                        role="alert"
                                   >
                                        password maxLength is up to 20
                                   </p>
                              )}
                              {errors.password?.type === "minLength" && (
                                   <p
                                        className="mt-2 text-red-500"
                                        role="alert"
                                   >
                                        password minLength is 6
                                   </p>
                              )}
                              {/* {errors.password?.type === "required" && (<p className="mt-2 text-red-500" role="alert">password is required</p>)} */}

                              <span
                                   className="text-xl absolute top-[60%] right-4"
                                   onClick={() =>
                                        setShowPassword(!showPassword)
                                   }
                              >
                                   {showPassword ? (
                                        <FiEye> </FiEye>
                                   ) : (
                                        <FiEyeOff></FiEyeOff>
                                   )}
                              </span>
                         </div>
                         <div className="form-control">
                              <div className="flex items-center gap-2 mt-2">
                                   <input
                                        type="checkbox"
                                        name="terms"
                                        id=""
                                        // required
                                   />
                                   <p>
                                        Please accept our
                                        <a
                                             className="hover:underline hover:text-red-500"
                                             href="#"
                                        >
                                             terms and conditions
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <h3>
                              {errorMessage && (
                                   <p className="text-red-600 pt-1">
                                        {errorMessage}
                                   </p>
                              )}
                         </h3>
                         <div className="form-control mt-6">
                              <input
                                   className="btn bg-[#FF444A] text-white"
                                   type="submit"
                                   value=" Sign Up"
                              />
                         </div>
                    </form>
                    <p className="text-center py-4">
                         Already Have An Account ?
                         <Link
                              className="text-red-500 font-bold hover:underline ml-1"
                              to="/login"
                         >
                              Login
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default Registration;
