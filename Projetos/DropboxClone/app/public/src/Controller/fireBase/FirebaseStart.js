import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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

//Default DataBase
const currentDB = FilesRef;

// ----functions------

export function addToFirestoreDB(fileJson, Reference){
    addDoc(Reference, fileJson);
}

export function ReadFilesFromFirestoreDB(Reference = currentDB){
    
    var ReadFiles = new Promise((resolve, reject) =>{
        
        getDocs(Reference)
        .then( snapshot =>{
            var jsonItens = []

            snapshot.docs.forEach(item => {
                let jsonItem = {
                    'id': item.id,
                    'data': item.data()
                }
                
                jsonItens.push(jsonItem);
            })
            
            resolve(jsonItens);
        })
        .catch( error => { reject(error )} );

    })

    return ReadFiles
}
