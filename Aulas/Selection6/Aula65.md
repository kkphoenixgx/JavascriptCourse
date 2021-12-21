# Adicionando firebase database realtime a aplicações web

Mod 96 -- **16/12/21**

Firebase é um banco de dados e uma série de aplicações online que tem a benção do google, que é de fato muito bom e muito fácil de se implementar

## Falando mais sobre o firebase e processo de criar conta

O firebase tem uma série de planos, até uma certa quantidade de dados ele não te cobra nada com o plano base e é ótimo para entender e estudar todo o firebase, não tenha medo de criar a conta do firebase, só gasta grana quando você usar de fato, mas é a conta do firebase, toma cuidado para não criar conta no cloud, eu não sei o que acontece se criar, mas ficou com cara de empresa incrivel que é boa mas quer arrancar meu dinheiro também, aí eu sai '-', então por vias das dúvidas não cometa esse possivel erro.

Para a criação de projeto, já no painel de [console do firebase](https://console.firebase.google.com/), adicionado a conta google, você deve fazer o que todo mortal já pesquisou no yt, clicar para inicializar com o database um projeto (Lado direito), colocar o nome, voltar para a tela inicial, clicar no icone **</>** da tela inicial para adicionar o projeto e se deparar com três opções, uma que ninguem sabe o que é. a ultima, se você sabe me pergunto o que você tá fazendo lendo meu repositório por diversão, a do meio para adicionar no script, o que se você for fazer, é o mais simples e o mais fácil, mas coloca como método e inicializa ele dentro do js. n faz isso com uma tar script PELO AMOR DE SANTO DEUX, se você não acredita, troca para .... sla, destino, n sei porquê tô escrevendo sobre isso. Agora se você é doente de npm igual a mim e quer fazer com essa ferramenta linda porque já tá usando, prepara a bunda e senta que lá vem história.

![senta](https://thumbs.gfycat.com/BlandDelayedBedlingtonterrier-mobile.mp4)

## Instalando o firebase

Voce pode entrar em firebase.google.com, ou clica [aquiSenhorNissoAquiEscritoEmCamelCase](https://firebase.google.com/) e clicar em ir para console, nisso você pode configurar um novo projeto. E na página principal, ir em develop -> database -> realTime Database

modo bloqueado = banco de dados privado  
modo de teste = banco de dados público

Mas vamos lá, por que pelo menos para descobrir como faz isso com o npm, eu demorei anos, se você entende ingles, tem um tutorial deep das interweb que eu encontrei [aqui](https://www.youtube.com/watch?v=qbxj_36UkWs), porém esse procedimento acontece somente quando já possuímos o **firebase-tools** e logamos nele, para baixar o firebase tools é só escrever **npm install -g firebase-tolls** e para baixar o firebase **npm install firebase** e loga com a sua conta do google usando **firebase login no console**, após isso podemos seguir a ordem do vídeo que fica tudo certo