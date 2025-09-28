//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;
let concidencias = 0;
let errores = 0;

esMayuscula = function (caracter) {
    let esMayuscula = caracter.charCodeAt(0);
    if (esMayuscula >= 65 && esMayuscula <= 90) {
        return true;
    }
    return false
}

guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    if (palabra.length != 5) {
        alert("DEBE INGRESAR UNA PALABRA DE EXACTAMENTE 5 LETRAS MAYUSCULAS");
    }
    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i]))
            alert("DEBE INGRESAR SOLO LETRAS MAYUSCULAS");
    }
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}

mostrarLetra = function (letra, posicion) {
    let posicionLetra = posicion;
    if (posicionLetra == 0) {
        mostrarTexto("div0", letra);
    }
    if (posicionLetra == 1) {
        mostrarTexto("div1", letra);
    }
    if (posicionLetra == 2) {
        mostrarTexto("div2", letra);
    }
    if (posicionLetra == 3) {
        mostrarTexto("div3", letra);
    }
    if (posicionLetra == 4) {
        mostrarTexto("div4", letra);
    }
}

validar = function (letra) {
    let letrasEncontradas = 0;
    let posicion;
    for (let i = 0; i <= palabraSecreta.length; i++) {
        posicion = palabraSecreta.charAt(i);
        if (letra == posicion) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            concidencias++;
        }
    }
    if (letrasEncontradas == 0) {
        errores++;
        mostrarAhorcado();
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
    }

}

ingresarLetra = function () {
    intentos++;
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        validar(letra);
        if (concidencias == 5) {
            alert("HA GANADO");
        }
        if (intentos == 10) {
            alert("HA PERDIDO");
        }
    } else {
        errores++;
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS");
    }
}

mostrarAhorcado = function(){
    if(errores == 1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    }
     if(errores == 2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }
     if(errores == 3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }
     if(errores == 4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }
     if(errores == 5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }
     if(errores == 6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }
     if(errores == 7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }
     if(errores == 8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }
     if(errores == 9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }
}