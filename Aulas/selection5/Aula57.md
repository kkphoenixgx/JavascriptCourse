# Módulos 87 e 88

## Alterando o limite de bytes enviados por post

Mod 87 -- **25/11/21** em **26/11/21**

Nota de problema: Uma imagem de base 64 estoura o limite do express, não o do padrão do post mas sim o do express.

Analisando a nota de problema percebemos logo que temos que mudar o limite de dados, então a melhor solução para isso no express é bem simples, no arquivo padrão do express app.js o express.json possuí uma propriedade chamada **limit: 'x'** em seu json que diz até quanto o json vai receber de dados e obviamente o express.urlencoded deve receber também esse limite, já que é seu json encriptado, lembrando que caso faça a sua mudança no client side, faça-o na api e no db caso tenha um filtro lá, provavelmente no bodyParser.

## Refatorando a fetch API

Mod 88 -- **26/11/21**

Fetch veio no 2015 na ideia para substituir o ajax

polifie = é uma algo para polir, para encobrir os buracos de uma aplicação, como uma massa corrida passada numa parede e no ambiente de desenvolvimento sempre que uma feature nova é lançada e os navegadores ainda não suportam isso, os desenvolvedores fazem uma polifie para essa aplicação não quebrar nos navegadores que ainda não usam isso.

Porém 2021 que é a época na qual estou fazendo esse curso, todos os navegadores provavelmente já suportam uma fetch API. E a ideia dela é que ele suporta melhor promises no js.
