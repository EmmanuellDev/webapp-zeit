import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbyKVVLHRoro9ohFFi-bWPIEPUxCJeQuw",
  authDomain: "zeit-club.firebaseapp.com",
  projectId: "zeit-club",
  storageBucket: "zeit-club.appspot.com",
  messagingSenderId: "502974875965",
  appId: "1:502974875965:web:e4daa4368f38d3fdd59d54",
  measurementId: "G-S37SPD1XE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { app, auth, db, doc, setDoc, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword };
