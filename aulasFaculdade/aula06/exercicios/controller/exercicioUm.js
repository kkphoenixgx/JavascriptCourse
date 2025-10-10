import Contato from "../model/Contato.js";


console.log("Counter start: ", Contato.counter);

console.log( "Criando contatos: ",  new Contato(), new Contato(), new Contato());

console.log("Counter after: ", Contato.counter);
