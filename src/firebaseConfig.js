
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBLXVM7q-3sJ0DCirmxj3YszkLFWouaNqE",
  authDomain: "e-commerce-282df.firebaseapp.com",
  projectId: "e-commerce-282df",
  storageBucket: "e-commerce-282df.appspot.com",
  messagingSenderId: "709690529018",
  appId: "1:709690529018:web:3b6927679d1b7960aaa543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)