// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vGU97b5Alf0O3jR4Q1QY7Sr5I6tNlTk",
  authDomain: "job-portal-444d3.firebaseapp.com",
  projectId: "job-portal-444d3",
  storageBucket: "job-portal-444d3.appspot.com",
  messagingSenderId: "1003491044667",
  appId: "1:1003491044667:web:64bd8f461476e8a37b9b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
