obtenerAleatorio = function () {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 3;
    let numEntero = parseInt(numeroMultiplicado);
    let valorAleatorio = numEntero + 1;
    return valorAleatorio
}

generarElemento = function () {
    let elemento = obtenerAleatorio();
    if (elemento == 1) {
        return "piedra";
    } else if (elemento == 2) {
        return "papel";
    } else if (elemento == 3) {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let ganador;
    if (eleccionJugador1 == eleccionJugador2) {
        return ganador = 0;
    }
    if ((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") || (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") || (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")) {
        return ganador = 1;
    }else{
        return ganador = 2;
    }
}

generarRuta = function(nombre){
    return `./imagenes/${nombre}.png`;
}

limpiar = function(){
    mostrarImagen("computadora","");
    mostrarTexto("lblGanador","- - -");
    mostrarTexto("lblUsuario","Puntos usuario: 0");
    mostrarTexto("lblComputador","Puntos computadora: 0");
    mostrarTexto("lblEND","- - -");
}