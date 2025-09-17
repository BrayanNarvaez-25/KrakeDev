saludar = function(){
    let nombre = recuperarTexto("txt");
    let apellido = recuperarTexto("txtA");
}
recuperarTexto = function(idComponente){
    let cmp;
    let valorIngresado;
    cmp = document.getElementById(idComponente);
    valorIngresado = cmp.value;
    return valorIngresado;
}
