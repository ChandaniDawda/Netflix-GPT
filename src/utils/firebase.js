// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMVnhPvu3bKOACqfV1vZL3jbwmdWxXklM",
  authDomain: "netflixgpt-ccaad.firebaseapp.com",
  projectId: "netflixgpt-ccaad",
  storageBucket: "netflixgpt-ccaad.firebasestorage.app",
  messagingSenderId: "789046592782",
  appId: "1:789046592782:web:52087dc53b67ea56b2835f",
  measurementId: "G-N8C98G3DW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();