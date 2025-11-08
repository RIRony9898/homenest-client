// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVkwKGcqO6aKRNr2Nq5607chJM9gevtUQ",
  authDomain: "home-nest-c6475.firebaseapp.com",
  projectId: "home-nest-c6475",
  storageBucket: "home-nest-c6475.firebasestorage.app",
  messagingSenderId: "841836031809",
  appId: "1:841836031809:web:1674e7faf52a28c7b07bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);