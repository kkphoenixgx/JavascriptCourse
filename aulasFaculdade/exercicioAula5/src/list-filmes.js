export let currentPage = 0;
export let maxPages = 1;

const itemsPerPage = 10;

export function drawFilmes() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    /**@type { Array<Array<{nome: string, genero: string, ano: number}>> } */
    const pages = JSON.parse(localStorage.getItem('pages') || '[]');
    if (pages.length === 0) return;

    if (currentPage >= pages.length) {
        currentPage = pages.length - 1;
    }
    if (currentPage < 0) currentPage = 0;

    const filmesDaPagina = pages[currentPage];

    for (const value of filmesDaPagina) {
        const line = filmToString(value);
        tbody.innerHTML += line;
    }

}

//? -------------------- CRUD --------------------

export function create() {
    document.querySelector('dialog').showModal();
}

/** * @param {Event} event  */
export function save(event) {
    event.preventDefault()

    const output = document.querySelector("output");

    const ano = parseInt(document.querySelector('#ano').value);

    const nome = document.querySelector('#nome').value;
    const tamanhoNome = nome.length;
    if (tamanhoNome < 4 || tamanhoNome > 50) { output.innerText = "O nome deve ter de 4 a 50 caracteres"; return; }

    if (isNaN(ano)) { output.innerText = "O nome deve ser um número"; return; }

    const genero = document.querySelector('#genero').value;
    const filme = { nome: nome, genero: genero, ano: ano }

    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');

    filmes.push(filme);

    updateStorageAndRedraw(filmes);

    document.querySelector("form").reset();
    document.querySelector("dialog").close();
    currentPage = maxPages -1;
    drawFilmes();
}

export function remove() {

    const linha = document.querySelector('tbody tr.selected');
    if (!linha) alert("Seleciona a linha antes neh, pai...")

    if (!confirm("Deseja mesmo remover?")) return;

    linha.remove();

    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
    filmes.splice(linha.sectionRowIndex, 1)
    
    updateStorageAndRedraw(filmes);
}

export function alterar(){
    let selectedLine = document.querySelector('tbody tr.selected');
    const dialogEl = document.querySelector('dialog');
    const dialogFormSaveBtn = document.querySelector('#salvar');

    const filmeNome = selectedLine.childNodes[1].innerText
    const filmeGenero = selectedLine.childNodes[3].innerText;
    const filmeAno = selectedLine.childNodes[5].innerText;

    let campoNome = document.getElementById("nome")
    let campoGenero = document.getElementById("genero")
    let campoAno = document.getElementById("ano")

    dialogEl.showModal();
    
    campoNome.value = filmeNome
    campoGenero.value = filmeGenero
    campoAno.value = filmeAno
    
    const onSubmit = (event)=>{
    
        const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
        filmes.splice(selectedLine.sectionRowIndex, 1)
        updateStorageAndRedraw(filmes);
       
        dialogFormSaveBtn.removeEventListener("click", onSubmit);
    }

    dialogFormSaveBtn.addEventListener("click", onSubmit);

    dialogEl.addEventListener("cancel", ()=> {
        dialogFormSaveBtn.removeEventListener("submit", onSubmit);
    })

}

/** @param { String } nomeBuscado  */
export function buscar(nomeBuscado){
    /** @type { Array<{nome: string, genero: string, ano: number}> } */
    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');

    if (!nomeBuscado) {
        paginate(filmes);
        drawFilmes();
        return;
    }

    const searchResult = filmes.filter(filme => 
        filme.nome.toLowerCase().includes(nomeBuscado.toLowerCase())
    );

    paginate(searchResult);
    drawFilmes();
}


//? -------------------- Navigation --------------------

/**  * @param { Array<{nome: string, genero: string, ano: number}> } filmes  */
export const paginate = (filmes)=> {
    /**@type { Array<Array<{nome: string, genero: string, ano: number}>> } */
    let collectionPages = []
    
    for (let i = 0; i < filmes.length; i += itemsPerPage) {
        const chunk = filmes.slice(i, i + itemsPerPage);
        collectionPages.push(chunk);
    }
    
    maxPages = collectionPages.length > 0 ? collectionPages.length : 1;
    localStorage.setItem('pages', JSON.stringify(collectionPages));
    document.querySelector('tbody').dispatchEvent(new Event('pageChange'));
}

/* 
  ? Não existe a capacidade de currentPage < 0, nem currentPage === maxPage
  ? Contudo, list-filmes não conhece a view.
  * Por isso ele dará verificação de currentPage < 0 e currentPage === maxPage
*/

export const anterior = ()=>{
    /** @type { Array<{nome: string, genero: string, ano: number}> } */

    if (currentPage > 0) currentPage--;
    drawFilmes();
    document.querySelector('tbody').dispatchEvent(new Event('pageChange'));
}

export const proximo = ()=>{
    if (currentPage < maxPages - 1) currentPage++;
    drawFilmes();
    document.querySelector('tbody').dispatchEvent(new Event('pageChange'));
}


//? -------------------- HELPERS --------------------

/**  * @param { {nome: string, genero: string, ano: number} } filme  */
function filmToString(filme) {
    return `<tr onClick="clickedLine(event)" >
        <td>${filme.nome}</td>
        <td>${filme.genero}</td>
        <td>${filme.ano}</td>
    </tr>`;
}

/** * @param {Event} event */
function clickedLine(event) {

    const currentLine = event.target.parentElement;
    const selected = document.querySelector(".selected");

    if (selected) selected.classList.remove("selected")
    currentLine.classList.toggle("selected");
}

window.clickedLine = clickedLine;

/** * @param {Array<{nome: string, genero: string, ano: number}>} filmes */
function updateStorageAndRedraw(filmes) {
    localStorage.setItem('filmes', JSON.stringify(filmes));
    paginate(filmes);
    drawFilmes();
}