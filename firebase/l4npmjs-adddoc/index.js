// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
// console.log(app);
// console.log("sever is working");

const db = getFirestore(app);
// console.log(db);

// addDoc(collection(db,"users"),{
//   name:"Su Su",
//   city:"Mandalay",
//   age:21
// });

// => display auto generated id ! after data set

addDoc(collection(db,"users"),{
  name:"Na Di",
  city:"Yangon",
  age:20
}).then(docRef=>{
  console.log(docRef.id);
}).catch(error=>{
  console.log(error);
});


// Create Database
// https://console.firebase.google.com/ > Build > Firestore Database > Create Database


// Error for writing (PERMISSION_DENIED)
// Rules > allow read, write: if true; > Publish
