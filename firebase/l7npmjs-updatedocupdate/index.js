// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc } from "firebase/firestore";
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

// updateDoc(doc(db,"products","myid1001"),{
//     name:"kick"
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// updateDoc(doc(db,"products","myid1001"),{
//     price:3000
// });


// updateDoc(doc(db,"products","myid1001"),{
//     price:3000,
//     unit:'can'
// });

// const dbRef = doc(db,"products","myid1001");
// const data = {
//     name:"deedo"
// };

// updateDoc(dbRef,data);



const dbRef = doc(db,"products","myid1001");
const data = {
    name:"babimind",
    type:"non-food",
    price:20000,
    unit:"bot"
};

updateDoc(dbRef,data).then(()=>{
    console.log("Update Successfully");
}).catch(error=>{
    console.log(error);
});