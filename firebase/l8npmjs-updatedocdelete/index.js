// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc,deleteField } from "firebase/firestore";
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

// const dbRef = doc(db,"products","myid1001");

// updateDoc(dbRef,{
//     name:"deedo",
//     type:"food",
//     price:20000
// });

// updateDoc(dbRef,{
//     unit:deleteField()
// });

const dbRef = doc(db,"products","myid1001");

updateDoc(dbRef,{
    type:deleteField()
}).then(()=>{
    console.log("Delete Successfully");
}).catch((error)=>{
    console.log(error);
});