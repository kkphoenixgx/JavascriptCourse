# Aula 6

```js
let c1 = {
    nome : "algum nome",
    obj : {
        aopa : "boa noite",
        seiLa : "tá bom já"
    }
}

let c2 = { ...c1 }

// Isso muda o c1 também
c2.obj.aopa = "Salve"
```

Para não mudar, tem que usar structuredClone() ao invés de loopar

Para casa:

4.1) Crie um atributo statico na classe Contato que contabilize o número de vezes em que a classe foi instânciada

5) Crie um arquivo contato.html como formulário para cadastro de contato que pemite salvar um contato como objeto, em um array no localStorage. Use a chave contatos no localStorage

6) Crie um arquivo lista-contatos.html que, a partie de uma tabela vazia, leia os contatos do localStorage e os exiba na tela, criando as linhas apenas utlizando objetos do DOM, sem montar as linhas como string.

