let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(selecionado){
    let elemento = generarElemento();
    mostrarImagen( "computadora",generarRuta(elemento)) 
    let ganador = determinarGanador(selecionado,elemento);

    if(ganador == 0){
        return mostrarTexto("lblGanador","EMPATE");
    }
    if(ganador == 1){
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("lblUsuario","Puntos Usuario:" + puntosUsuario);
        if(puntosUsuario == 5){
        return mostrarTexto("lblEND","HAZ GANADO EL JUEGO");
        }
        return mostrarTexto("lblGanador","GANASTE LA PARTIDA!!");
    }
    if(ganador == 2){
        puntosComputador = puntosComputador + 1;
        mostrarTexto("lblComputador","Puntos Computadora:" + puntosComputador);
        if(puntosComputador == 5){
            return mostrarTexto("lblEND","LA COMPUTADORA TE HA VENCIDO");
        }
        return mostrarTexto("lblGanador","PERDISTE LA PARTIDA!!");
    }

}