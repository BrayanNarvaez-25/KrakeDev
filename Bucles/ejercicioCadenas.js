ejecutarPrueba1 = function () {
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function (cadena) {
    //0123
    //Juan 
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " POSICION " + posicion)
    }
}

ejecutarPrueba2 = function () {
    let mensaje = recuperarTexto("txtCadena");
    mostrarTexto("lblResultado", invertirCadena(mensaje));
}

invertirCadena = function (cadena) {
    let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        resultado = resultado + cadena.charAt(posicion);
    }
    return resultado;
}

buscarLetra = function (cadena, letra) {
    let letraInterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraInterada = cadena.charAt(i);
        if (letraInterada == letra) {
            existeLetra = true;
        }
    }
    if (existeLetra == true) {
        return true;
    } else {
        return false;
    }
}

contarMayusculas = function (cadena) {
    let letra;
    let contadorMayusculas = 0;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if(esMyuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas);
}