// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "visa-application-system-auth.firebaseapp.com",
  projectId: "visa-application-system-auth",
  storageBucket: "visa-application-system-auth.appspot.com",
  messagingSenderId: "997348927271",
  appId: "1:997348927271:web:76180217419e337cea2b02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);