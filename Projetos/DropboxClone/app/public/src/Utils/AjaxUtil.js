export function CreateAjax(route, method = 'GET', formData = new FormData(), onprogress = function(){}, onloadStart = function(){} ){

    let ajax = new Promise((resolve, reject) => {
    
        let ajax = new XMLHttpRequest();
        
        ajax.open(method, route)

        ajax.onload = event => {

            try {  resolve(JSON.parse(ajax.responseText));  }
            catch (e) {  reject(e)  }
        }

        ajax.onerror = event => {
            console.log(event);
            reject(event);
        }

        ajax.upload.onprogress = onprogress();

        onloadStart();

        ajax.send(formData);
    })

    return ajax

}