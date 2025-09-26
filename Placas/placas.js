validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        return mostrarTexto("lblValidacion","ESTRUCTURA VALIDA")
    }else{
        return mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA")
    }
}