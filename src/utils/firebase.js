// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW_Q7x0PrkI4iFQ6HOOTsmy7biDE9A5dQ",
  authDomain: "food-ordering-app-c1cff.firebaseapp.com",
  projectId: "food-ordering-app-c1cff",
  storageBucket: "food-ordering-app-c1cff.appspot.com",
  messagingSenderId: "139670103972",
  appId: "1:139670103972:web:fc6dd870de93cfd2150331",
  measurementId: "G-TJ6PK5355S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
