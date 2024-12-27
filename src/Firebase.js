
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "martabak-b1420.firebaseapp.com",
  projectId: "martabak-b1420",
  storageBucket: "martabak-b1420.appspot.com",
  messagingSenderId: "978900709101",
  appId: "1:978900709101:web:0b492a04fe8d85d8f4a6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
