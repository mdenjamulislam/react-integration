// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkJYXVfBEQ-gsknMr4XhXUj_TdzfQQxck",
  authDomain: "react-integration-ae756.firebaseapp.com",
  projectId: "react-integration-ae756",
  storageBucket: "react-integration-ae756.appspot.com",
  messagingSenderId: "200517287894",
  appId: "1:200517287894:web:a7b211ab2a11cfb780ee77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;