// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrrJFDj0Sov4vUoQSGuOFV0Ttd-bCiDA",
  authDomain: "photo-cam.firebaseapp.com",
  projectId: "photo-cam",
  storageBucket: "photo-cam.appspot.com",
  messagingSenderId: "1004643417455",
  appId: "1:1004643417455:web:a3b11110f14f5428087c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;