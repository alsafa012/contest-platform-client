import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hook/useAxiosPublic";
import moment from "moment";

const SocialLogin = () => {
     const { user, googleSignIn } = useAuth();
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from?.pathname || "/";
     const axiosPublic = useAxiosPublic();
     const handleGoogleSignIn = () => {
          if (user) {
               return Swal.fire({
                    icon: "error",
                    title: "Oops sign in failed...",
                    text: "user already logged in..!",
               });
          }
          googleSignIn()
               .then((result) => {
                    const userInfo = {
                         name: result.user?.displayName,
                         email: result.user?.email,
                         CreatedTime: moment().format(
                              "MMMM Do YYYY, h:mm:ss a"
                         ),
                         role:'user'
                    };
                    axiosPublic.post("/users", userInfo)
                    .then((res) => {
                         console.log(res.data);
                    });
                    Swal.fire(
                         "Good job!",
                         "You Signed In With Google Successfully",
                         "success"
                    );
                    navigate(from, { replace: true });
               })
               .catch((error) => {
                    console.log(error.message);
               });
     };
     return (
          <div>
               <div className="form-control w-[300px] mx-auto text-center">
                    <button
                         onClick={handleGoogleSignIn}
                         type="button"
                         className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg btn inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                         <svg
                              className="w-4 h-4 mr-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 19"
                         >
                              <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                         </svg>
                         Sign in with Google
                    </button>
               </div>
          </div>
     );
};

export default SocialLogin;
