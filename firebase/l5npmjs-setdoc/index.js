// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc,collection } from "firebase/firestore";
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
const db = getFirestore(app);
// console.log(db);



// setDoc(doc(db,"products","myid1001"),{
//   name:"redbull",
//   type:"food",
//   price:2000
// }); 


// setDoc(doc(db,"products","myid1002"),{
//   name:"sponsor",
//   type:"food",
//   price:1000
// }).then(docRef=>{
//   console.log("Create Successfully");
//   // console.log(docRef.id); // error
// }).catch(error=>{
//   console.log(error);
// }); 


// setDoc(doc(db,"products","myid1003"),{
//   name:"m150",
//   type:"food",
//   price:1000
// }).then(docRef=>{
//   // console.log(docRef.id); // error
// }).catch(error=>{
//   console.log(error);
// }); 

// setDoc(doc(collection(db,"products"),"myid1004"),{
//   name:"firedragon",
//   type:"food",
//   price:1500
// }).then(()=>{
//   console.log("Create Successfully");
// }).catch(error=>{
//   console.log(error);
// }); 


// setDoc(doc(collection(db,"products")),{
//   name:"deedo",
//   type:"food",
//   price:2500
// }).then(()=>{
//   console.log("Create Successfully");
// }).catch(error=>{
//   console.log(error);
// }); 