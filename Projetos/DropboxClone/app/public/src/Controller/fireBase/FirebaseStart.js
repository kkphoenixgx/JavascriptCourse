import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: 'AIzaSyCCPGp5FEx_aaRP52Bgfb4FGAIbb9mrcNw',
    authDomain: 'dropboxclone-portifolio.firebaseapp.com',
    databaseURL: 'https://dropboxclone-portifolio-default-rtdb.firebaseio.com',
    projectId: 'dropboxclone-portifolio',
    storageBucket: 'dropboxclone-portifolio.appspot.com',
    messagingSenderId: '609798564398',
    appId: '1:609798564398:web:2ae20545edfd12fc024dbf',
    measurementId: 'G-PKJ8DYRMYY'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// files collections:
export const FilesRef = collection(db, 'files');

// ----functions------

export function addToFirestoreDB(fileJson){
    addDoc(FilesRef, fileJson);
}
