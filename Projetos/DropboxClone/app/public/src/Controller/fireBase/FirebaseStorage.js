import {app} from './FirebaseIndex.js'
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js"

// Create a root reference
const STORAGE =  getStorage(app);


export function uploadFilesToStorage(ImagesJSON){

    let uploadFilesToStorage = new Promise((resolve, reject) => {

        try{
            for( let image in ImagesJSON){
        
                const ImageRef = STORAGE.ref(image.path);
                uploadBytes(ImageRef, image.data)
                  // I am going to resolve the snapshot for some possible features
                  .then( snapshot => { resolve(snapshot); })
                  .catch( err => reject(err))
            }
        }
        catch(err) { reject(err)}
    })

    return uploadFilesToStorage
}
