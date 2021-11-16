class HttpRequest {

    static request(method, url, params = {}){

        return new Promise(((resolve, reject) => {
            let ajax = new XMLHttpRequest();
            
            ajax.open(method.toUpperCase(), url);
            

            // quando o próprio ajax der errado, já para e mostra o erro no reject da promise
            ajax.onerror = event => {
                reject(error);
            }

            // quando o ajax for carregado tenta mandar esse objeto para o resolve da promise
            ajax.onload= event => {
                let object = {};
    
                try{ object = JSON.parse(ajax.responseText); }
                catch(error){ 
                    reject(error);
                    console.error(error);
                }
                
                resolve(object);
            };

            ajax.send();

        }));

    }

    static get(url, params = {}){
        return HttpRequest.request('get', url, params);
    }

    static delete(url, params = {}){
        return HttpRequest.request('DELETE', url, params);
    }

    static put(url, params = {}){
        return HttpRequest.request('PUT', url, params);
    }

    static post(url, params = {}){
        return HttpRequest.request('POST', url, params);
    }


}