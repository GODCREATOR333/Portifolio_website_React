// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBogWNVOeEfyOQc4AQtGC2_FPiKQ3Xz6QQ",
    authDomain: "haripreetham-portifolio.firebaseapp.com",
    projectId: "haripreetham-portifolio",
    storageBucket: "haripreetham-portifolio.appspot.com",
    messagingSenderId: "167895926596",
    appId: "1:167895926596:web:d76f89ffdcd093db7ef911",
    measurementId: "G-3856DEG089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);