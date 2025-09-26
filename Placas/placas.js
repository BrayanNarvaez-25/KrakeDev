validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let provincia;
    let Vehiculo
    if(erroresEstructura == null){
        provincia = obtenerProvincia(placa)
        Vehiculo = obtenerTipoVehiculo(placa);
        return mostrarTexto("lblValidacion","ESTRUCTURA VALIDA")
    }else{
        return mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA")
    }
}