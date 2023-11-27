import { useState } from "react";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogins/SocialLogin";
import useAuth from "../../Components/hook/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Login = () => {
     const [showPassword, setShowPassword] = useState(false);
     const {user , userSignIn} = useAuth();
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from?.pathname || "/";
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();
     const onSubmit = (data) => {
          console.log(data);
          userSignIn(data.email, data.password)
          .then((result) => {
               navigate(from, { replace: true });
               console.log(result.user);
               Swal.fire(
                    "Good job!",
                    "User login successfully",
                    "success"
               );
          })
          .catch((error) => {
               console.log(error);
          })
                 
     };
     return (
          <div>
               <div>
                    <WebsiteTitle title={"Login"}></WebsiteTitle>
                    <div>
                         <p className="text-center text-[#FF444A] mt-5">
                              <SectionTitle subHeading={"Login Here"}></SectionTitle>
                         </p>

                         <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="w-4/5 md:w-1/2 mx-auto"
                         >
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Email
                                        </span>
                                   </label>
                                   <input
                                        {...register("email", {
                                             required: true,
                                        })}
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
                                        <span className="label-text">
                                             Password
                                        </span>
                                   </label>
                                   <input
                                        {...register("password", {
                                             required: true,
                                             maxLength: 20,
                                             minLength: 6,
                                        })}
                                        type={
                                             showPassword ? "text" : "password"
                                        }
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
                              <div className="form-control mt-6">
                                   <input
                                        className="btn bg-[#FF444A] text-white"
                                        type="submit"
                                        value="Login"
                                   />
                              </div>
                         </form>
                         <div className="divider w-4/5 md:w-1/2 mx-auto">
                              OR
                         </div>
                         <SocialLogin></SocialLogin>

                         <p className="text-center py-4">
                              Already Have An Account ?
                              <Link
                                   className="text-red-500 font-bold hover:underline ml-1"
                                   to="/registration"
                              >
                                   Registration
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Login;
