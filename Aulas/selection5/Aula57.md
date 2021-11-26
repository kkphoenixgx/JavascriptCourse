# Alterando o limite de bytes enviados por post

Mod 87 -- **26/11/21**

Nota de problema: Uma imagem de base 64 estoura o limite do express, não o do padrão do post mas sim o do express.

Analisando a nota de problema percebemos logo que temos que mudar o limite de dados, então a melhor solução para isso no express é bem simples, no arquivo padrão do express app.js o express.json possuí uma propriedade chamada **limit: 'x'** em seu json que diz até quanto o json vai receber de dados e obviamente o express.urlencoded deve receber também esse limite, já que é seu json encriptado, lembrando que caso faça a sua mudança no client side, faça-o na api e no db caso tenha um filtro lá, provavelmente no bodyParser.
