import Format from '../util/Format.js'
import { elementsPrototypes } from '../util/prototypes.js';

export default class WhatsAppController{

    constructor(){
        elementsPrototypes()
        this.loadElements();
        this.initEvents()
    }

  // ----------- Main methods -----------

    loadElements(){
        this.el = {}
        
        // ! Pattern: el.camelCaseName
        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase(element.id)] = element
        })
    }
    initEvents(){
      // ----------- Add Class -----------

        this.el.myPhoto.on("click", event=>{
            this.closeAllPanels()

            this.el.panelEditProfile.show()
            setTimeout( ()=> this.el.panelEditProfile.addClass('open'), 300)
        })
        this.el.btnNewContact.on("click", event=>{
            this.closeAllPanels()

            this.el.panelAddContact.show()
            setTimeout( ()=> this.el.panelAddContact.addClass('open'), 300)
        })

      // ----------- Remove Class -----------
        
        this.el.btnClosePanelEditProfile.on('click', event=>{
            this.el.panelEditProfile.removeClass('open')
        })
        this.el.btnClosePanelAddContact.on('click', event=>{
            this.el.panelAddContact.removeClass('open')
        })
    }

  // ----------- Side Methods -----------

    closeAllPanels(){
        this.el.panelAddContact.hide()
        this.el.panelEditProfile.hide()
    }

}