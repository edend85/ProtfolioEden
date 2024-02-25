// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-tWNlY8sZJh7GQo42i-9jeNqPDfuZ_9I",
    authDomain: "edendayanprofile-5622d.firebaseapp.com",
    projectId: "edendayanprofile-5622d",
    storageBucket: "edendayanprofile-5622d.appspot.com",
    messagingSenderId: "321456265191",
    appId: "1:321456265191:web:579fe45abddf10e0bb4f42",
    measurementId: "G-WYEPXDB2YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);