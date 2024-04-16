// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJGulxJz4fJtG0aQAfFgDlvEhiWbKMwHc",
  authDomain: "assignment-09-14225.firebaseapp.com",
  projectId: "assignment-09-14225",
  storageBucket: "assignment-09-14225.appspot.com",
  messagingSenderId: "157905475522",
  appId: "1:157905475522:web:77d5f9d1c5011c8866285b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);