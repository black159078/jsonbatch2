// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,onSnapshot,getDoc,doc } from "firebase/firestore";
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


// => getDoc ( for single data by id )
// => getDocs (for multi data)


const dbRef = doc(db,"products","myid1002");
const getdata = await getDoc(dbRef);

// console.log(getdata.data()); // { unit: 'bot', name: 'speed', stock: 200, price: 500, type: 'food' }


// console.log(getdata.data().name); // speed
// console.log(getdata.data().stock); // 200
// console.log(getdata.data().price); // 300



// => onSnapshot (live result)

const getresults = async ()=>{
    
    await onSnapshot(dbRef,docSnap=>{
      console.log(docSnap.data());
      console.log(docSnap.data().name);
      console.log(docSnap.data().price);
      console.log(docSnap.data().type);
    })

}

getresults();