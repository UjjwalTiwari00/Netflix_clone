// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("API Key:", import.meta.env.VITE_SECURE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_SECURE_API_KEY,
  authDomain: "moviesai.firebaseapp.com",
  projectId: "moviesai",
  storageBucket: "moviesai.appspot.com",
  messagingSenderId: "67007380000",
  appId: "1:67007380000:web:8917bee764a898e2fc1a45",
  measurementId: "G-25VYP0XP9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();