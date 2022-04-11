// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3A9Dinf7hY1IZUnMUsGEmcmpiGb4ThyQ",
  authDomain: "genius-car-service-63ea8.firebaseapp.com",
  projectId: "genius-car-service-63ea8",
  storageBucket: "genius-car-service-63ea8.appspot.com",
  messagingSenderId: "193862368456",
  appId: "1:193862368456:web:d9118f02f536a3a10c79fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;