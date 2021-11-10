// @collapse 
class UserController {

    constructor (formIdCreate, formIdUpdate ,tableId){

        this.formEl = document.getElementById(formIdCreate);
        this.formUpdateEl = document.getElementById(formIdUpdate);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
        this.onEdit();
        this.selectAllFromDb();
    }

// index methods:

    onEdit(){
        document.querySelector("#box-user-edit .btn-cancel").addEventListener('click', e=>{
            this.showPanelCreate();
        });

        this.formUpdateEl.addEventListener("submit", event=>{
            event.preventDefault();
            let btn = this.formUpdateEl.querySelector("[type=submit]")
            btn.disabled = true;

            let values = this.getValues(this.formUpdateEl);
            let index = this.formUpdateEl.dataset.trIndex;
            let tr = this.tableEl.rows[index];
            let oldUser = JSON.parse(tr.dataset.user);
            
            let result = Object.assign({}, oldUser, values);

            
            
            this.getPhoto(this.formUpdateEl).then(
                (content) => {

                    if(!values.photo) {
                        result._photo = oldUser._photo;
                    }else {
                        result._photo = content;
                    }

                    let user = new User();
                    user.loadFromJson(result);
                    this.getTr(user, tr);

                    user.saveUser()
                    
                    this.refreshUserNumbers();
                    
                    this.formUpdateEl.reset();
                    this.showPanelCreate();
                    btn.disable = false;
                }, 
                (e) => {
                    console.error(e)
                }
            );
        })

    }

    onSubmit(){

        this.formEl.addEventListener("submit", event => {
            event.preventDefault();

            let values = this.getValues(this.formEl);
            let btn = this.formEl.querySelector("[type=submit]");
            btn.disabled = true;

            if(!values) return false;

            this.getPhoto(this.formEl).then(
                (content) => {
                    values.photo = content;
                    values.saveUser()
                    this.addUserLine(values);
                    this.formEl.reset();
                    btn.disabled = false;
                }, 
                (e) => {
                    console.error(e)
                }
            );
        
        });

    }

    addUserLine(dataUser) {
        let tr = this.getTr(dataUser);
        this.tableEl.appendChild(tr);
        this.refreshUserNumbers();
    }

// methods

    //gets

        getPhoto(formEl){

            return new Promise((resolve, reject) => {

                let fileReader = new FileReader();

                let elements = [...formEl.elements].filter(item => {
                    if (item.name === 'photo') {
                        return item;
                    }
                });

                let file = elements[0].files[0];
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };

                fileReader.onerror = (e) => {
                    reject(e);
                };

                if(file){
                    fileReader.readAsDataURL(file);   
                }else{
                    resolve('dist/img/boxed-bg.jpg');
                }

            });

        }

        getValues(formEl){

            let user = {};
            let valid = true;

            [...formEl.elements].forEach(function(field){
                if(['name', 'password', 'email'].indexOf(field.name) > -1 && !field.value){
                    field.parentElement.classList.add('has-error');
                    valid = false;
                }
                
                if (field.name === "gender") {

                    if (field.checked) {
                        user[field.name] = field.value;
                    }

                }
                else if(field.name == "admin"){
                    user[field.name] = field.checked;

                }else {
                    user[field.name] = field.value;
                }
        
            });
        
            if(!valid){
                return false; 
            };
            return new User(
                user.name, 
                user.gender, 
                user.birth, 
                user.country, 
                user.email, 
                user.password, 
                user.photo, 
                user.admin
            );
            
        }

    //events

        eventsTr(tr){

            tr.querySelector(".btn-delete").addEventListener("click", (e) => {

                if(confirm("Deseja realmente excluir?")) {
                    
                    let user = new User();
                    user.loadFromJson(JSON.parse(tr.dataset.user));
                    user.removeUser();
                    tr.remove();
                    this.refreshUserNumbers();
    
                }
    
            });

            tr.querySelector(".btn-edit").addEventListener('click', e =>{

                let json = JSON.parse(tr.dataset.user);

                this.formUpdateEl.dataset.trIndex = tr.sectionRowIndex;

                for(let name in json){

                    let field = this.formUpdateEl.querySelector("[name=" + name.replace("_", "") + "]");

                    if(field){
                        switch(field.type){

                            case 'file':
                            continue;
                            break;
                            case 'radio':
                                field = this.formUpdateEl.querySelector("[name=" + name.replace("_", "") + "]" + "[value="+json[name] + "]");
                                field.checked = true;
                                break
                            case 'checkbox':
                                field.checked = json[name];
                            break
                            default:
                                field.value = json[name];
                        }
                        field.value = json[name];
                    }

                    this.formUpdateEl.querySelector(".photo").src = json._photo;
                    this.showPanelUpdate();
                }
            });
        }

    //screen- methods

        refreshUserNumbers(){
            let numberAdmins = 0;
            let numberUsers = 0;

            [...this.tableEl.children].forEach(tr=>{
                let user = JSON.parse(tr.dataset.user)
                if(user._admin){
                    numberAdmins++;
                }else{
                    numberUsers++;
                }
            })

            document.querySelector("#number-admin").innerHTML = numberAdmins;
            document.querySelector("#number-users").innerHTML = numberUsers;
        }

        showPanelUpdate(){
            document.querySelector("#box-user-create").style.display = "none";
            document.querySelector("#box-user-edit").style.display = "block";            
            document.querySelector("#title-new-userEdit").innerText = "Editar Usuário";
        }

        showPanelCreate(){
            document.querySelector("#box-user-create").style.display = "block";
            document.querySelector("#box-user-edit").style.display = "none"; 
            document.querySelector("#title-new-user").innerText = "Novo Usuário";
        }

        getTr(dataUser, tr = null){

            if (tr === null) tr = document.createElement('tr');

            tr.dataset.user = JSON.stringify(dataUser);

            tr.innerHTML = `
                            <td><img src=${dataUser.photo} class="img-circle img-sm"></td>
                            <td>${dataUser.name}</td>
                            <td>${dataUser.email}</td>
                            <td>${(dataUser.admin) ? 'Sim' : 'Não'}</td>
                            <td>${Utils.dateFormate(dataUser.register)}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                                <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
                            </td>
                            `;
            this.eventsTr(tr);
            return tr

        }
    
    //saving data- methods
        
        // Seleciona do banco via ajax
        selectAllFromDb(){

            let ajax = { users : [] }

            try       { ajax = new XMLHttpRequest; }
            catch(e)  { console.error(e) }

            ajax.open('GET', '/users');

                ajax.onload= event => {
                    let object = JSON.parse(ajax.responseText); 
        
                    object.users.forEach( dataUser=>{
                        let user = new User();
                        user.loadFromJson(dataUser);
                        this.addUserLine(user);
                    });
                };
            
            ajax.send();
        }
}