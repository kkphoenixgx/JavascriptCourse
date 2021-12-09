export default class DropBox {
    constructor(){
        // Object
        this.btnSendFilesElement = document.querySelector('#btn-send-file')
        this.inputFilesElement = document.querySelector('#files')
        this.snakeBarModalElement = document.querySelector('#react-snackbar-root')

        this.initButtonEvents()
    }

    initButtonEvents(){
        this.btnSendFilesElement.addEventListener( 'click', event =>{

            // This Input is with display : none
            // So we click on that without having it on the screen 
            this.inputFilesElement.click();

            this.inputFilesElement.addEventListener( 'change', event =>{

                this.snakeBarModalElement.style.display = 'block';
                this.uploadFiles(event.target.files)
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
                    try {
                        resolve(JSON.parse(ajax.responseText));
                    } catch (error) { 
                        reject(error)
                    }

                } 
                
                ajax.onerror = event =>{
                    reject(event);
                }

                let formData = new FormData();
                formData.append('input-file', file);

                ajax.send(formData)

            }));

            return Promise.all(promises)

        })
    }

}