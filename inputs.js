let textoDelUsuario = '';


const matrizReemplazosEn = [
    {original: /a/gi, remplazo: "akwa"},
    {original: /e/gi, remplazo: "ewke"},
    {original: /i/gi, remplazo: "ikwi"},
    {original: /o/gi, remplazo: "owko"},
    {original: /u/gi, remplazo: "ukwu"},
];

const matrizReemplazosDe = [
    {original: /akwa/gi, remplazo: "a"},
    {original: /ewke/gi, remplazo: "e"},
    {original: /ikwi/gi, remplazo: "i"},
    {original: /owko/gi, remplazo: "o"},
    {original: /ukwu/gi, remplazo: "u"},
];

function IntentoEncriptar() {
    let txtArea = document.getElementById('textoDeUsuario');
    textoDelUsuario = txtArea.value;

    matrizReemplazosEn.forEach(({original, remplazo}) =>{
        textoDelUsuario = textoDelUsuario.replace(original, remplazo);
    });


        document.getElementById('mnsEncontrado').innerHTML = 'Tu texto fue encriptado';
        document.getElementById('textDeSalida').innerHTML = textoDelUsuario;
        document.getElementById('cajaReinciar').removeAttribute('disabled');
}

function IntentoDesencriptar() {
    let txtArea = document.getElementById('textoDeUsuario');
    textoDelUsuario = txtArea.value;

    matrizReemplazosDe.forEach(({original, remplazo}) =>{
        textoDelUsuario =textoDelUsuario.replace(original, remplazo);
    });

        document.getElementById('mnsEncontrado').innerHTML = 'Tu texto fue Desencriptado';
        document.getElementById('textDeSalida').innerHTML = textoDelUsuario;
        document.getElementById('cajaReinciar').removeAttribute('disabled');

}


function btnRest(){
    condicionesIniciales();
    document.getElementById('cajaReinciar').setAttribute('disabled','true');
}

function btnCopy(){
    var textoSalida = document.getElementById('textDeSalida').textContent;

    var inputTemp = document.createElement('input');
    inputTemp.value = textoSalida;
    document.body.appendChild(inputTemp);

    inputTemp.select();
    inputTemp.setSelectionRange(0,99999);

    document.execCommand('copy');

    document.body.removeChild(inputTemp);
}

function condicionesIniciales (){
    document.getElementById('mnsEncontrado').innerHTML = 'Ningún mensaje fue encontrado';
    document.getElementById('textDeSalida').innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';
    document.getElementById('textoDeUsuario').value = "";
}

condicionesIniciales();