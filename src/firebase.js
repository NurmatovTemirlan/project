// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRDR10a1aqzk2NTV4WrgJ0rmJ82eLz0OA",
  authDomain: "hacaton-da8b3.firebaseapp.com",
  projectId: "hacaton-da8b3",
  storageBucket: "hacaton-da8b3.appspot.com",
  messagingSenderId: "402922206900",
  appId: "1:402922206900:web:fa3ad0b37043ad9334c9e1",
  measurementId: "G-QJ0S7B2R6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
