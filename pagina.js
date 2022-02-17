function aggiungi() {
    let table = document.getElementById("prova");
    let tbody = table.getElementsByTagName('tbody')[0];
    let colonne = table.getElementsByTagName('th').length;
    let tr = document.createElement('tr');

    for (let i = 0; i < colonne; i++) {

        let td = document.createElement('td');
        let tx = document.createTextNode(prompt("Inserisci testo per cella " + (i + 1), ""));
        td.appendChild(tx);
        tr.appendChild(td);

    }

    tbody.appendChild(tr);

}

function rimuovi(){
    let tx = document.createTextNode(prompt("Inserisci id della riga da rimuovere"));

}

