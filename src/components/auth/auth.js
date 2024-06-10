// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo25iN51dG5IU_5R8uO0fOjNk0vMZVRA4",
  authDomain: "resume-builder-c6973.firebaseapp.com",
  projectId: "resume-builder-c6973",
  storageBucket: "resume-builder-c6973.appspot.com",
  messagingSenderId: "160864730048",
  appId: "1:160864730048:web:06acbeb7b35a9b83902625",
  measurementId: "G-CJ1FVPLG9D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()


