import { ConverterToAGoodLook } from "../Utils/DateUtils.js"
export default class DropBox {
    constructor(){
        // HTML Object
        this.btnSendFilesElement = document.querySelector('#btn-send-file')
        this.inputFilesElement = document.querySelector('#files')
        this.snakeBarModalElement = document.querySelector('#react-snackbar-root')

        //ModalBar HTML objects
        this.progressModalElement =  this.snakeBarModalElement.querySelector('.mc-progress-bar-fg')
        this.progressBarFileNameElement = this.snakeBarModalElement.querySelector('.filename')
        this.progressBarTimeLeftElement= this.snakeBarModalElement.querySelector('.timeleft')

        // initializing functions
        this.initButtonEvents()
    }

    // main methods

    initButtonEvents(){
        this.btnSendFilesElement.addEventListener( 'click', event =>{

            // This Input is with display : none
            // So we click on that without having it on the screen 
            this.inputFilesElement.click();

            this.inputFilesElement.addEventListener( 'change', event =>{

                this.toggleOnloadModal();
                this.uploadFiles(event.target.files)
                this.inputFilesElement.value = '';
            } );

        });
    }

    uploadFiles(files){

        let promises = [];
        [...files].forEach(file => {
            
            promises.push(new Promise( (resolve, reject) =>{

                let ajax  = new XMLHttpRequest();

                ajax.open('POST', '/UPLOAD');

                ajax.onload = event =>{
                    this.toggleOnloadModal(false);
                    try {
                        resolve(JSON.parse(ajax.responseText));
                    } catch (error) { 
                        reject(error)
                    }

                } 
                
                ajax.onerror = event =>{
                    this.toggleOnloadModal(false);
                    reject(event);
                }

                this.startUploadTime = Date.now();
                ajax.upload.onprogress = event =>{
                    this.onUpload(event, file);
                }

                let formData = new FormData();
                formData.append('input-file', file);

                ajax.send(formData)

            }));

            return Promise.all(promises)

        })
    }

    onUpload(event, file){

        let loaded = event.loaded;
        let total = event.total;
        
        // defining the file progress
        var progress = (loaded / total) * 100;
        console.log( `${progress} %`)
        this.progressModalElement.style.width = `${progress}%`;

        // defining the file name
        this.progressBarFileNameElement.innerHTML = file.name

        // defining the time
        let timeSpend = Date.now() - this.startUploadTime 
        let timeLeft = ((100 - progress) * timeSpend) / progress;

        this.progressBarTimeLeftElement.innerHTML = ConverterToAGoodLook(timeLeft)
    }

    //side methods

    toggleOnloadModal(on = true){
        this.snakeBarModalElement.style.display = (on)? 'block' : 'none';
    }
}