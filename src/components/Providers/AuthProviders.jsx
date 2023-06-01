import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.confige';




export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
   const [user,setUser] = useState(null);
   const [lodding,UseLodding] = useState(true)

   const crateUser = (email,password) =>{
    UseLodding(true);
    return createUserWithEmailAndPassword(auth,email,password) 
   }

   const crateLogin = (email,password) =>{
    UseLodding(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () =>{
    signOut(auth)
   }

//    obserb auth state Change 
   useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        UseLodding(false);
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
        logOut,
        lodding
       
    }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;