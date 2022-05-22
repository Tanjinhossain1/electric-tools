// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tools-a576c.firebaseapp.com",
  projectId: "tools-a576c",
  storageBucket: "tools-a576c.appspot.com",
  messagingSenderId: "1044482063572",
  appId: "1:1044482063572:web:599bbba2887a8f8947cf41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;