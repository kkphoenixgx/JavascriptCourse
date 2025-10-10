import Contato from "./classes/Contato.js";
import ContatoWeb from "./classes/ContatoWeb.js";
import { concatena, imprimeApos2, imprimeEmail, imprimePrimeiroETerceiro, clonar, clonarESobreescrever, cloneSemElemento } from "./exercicio1js.js";

const objExemplo = { nome: "kaua", email: "kkphoenixgx@gmail.com" }

// ------------------------------- Exercício 1 -------------------------------

console.log("Imprime concatena:", concatena([1, 2, 3, 4], [5, 6, 7, 8])); // Imprime concatena: (8) [1, 2, 3, 4, 5, 6, 7, 8]

imprimePrimeiroETerceiro(...[0, 1, 2, 3]); // imprime primeiro e terceiro:  0 2

imprimePrimeiroETerceiro(...[0, 1, 2, 3, 4, 5, 6]); // imprime primeiro e terceiro:  0 2

imprimeApos2(...[0, 1, 2, 3, 4, 5, 6]); //Imprime após 2: 2 3 4 5 6

imprimeEmail( objExemplo); // Imprime email:  kkphoenixgx@gmail.com

console.log( clonar( objExemplo  ) ); //{nome: 'kaua', email: 'kkphoenixgx@gmail.com'}

clonarESobreescrever( {nome: "Ana", idade: 7}, {idade: 8} ); // {nome: 'Ana', idade: 8}

console.log( cloneSemElemento(5, [1, 2, 3, 4, 5]) ); // [1, 2, 3, 4]

// ------------------------------- Exercício 2 -------------------------------

console.clear() //! flagDebug

console.log(new Contato("Kauã Alves Santos", "21993344251").comoObjeto());
console.log(new ContatoWeb("Kauã Alves Santos", "21993344251", "kauaAlvesWorkplace@gmail.com").comoObjeto());

