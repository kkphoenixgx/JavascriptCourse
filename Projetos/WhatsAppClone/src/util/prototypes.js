export function elementsPrototypes(){
    
    Element.prototype.hide = function () { this.style.display = 'none'; return this }
    Element.prototype.show = function () { this.style.display = 'block'; return this }

    Element.prototype.toggle = function () {
        this.style.display = (this.style.display === 'none') ? 'block' : 'none';
        return this
    }

    Element.prototype.on = function (events, fn) {
        events.split(' ').forEach( event=> {
            this.addEventListener(event, fn)
        });
        return this
    }

    Element.prototype.css = function(styleObject){
        
        for (const name in styleObject) {
            this.style[name] = styleObject[name]
        }
        return this
    }

    Element.prototype.addClass = function(className){
        this.classList.add(className)
        return this
    }
    Element.prototype.removeClass = function (className){
        this.classList.remove(className)
        return this
    }
    Element.prototype.hasCLass = function (className){
        return this.classList.contains(className) 
    }

    Element.prototype.toggleClass = function (className){
        this.classList.toggle(className)
        return this
    }
}