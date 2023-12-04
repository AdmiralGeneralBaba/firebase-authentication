// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0H2-qzghRu7hl12z9vK54maZb_CNvOSg",
  authDomain: "authentication-tutorial-20b00.firebaseapp.com",
  projectId: "authentication-tutorial-20b00",
  storageBucket: "authentication-tutorial-20b00.appspot.com",
  messagingSenderId: "232423095716",
  appId: "1:232423095716:web:e5008a4c8f35dda86e1531",
  measurementId: "G-YB85WF73D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
