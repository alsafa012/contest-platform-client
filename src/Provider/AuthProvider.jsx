import { createContext, useEffect, useState } from "react";

import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Components/hook/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null);
     const axiosPublic = useAxiosPublic();
     // sign in with google account
     const googleSignIn = (value) => {
          setLoading(true);
          return signInWithPopup(auth, provider);
     };
     // create a new user
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // sign in with email and password
     const userSignIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     };
     // User Profile updates
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: photo,
          });
     };
     // sign out user
     const userSignOut = () => {
          setLoading(true);
          return signOut(auth);
     };

     //hold user information
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               console.log("current user", currentUser);
               if(currentUser){
                    const userInfo = {email : currentUser?.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res=>{
                         if(res.data.token){
                              localStorage.setItem('access-token',res.data.token)
                              setLoading(false);
                         }
                        
                    })
               }
               else{
                    localStorage.removeItem('access-token');
                    setLoading(false);
               }
               // setLoading(false);
          });
          return () => {
               return unSubscribe();
          };
     }, [axiosPublic]);

     const authInfo = {
          user,
          loading,
          googleSignIn,
          createUser,
          userSignIn,
          userSignOut,
          updateUserProfile,
     };
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;
