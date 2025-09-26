validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let provincia;
    if(erroresEstructura == null){
        provincia = obtenerProvincia(placa)
        return mostrarTexto("lblValidacion","ESTRUCTURA VALIDA")
    }else{
        return mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA")
    }
}