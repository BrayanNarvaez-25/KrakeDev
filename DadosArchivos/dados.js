jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio > 3){
        console.log("ES MAYOR A 3");
        console.log("GANASTE");
    }else{
        console.log("ES MENOR A 3");
        console.log("ESTAS DE MALAS");
    }
}

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numEntero;
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 6;
    numEntero = parseInt(numeroMultiplicado);
    valorDado = numEntero + 1;
    return valorDado;
}

