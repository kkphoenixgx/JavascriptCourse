class Fetch {

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {


            let request;

            switch(method.toLowerCase()){

                case 'get':
                    request = url;
                break;  
                default:
                    request = new Request( url, {
                        
                        method,
                        body : JSON.stringify(params),
                        Headers : new Headers({
                            'content-type': 'application/json'
                        })
    
                    } );
                break;
            }


            fetch(request).then( response=>{

                response.json().then( json =>{
                
                    resolve(json);
                
                }).catch( e => {
                    reject(e);
                });

            }).catch( e => {
                reject(e);
            });

        });

    }

    static get(url, params = {}){
        return Fetch.request('get', url, params);
    }

    static delete(url, params = {}){
        return Fetch.request('DELETE', url, params);
    }

    static put(url, params = {}){
        return Fetch.request('PUT', url, params);
    }

    static post(url, params = {}){
        return Fetch.request('POST', url, params);
    }


}