import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Debugging
// console.log(import.meta.VITE_FIREBASE_API_KEY);

// Firebase configuration
// const firebaseConfig = {
//     apikey:import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId:import.meta.env.VITE_FIREBASE_APP_ID
// };


const firebaseConfig = {
    apiKey: "AIzaSyDko_MeQPaGYSBUcj8rxUlT3cnK8BBKXrI",
    authDomain: "my-first-project-c0802.firebaseapp.com",
    projectId: "my-first-project-c0802",
    storageBucket: "my-first-project-c0802.firebasestorage.app",
    messagingSenderId: "85295203241",
    appId: "1:85295203241:web:05ae79af041ceb257f7ab8"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}