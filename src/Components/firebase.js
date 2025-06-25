// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8en37sAq-CfSpWoaEvYYYQ6gqefcrWCc",
  authDomain: "splfx-b1f70.firebaseapp.com",
  projectId: "splfx-b1f70",
  storageBucket: "splfx-b1f70.firebasestorage.app",
  messagingSenderId: "725075543786",
  appId: "1:725075543786:web:e9fb3211a5b95c977cf993",
  measurementId: "G-C3C4YJ430K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // <-- Export Firestore