import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCreatedContext = () => {
     const axiosSecure = useAxiosSecure();
     const { data: myAddedContext = [],refetch } = useQuery({
          queryKey: ["contexts"],
          queryFn: async () => {
               const res = await axiosSecure.get("/createContext");
               return res.data;
          },
     });
     return [myAddedContext,refetch];
};

export default useCreatedContext;