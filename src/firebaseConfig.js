// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuq3FwIsgbsKUnJwjJOWlkDVw9OBWiVew",
  authDomain: "my-vue-blog-e7c77.firebaseapp.com",
  projectId: "my-vue-blog-e7c77",
  storageBucket: "my-vue-blog-e7c77.appspot.com",
  messagingSenderId: "19399570714",
  appId: "1:19399570714:web:78753fa55767fb3b1828a3",
  measurementId: "G-Q5T1MHF7EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
