import { app } from "./FirebaseIndex.js"
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// Initialize Firebase
const DB = getFirestore(app);

// files collections:
export const _FilesRef = collection(DB, 'Home');

//Default DataBase
export var currentDB = _FilesRef;
export var currentReference = 'Home'

// ----functions------

export function addToFirestoreDB(fileJson, Reference){
    
    let addDocToFirestore = new Promise((resolve, reject) => {

        try {  resolve(addDoc(Reference, fileJson));  }
        catch (err) { reject(err);}
    })

    return addDocToFirestore
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

export function EditAFileItemFromDB(reference, id, itemChanged, db = DB){

    let FileReference = doc(db, reference, id);

    let updateFile = new Promise((resolve, reject) => {

        try { resolve(updateDoc(FileReference, itemChanged));  }
        catch (err) {  reject(err); }

    })
    return updateFile
}

export function DeleteAFileItemFromDB(reference, id, db = DB){

    let FileReference = doc(db, reference, id);

    let deleteDocFromFirestore = new Promise((resolve, reject)=>{
        try { resolve(  deleteDoc( FileReference )  )}
        catch (err){ reject(err); }
    })

    return deleteDocFromFirestore
}

export function DeleteCollectionFromDB(refName, db = DB){

    let reference = collection(DB, refName);

    let DeleteCollectionFromDB = new Promise((resolve, reject) => {

        getDocs(reference)
            .then( snapshot =>{
    
                snapshot.docs.forEach(item => {

                    try { 
                        DeleteAFileItemFromDB(reference, item.id, db) 
                    }
                    catch (err) { reject(err); }
                
                })

                resolve('deleted collection')
                
            })
            .catch( error => { reject(error )} );


    })

    return DeleteCollectionFromDB

}

// -----Side functions-------

export function ChangeCurrentRef(refName){

    if(! typeof reference === 'string') return

    let ChangeCurrentRef = new Promise((resolve, reject) => {

        try { resolve(currentDB = collection(DB, refName))}
        catch (err) { reject(err)}
    
    })

    return ChangeCurrentRef

}

export function createReference(reference){
    
    if(! typeof reference === 'string') return
    
    return collection(DB, reference)
}

export function setStringCurrentReference(newReference){

    currentReference = newReference;

    return currentReference;

}