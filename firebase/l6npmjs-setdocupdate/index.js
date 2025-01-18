// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc } from "firebase/firestore";
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
//   name:"deedo",
//   type:"food",
//   price:300
// }); 


// setDoc(doc(db,"products","9ZFHPNccEnutjb9AbS7z"),{
//     name:"cocacola",
//     type:"food",
//     price:300
//   }).then(()=>{
//     console.log("Update Successfully");
//   }).catch(error=>{
//     console.log(error);
//   }); 



// => Before Merge

// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// });



// => After Merge

// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
// },{merge:true}).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// });


// => Before Merge

// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//   name:"deedo",
// }).catch(error=>{
//   console.log(error);
// });

// => After Merge

// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//   name:"deedo",
// },{merge:true}).catch(error=>{
//   console.log(error);
// });


// => Before Merge

// setDoc(doc(db,"products","myid1002"),{
//   stock:200
// }).catch(error=>{
//   console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// });


// => After Merge

// setDoc(doc(db,"products","myid1002"),{
//   stock:200
// }).catch(error=>{
//   console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// },{merge:true}).catch(error=>{
//   console.log(error);
// });