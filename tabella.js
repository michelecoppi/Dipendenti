let data = [
    {
        "id": 10001,
        "birthDate": "1953-09-01",
        "firstName": "Georgi",
        "lastName": "Facello",
        "gender": "M",
        "hireDate": "1986-06-25",
    },
    {
        "id": 10002,
        "birthDate": "1964-06-01",
        "firstName": "Bezalel",
        "lastName": "Simmel",
        "gender": "F",
        "hireDate": "1985-11-20",
    },
    {
        "id": 10003,
        "birthDate": "1959-12-02",
        "firstName": "Parto",
        "lastName": "Bamford",
        "gender": "M",
        "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
        "id": 10004,
        "birthDate": "1954-04-30",
        "firstName": "Chirstian",
        "lastName": "Koblick",
        "gender": "M",
        "hireDate": "1986-11-30",

    },
    {
        "id": 10005,
        "birthDate": "1955-01-20",
        "firstName": "Kyoichi",
        "lastName": "Maliniak",
        "gender": "M",
        "hireDate": "1989-09-11T22:00:00.000+0000",

    }
];
let nextid = 10006;

function creaTabella() {
    let table = "";
    $.each(data, function (chiave, valore) {
        table = table + "<tr>";
        table = table + "<td>" + valore.id + "</td>";
        table = table + "<td>" + valore.firstName + "</td>";
        table = table + "<td>" + valore.lastName + "</td>";
        table = table + "<td>" + valore.gender + "</td>";
        table = table + "</tr>"
    });

    $("#tbody").append(table);
}

$(document).ready(function () { creaTabella(); });

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

function rimuovi() {
    let identifica = prompt("Inserisci id della riga da rimuovere");
    let table = document.getElementById("prova");




    if (ricercaInCol(1, identifica) < 1) {
        alert("Nessun elemento possiede questo id ")
    }else{
        table.deleteRow(ricercaInCol(1, identifica));
    }



}
function modifica() {
    let table = document.getElementById("prova");
    let nome=prompt("Inserisci id della riga da modificare");
   
    let selectedCell = selectedRow.cells [targetCell-1];
    selectedCell.innerHTML = fillContents;
     
    $("#tbody td").replaceWith("<td>macaco</td>");
    


}

function ricercaInCol(colonna, identifica) {


    let table = document.getElementById("prova");
    let n_colonne = table.getElementsByTagName('th').length;
    let celle = table.getElementsByTagName('td');
    let val = -1;


    for (var j = (colonna - 1); j < celle.length; j = (j + n_colonne)) {


        if (celle[j].innerHTML == identifica) {
            
            val=+j;
            break;
          
        }

    }
   
   val=(val/4)+1;
  
   
   
    return val;

}
