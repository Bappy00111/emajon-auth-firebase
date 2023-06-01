// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIFBOVKRhMGakkVOsNYWtrkcNshfzEVCs",
  authDomain: "ema-john-wiht-firebase-auth.firebaseapp.com",
  projectId: "ema-john-wiht-firebase-auth",
  storageBucket: "ema-john-wiht-firebase-auth.appspot.com",
  messagingSenderId: "424908624182",
  appId: "1:424908624182:web:04f09d55f8069320046397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;