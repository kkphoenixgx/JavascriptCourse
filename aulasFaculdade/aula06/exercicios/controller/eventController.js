import { salvarContato, listarContatosNaTela, criarContato } from "./ContatosController.js";
import { showToast } from "../view/toast.js";

const criarContatoContainerEl = document.getElementById("criar-contato-container");
const listarContatoContainerEl = document.getElementById("listar-contato-container");

const criarContatoMenuBtn = document.getElementById("criar-contato");
const listarContatoMenuBtn = document.getElementById("listar-contato");

const criarContatoForm = document.getElementById("criar-contato-form")

const nameInputEl = document.getElementById("nome")
const telInputEl = document.getElementById("telefone")
const criarContatoBtn = document.getElementById("criar-contato-button");

/*
 ? Decidi ainda não criar diferentes arquivos
 ? pela simplicidade do código atual
*/

// ----------- Menu Events -----------

criarContatoMenuBtn.addEventListener("click", ()=>{
  criarContatoContainerEl.classList.remove("disable");
  listarContatoContainerEl.classList.add("disable");
})
listarContatoMenuBtn.addEventListener("click", ()=>{
  criarContatoContainerEl.classList.add("disable");
  listarContatoContainerEl.classList.remove("disable");

  try {
    listarContatosNaTela();
  } catch (error) {
    showToast(error, "default", 700)
  }
})

// ----------- Content Events -----------

criarContatoBtn.addEventListener("click", event=>{
  event.preventDefault();

  try {
    let contato = criarContato(nameInputEl.value, telInputEl.value)
    salvarContato(contato);
    criarContatoForm.reset();
    showToast("Contato salvo com sucesso", "success");
  } catch (error) {
    showToast(error, "error")
  }
  
})

