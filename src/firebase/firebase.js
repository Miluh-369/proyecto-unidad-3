import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANhq1GQWuzfIhilpshVO0ENueLiosMF5c",
  authDomain: "jeltify-2fd12.firebaseapp.com",
  projectId: "jeltify-2fd12",
  storageBucket: "jeltify-2fd12.firebasestorage.app",
  messagingSenderId: "435118881000",
  appId: "1:435118881000:web:72727161aff3bbdd01b15d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const Gprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
