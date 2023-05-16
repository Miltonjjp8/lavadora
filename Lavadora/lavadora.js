function apagar() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var apagarCheckbox = document.getElementById('inputApagar'); 

    apagarCheckbox.checked = !apagarCheckbox.checked;

    checkboxes.forEach(function (checkbox) {
        if (checkbox !== apagarCheckbox) {
            checkbox.checked = false;
        }
    });
}

function lavar() {
    var checkbox = document.getElementById("input10");
    checkbox.checked = !checkbox.checked;
}

var indiceAgua = -1;
function nivelAgua() {
    var inputs = document.getElementsByClassName("nivel-agua")
    var inputNum = inputs.length;

    if (indiceAgua >= 0) {
        inputs[indiceAgua].checked = false;
    }
    inputs[(indiceAgua+1) % inputNum].checked = true;

    indiceAgua = (indiceAgua+1)%inputNum;

   
}

var indiceLavado = -1;
function nivelLavado() {
    var inputs = document.getElementsByClassName("nivel-lavado")
    var inputNum = inputs.length;

    if (indiceLavado >= 0) {
        inputs[indiceLavado].checked = false;
    }
    inputs[(indiceLavado+1) % inputNum].checked = true;

    indiceLavado = (indiceLavado+1)%inputNum;
}

var indiceTiempo = -1;
function tiempoLavado() {
    var inputs = document.getElementsByClassName("tiempo-lavado")
    var inputNum = inputs.length;

    if (indiceTiempo >= 0) {
        inputs[indiceTiempo].checked = false;
    }
    inputs[(indiceTiempo+1) % inputNum].checked = true;

    indiceTiempo = (indiceTiempo+1)%inputNum;
}

var indiceEnjuagar = -1;
function enjuague() {
    var inputs = document.getElementsByClassName("enjuagar")
    var inputNum = inputs.length;

    if (indiceEnjuagar >= 0) {
        inputs[indiceEnjuagar].checked = false;
    }
    inputs[(indiceEnjuagar+1) % inputNum].checked = true;

    indiceEnjuagar = (indiceEnjuagar+1)%inputNum;
}