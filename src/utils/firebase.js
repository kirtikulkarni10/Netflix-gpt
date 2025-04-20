// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu3mNqizb6A2pCN28DTGbCmMkk-jIY_fM",
  authDomain: "netflixgpt-b461f.firebaseapp.com",
  projectId: "netflixgpt-b461f",
  storageBucket: "netflixgpt-b461f.firebasestorage.app",
  messagingSenderId: "443977591077",
  appId: "1:443977591077:web:38bc7456bca4963bf192cc",
  measurementId: "G-BY42DV6HLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();