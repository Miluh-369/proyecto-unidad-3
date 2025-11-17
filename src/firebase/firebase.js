import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLOcn181TsSA30YSde-0S-n0s3mrWO3iU",
  authDomain: "proyecto-final-4-f5894.firebaseapp.com",
  projectId: "proyecto-final-4-f5894",
  storageBucket: "proyecto-final-4-f5894.firebasestorage.app",
  messagingSenderId: "465447700496",
  appId: "1:465447700496:web:984655da025ef523b56295"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const Gprovider = new GoogleAuthProvider();
