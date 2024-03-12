let txtAEncriptar = '';

const matrizReemplazos = [
    {original: /a/gi, remplazo: "rea"},
    {original: /e/gi, remplazo: "foe"},
    {original: /i/gi, remplazo: "goi"},
    {original: /o/gi, remplazo: "tuo"},
    {original: /u/gi, remplazo: "pau"},
];

function IntentoEncriptar() {
    let txtArea = document.getElementById('textoDeUsuario');
    txtAEncriptar = txtArea.value;

    matrizReemplazos.forEach(({original, remplazo}) =>{txtAEncriptar.replace(original, remplazo);});

    console.log(txtAEncriptar);
}
