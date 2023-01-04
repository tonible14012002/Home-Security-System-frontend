import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHnd4rGGykFCCOIx5sZnLF_i9_UwRDog8",
  authDomain: "home-security-chatapp.firebaseapp.com",
  projectId: "home-security-chatapp",
  storageBucket: "home-security-chatapp.appspot.com",
  messagingSenderId: "282429499455",
  appId: "1:282429499455:web:6b7429f561f990f680b08a",
  measurementId: "G-XHZLRY6J1Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore()