
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqve_9Crt2_FSDfNyX2EPwJmdIN1AkYKY",
  authDomain: "glitzinteriors-5be77.firebaseapp.com",
  projectId: "glitzinteriors-5be77",
  storageBucket: "glitzinteriors-5be77.firebasestorage.app",
  messagingSenderId: "574702601910",
  appId: "1:574702601910:web:165b43d6ad1770f6ac0817",
  measurementId: "G-244H43GZXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };