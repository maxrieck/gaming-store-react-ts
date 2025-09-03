import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDlqXuQuiQUbQkHJqG-SpDjLD1J7SG3kgM",
  authDomain: "gaming-store-dd569.firebaseapp.com",
  projectId: "gaming-store-dd569",
  storageBucket: "gaming-store-dd569.firebasestorage.app",
  messagingSenderId: "511334532510",
  appId: "1:511334532510:web:2ab42b51581b69d57d428f",
  measurementId: "G-WX1DTR68GY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
