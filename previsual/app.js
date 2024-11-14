const caratulas = [
    '../Imaganes/TU MEJOR AMIGO - CARATULA.jpg',
    '../Imaganes/SLEDERMAN - CARATULA.jpg',
    '../Imaganes/BAD - BOYS - CARATULA.webp'
];

let indicePrincipal = 1;

function cambiarCaratula(direccion) {
    indicePrincipal = (indicePrincipal + direccion + caratulas.length) % caratulas.length;

    document.getElementById('principal').querySelector('img').src = caratulas[indicePrincipal];
    document.getElementById('izquierda').querySelector('img').src = caratulas[(indicePrincipal - 1 + caratulas.length) % caratulas.length];
    document.getElementById('derecha').querySelector('img').src = caratulas[(indicePrincipal + 1) % caratulas.length];
}

