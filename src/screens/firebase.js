// Import the functions you need from the SDKs you need
import {
  getDatabase,
  set,
  get,
  push,
  remove,
  ref,
  onValue,
  onChildAdded,
  child,
} from "firebase/database";
 import {initializeApp} from"firebase/app";
 import {getAnalytics} from "firebase/analytics";
 import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
 onAuthStateChanged,} from "firebase/auth";

 const firebaseConfig ={
   apiKey: "AIzaSyA1WmGExTxAOhuURuHt49qogNLcWEDLy4U",
   authDomain: "ecommerce-website-f3ac4.firebaseapp.com",
   databaseURL: "https://ecommerce-website-f3ac4-default-rtdb.firebaseio.com",
   projectId: "ecommerce-website-f3ac4",
   storageBucket: "ecommerce-website-f3ac4.appspot.com",
   messagingSenderId: "190734489451",
   appId: "1:190734489451:web:743213c1dacd8d2c7a5e2e",
   measurementId: "G-226B92E0P3"
 };

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
  // const db = firebase.firestore()
 const auth = getAuth(app);
 const db = getDatabase(app);

 export {
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged ,
    set,
   push,
   remove,
   ref,
   onValue,
   onChildAdded,
   child,
   get,
  db,
 };