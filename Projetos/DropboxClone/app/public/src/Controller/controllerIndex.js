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
                // event.target.files

            } );

        });
    }
}