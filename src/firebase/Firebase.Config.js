// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8OxaGyo0fR3MbdgOvqGwu2Y7RvcXqsNk",
  authDomain: "ecommerce-743b3.firebaseapp.com",
  projectId: "ecommerce-743b3",
  storageBucket: "ecommerce-743b3.appspot.com",
  messagingSenderId: "682469438347",
  appId: "1:682469438347:web:f6ee71a2f548f1939f758e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;