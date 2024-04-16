// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Cju9rz_huy5WrHXRGZDCo2fpxBGQpoo",
  authDomain: "azhar-09.firebaseapp.com",
  projectId: "azhar-09",
  storageBucket: "azhar-09.appspot.com",
  messagingSenderId: "789744653848",
  appId: "1:789744653848:web:be9900e58804fde8d0556d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
