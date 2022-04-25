// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeilHZdxQy84UzDDTm_0-7-F2vUln7bto",
  authDomain: "summer-react-blog.firebaseapp.com",
  projectId: "summer-react-blog",
  storageBucket: "summer-react-blog.appspot.com",
  messagingSenderId: "807706177080",
  appId: "1:807706177080:web:aa6b2fdd66668bf0fcc0cd",
  measurementId: "G-HPNYWMS4SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);