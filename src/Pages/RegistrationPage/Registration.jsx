import { useContext, useState } from "react";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogins/SocialLogin";
import useAxiosPublic from "../../Components/hook/useAxiosPublic";
import moment from "moment/moment";
const Registration = () => {
     const [showPassword, setShowPassword] = useState(false);
     const { user, createUser, updateUserProfile } = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from?.pathname || "/";
     const axiosPublic = useAxiosPublic();
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const onSubmit = (data) => {
          if (user) {
               return Swal.fire({
                    title: "Error!",
                    text: "User Already logged In",
                    icon: "error",
               });
          }
          console.log(data);
          createUser(data.email, data.password)
               .then((result) => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, data.photo)
                         .then(() => {
                              const userInfo = {
                                   name: data.name,
                                   email: data.email,
                                   CreatedTime: moment().format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                   ),
                                   role: 'user'
                              };
                              axiosPublic
                                   .post("/users", userInfo)
                                   .then((res) => {
                                        if (res.data.insertedId) {
                                             console.log(
                                                  "user added successfully in the database"
                                             );
                                             Swal.fire({
                                                  title: "Good job!",
                                                  text: "Sign up successfully!",
                                                  icon: "success",
                                             });
                                             navigate(from, { replace: true });
                                        }
                                   });
                         })
                         .catch((error) => {
                              console.log(error);
                         });

                    Swal.fire(
                         "Good job!",
                         "User created successfully",
                         "success"
                    );

                    navigate(from, { replace: true });
               })
               .catch((error) => {
                    console.log(error);
               });
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
                         {/* User Name */}
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
                                        Name must be required
                                   </span>
                              )}
                         </div>
                         {/* Photo url */}
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
                         {/* Email */}
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
                                        Email field is required
                                   </span>
                              )}
                         </div>
                         {/* Password */}
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
                                        required
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
                         <div className="form-control mt-6">
                              <input
                                   className="btn bg-[#FF444A] text-white"
                                   type="submit"
                                   value=" Sign Up"
                              />
                         </div>
                    </form>
                    <div className="divider w-4/5 md:w-1/2 mx-auto">OR</div>
                    <SocialLogin></SocialLogin>
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
