// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ntULaxFMKuzqVE7iQrQNQy7f9Nn5M08",
  authDomain: "eco-adventure-f8cf4.firebaseapp.com",
  projectId: "eco-adventure-f8cf4",
  storageBucket: "eco-adventure-f8cf4.firebasestorage.app",
  messagingSenderId: "529593872476",
  appId: "1:529593872476:web:c4197e58934ba6981f7699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;