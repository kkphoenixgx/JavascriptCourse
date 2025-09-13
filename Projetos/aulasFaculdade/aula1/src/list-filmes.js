/**  * @param { Array<{nome: string, genero: string, ano: number}> } filmes  */
export function drawFilmes(filmes) {

    const tbody = document.querySelector('tbody');

    for (const value of filmes) {
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
    event.preventDefault();

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

    localStorage.setItem('filmes', JSON.stringify(filmes));

    document.querySelector('tbody').innerHTML += filmToString(filme);

    document.querySelector("form").reset();
    document.querySelector("dialog").close();
}

export function remove() {

    const linha = document.querySelector('tbody tr.selected');
    if (!linha) alert("Seleciona a linha antes neh, pai...")

    if (!confirm("Deseja mesmo remover?")) return;

    linha.remove();

    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
    filmes.splice(linha.sectionRowIndex, 1)

    localStorage.setItem("filmes", JSON.stringify(filmes));


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

/**
 * 
 * @param {Event} event 
 */
function clickedLine(event) {

    const currentLine = event.target.parentElement;
    const selected = document.querySelector(".selected");

    if (selected) selected.classList.remove("selected")
    currentLine.classList.toggle("selected");
}

window.clickedLine = clickedLine;

