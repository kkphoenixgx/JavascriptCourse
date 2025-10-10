import Contato from "../model/Contato.js";
import { loadContatosFromDatabase, saveContatoInDatabase } from "./databaseController.js";

const tabela = document.getElementById("listTable");

export function criarContato(nome, telefone){
  let contato;
  
  try {
    contato = new Contato(nome, telefone);
  } 
  catch (error) {
    throw error
  }
  return contato;
}

export function salvarContato(contato){
  try {
    saveContatoInDatabase(contato);
  } 
  catch (error) {
    throw error;
  }
}

export function listarContatosNaTela(){
  
  let contatos = loadContatosFromDatabase();

  if(contatos === null) throw new Error("Sem contatos");;

  tabela.innerHTML = ''

  for (const contato of contatos) {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdTel = document.createElement("td");
    
    tdName.innerText = contato.nome;
    tdTel.innerText = contato.telefone;

    tr.appendChild(tdName);
    tr.appendChild(tdTel);

    tabela.appendChild(tr);

  }


}