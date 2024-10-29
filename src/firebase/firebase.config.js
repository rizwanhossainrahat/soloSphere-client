// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDE-GD9L9LEj6iJxVpAyaahrPyOwjCzjB8",
  // authDomain: "solophere-4f170.firebaseapp.com",
  // projectId: "solophere-4f170",
  // storageBucket: "solophere-4f170.appspot.com",
  // messagingSenderId: "101650599807",
  // appId: "1:101650599807:web:c4ba8ad6475125efc7d44a"
  apiKey: import.meta.env.VITE_apikey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);