import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBySt37VZsiDztGTo-2fudyJlauaj9j2g4",
  authDomain: "liquid-shield.firebaseapp.com",
  projectId: "liquid-shield",
  storageBucket: "liquid-shield.appspot.com",
  messagingSenderId: "21753330810",
  appId: "1:21753330810:web:35701f8aee1d52165f0fc3",
  measurementId: "G-MRTM8SQ4QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);



export { auth }