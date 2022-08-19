// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBd8bKKA0D-MjDLUV9LQdjsKmn29z_KAs",
  authDomain: "chatapp-1e78c.firebaseapp.com",
  projectId: "chatapp-1e78c",
  storageBucket: "chatapp-1e78c.appspot.com",
  messagingSenderId: "687389363326",
  appId: "1:687389363326:web:8798484df6c03a9d7c9c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)