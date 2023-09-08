// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsBeIiBrvQsjkDkerc_fYls7MD-72to4",
  authDomain: "crunchyroll-clone-37f2b.firebaseapp.com",
  projectId: "crunchyroll-clone-37f2b",
  storageBucket: "crunchyroll-clone-37f2b.appspot.com",
  messagingSenderId: "871370261967",
  appId: "1:871370261967:web:eaa9bbe83655e0ae9efeba"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
  
export const FirebaseDB = getFirestore(FirebaseApp);