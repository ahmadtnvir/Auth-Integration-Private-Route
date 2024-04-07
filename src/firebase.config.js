// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdYB_GjzRm6nxM0Ue6yXjlEp89ThHeLhY",
  authDomain: "auth-integration-private-e23c7.firebaseapp.com",
  projectId: "auth-integration-private-e23c7",
  storageBucket: "auth-integration-private-e23c7.appspot.com",
  messagingSenderId: "687818623657",
  appId: "1:687818623657:web:f41ad0b913e708851077b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;