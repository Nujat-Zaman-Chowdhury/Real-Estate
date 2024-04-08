// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWotDUAjJc56vxMlhZi2TEuXQhv8iMkEk",
  authDomain: "assignment-9-real-estate.firebaseapp.com",
  projectId: "assignment-9-real-estate",
  storageBucket: "assignment-9-real-estate.appspot.com",
  messagingSenderId: "1088271964760",
  appId: "1:1088271964760:web:b2ca51d2d31aaf13ec482d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;