// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseStart(){
    const firebaseConfig = {
    apiKey: "AIzaSyCCPGp5FEx_aaRP52Bgfb4FGAIbb9mrcNw",
    authDomain: "dropboxclone-portifolio.firebaseapp.com",
    databaseURL: "https://dropboxclone-portifolio-default-rtdb.firebaseio.com",
    projectId: "dropboxclone-portifolio",
    storageBucket: "dropboxclone-portifolio.appspot.com",
    messagingSenderId: "609798564398",
    appId: "1:609798564398:web:2ae20545edfd12fc024dbf",
    measurementId: "G-PKJ8DYRMYY"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}