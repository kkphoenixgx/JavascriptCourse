//@collapse

class User{

    constructor(name, gender, birth, country, email, password, photo, admin){
        
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

        this._id;
    }

//------------------------getters-----------------------

    get name(){
        return this._name
    }
    get gender(){
        return this._gender
    }
    get birth(){
        return this._birth
    }
    get country(){
        return this._country
    }
    get email(){
        return this._email
    }
    get password(){
        return this._password
    }
    get photo(){
        return this._photo
    }
    get admin(){
        return this._admin
    }

    //------system private variables-------
        get register(){
            return this._register;
        }    
        get id(){
            return this._id
        }

//---------------------------setters------------------------
    
    set photo(value){
        this._photo = value;
    }
    set name(name){
        this._name = name;
    }
    set gender(gender){
        this._gender = gender;
    }
    set birth(birth){
        this._birth = birth;
    }
    set country(country){
        this._country = country;
    }
    set email(email){
        this._email = email;
    }
    set password(password){
        this._password = password;
    }
    set admin(admin){
        this._admin = admin;
    }

//---------------------------methods------------------------

    //json manipulation

        loadFromJson(json){
            for (let name in json){
            
                switch(name){
    
                    case '_register':
                        this[name] = new Date(json[name]);
                    break;
    
                    default:
                        this[name] = json[name];
    
                }
            }
        }

    //Storage manipulation

    
        saveUser(){
            let users = User.getUsersDataSession();
            
            if(this.id > 0){

                users.map ( u => {

                    if (u._id == this.id){

                        Object.assign(u, this);

                    }

                    return u;
                }); 

            }else{
                this._id = this.createNewID();
                users.push(this);
            }
  
            localStorage.setItem("users", JSON.stringify(users));
        }

        removeUser(){
            
            return HttpRequest.delete(`/users/${this.id}`);

            // let users = User.getUsersDataSession();
            // users.forEach((userData, index) => {

            //     if (this._id == userData._id){
            //         users.splice(index, 1);
            //     }

            // });

        }

        createNewID(){

            let usersID = parseInt(localStorage.getItem("usersID"));

            if (!usersID > 0) usersID = 0;
    
            usersID++;
    
            localStorage.setItem("usersID", usersID);
    
            return usersID;
        }
        
        static getUsersDataSession(){
            return Fetch.get(`/users`);
        }
        
}

