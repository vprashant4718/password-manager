// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "passkeeper-80f6c.firebaseapp.com",
  projectId: "passkeeper-80f6c",
  storageBucket: "passkeeper-80f6c.firebasestorage.app",
  messagingSenderId: "824900414645",
  appId: "1:824900414645:web:aa9efe1154779ea64be2fc",
  measurementId: "G-3W7M4ZEK8J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);