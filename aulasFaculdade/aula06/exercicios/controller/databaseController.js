export function saveContatoInDatabase(contato){
  let currentContacts = localStorage.getItem("contatos");
  
  //? Criar o array
  if(currentContacts === null){
    let contatoString = JSON.stringify(contato.comoObjeto());
    contatoString = "[" + contatoString + "]";
    localStorage.setItem("contatos", contatoString)
  } 
  //? Adicionar ao array
  else {
    currentContacts = JSON.parse(currentContacts);
    currentContacts.push(contato.comoObjeto());
    localStorage.setItem("contatos", JSON.stringify(currentContacts));
  }
}

export function loadContatosFromDatabase(){
  return JSON.parse(localStorage.getItem("contatos"));
}
