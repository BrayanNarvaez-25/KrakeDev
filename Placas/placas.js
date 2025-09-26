validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let provincia;
    let Vehiculo
    let diaPicoYplaca;
    if(erroresEstructura == null){
        provincia = obtenerProvincia(placa);
        Vehiculo = obtenerTipoVehiculo(placa);
        diaPicoYplaca = obtenerDiaPicoYPlaca(placa);
        return mostrarTexto("lblValidacion","ESTRUCTURA VALIDA")
    }else{
        return mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA")
    }
}