import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhc1YDIFOmd9NBVKDj1J5TWOrqHCqdvGA",
  authDomain: "finanacetracker.firebaseapp.com",
  projectId: "finanacetracker",
  storageBucket: "finanacetracker.appspot.com",
  messagingSenderId: "378649399794",
  appId: "1:378649399794:web:4e0b748c704d480929db6b",
  measurementId: "G-GZR13364C4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
