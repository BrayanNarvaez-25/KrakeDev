saludar = function(){
    let nombre = recuperarTexto("txt");
    let apellido = recuperarTexto("txtA");
    let edad =  recuperarInt("txtE");
    let estatura = recuperarFloat("txtES");
}

recuperarTexto = function(idComponente){
    let cmp;
    let valorIngresado;
    cmp = document.getElementById(idComponente);
    valorIngresado = cmp.value;
    return valorIngresado;
}
recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}