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
mostrarTexto= function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}   

mostrarImagen = function(idComponente,rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTextoCaja = function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}