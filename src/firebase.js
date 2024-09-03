// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Ensure this import is present
import { getFirestore } from "firebase/firestore";

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

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };  // Make sure to export auth
