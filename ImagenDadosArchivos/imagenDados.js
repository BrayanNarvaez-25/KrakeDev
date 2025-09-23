let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarpuntos(resultado);
    modificarLanzamientos(resultado)
}

modificarpuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("puntos",puntos)
    if(puntos > 20 ){
        cambiarTexto("resultado","GANASTE")
        limpiar();
    }
    
}

limpiar = function(){
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("puntos",puntos);
    cambiarTexto("lanzamientos",lanzamientos);
    cambiarImagen("imgDado","");
    if(lanzamientos == 5){
        lanzamientos = lanzamientos + 1;
    }   
}

modificarLanzamientos = function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lanzamientos",lanzamientos)
    if(lanzamientos == 0){
        cambiarTexto("resultado","GAME OVER")
        limpiar();
    }
}
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado" , "dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado" , "dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado" , "dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado" , "dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado" , "dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado" , "dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}