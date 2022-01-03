# Guardando dados do firebase database

Mod 98 **26/12/21** made in **03/12/21**

Esclarecimentos pelo atraso:  
Tive alguns problemas com bugs no projeto e fui passar o ano novo longe de casa. Então só pude refatorar agora

Existe uma variável global chamada de firebase que podemos usar métodos do firebase, como
> firebase.database().ref()
No caso usando o database() do firebase, como o firebase não é somente um database, podemos usar essas variáveis para qualquer assunto.

Então para guardar dados no database precisamos de uma referencia, que seria o nome do que estamos guardando, no projeto de Dropbox temos os arquivos, então: firebase.database().ref('files) e para setar o que vamos colocar lá podemos dar um push().set(x), sendo x o arquivo:

~~~js
firebase.database(files).ref().push().set(file)
~~~

porém a nível comercial é bom separar a referencia com um método, então cria um método que retorna a referencia e da um push no return

~~~js
var file = {
    "foto de gatinho" : "./fotoDeGatinho.jpg"
}

getFirebaseRef().push().set(file);

function getFirebaseRef(){
    firebase.database().ref('files')
}
~~~
