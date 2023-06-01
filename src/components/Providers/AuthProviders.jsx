import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.confige';




export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
   const [user,setUser] = useState(null);

   const crateUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password) 
   }

   const crateLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () =>{
    signOut(auth)
   }

//    obserb auth state Change 
   useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        // console.log('Auth state change',currentUser)
    });

    // Stop obserbing unmounting 
    return () =>{
        unsubscrib();
    }
   },[])
   
  
   


    const AuthInfo = {
        user,
        crateUser,
        crateLogin,
        logOut
       
    }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;