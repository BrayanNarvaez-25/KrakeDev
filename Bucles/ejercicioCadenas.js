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