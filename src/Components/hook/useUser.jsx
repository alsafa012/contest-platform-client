import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useUser = () => {
     const {user} = useAuth();
     const axiosSecure = useAxiosSecure();
   const {data : isUser, isPending:isUserLoading}= useQuery({
     queryKey:[user?.email ,'isUser'],
     queryFn: async()=>{
          const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          console.log(res.data);
          return res.data?.user;
     }
   })
   return [isUser,isUserLoading];
};

export default useUser;
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";
// const useUser = () => {
//      const {user} = useAuth();
//      const axiosPublic = useAxiosPublic();
//    const {data : isUser, isPending:isAdminLoading}= useQuery({
//      queryKey:[user?.email ,'isUser'],
//      queryFn: async()=>{
//           const res = await axiosPublic.get(`/users/${user?.email}`);
//           console.log(res.data);
//           return res.data?.user;
//      }
//    })
//    return [isUser,isAdminLoading];
// };

// export default useUser;