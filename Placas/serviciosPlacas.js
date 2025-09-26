validarEstructura = function (placa) {
    let errores = [];
    if (placa.length != 7 && placa.length != 8) {
        return errores.push(mostrarTexto("lblErrores", "La longuitud de la placa debe ser de 7 u 8 caracteres"));
    }else if (placa.length >= 1 && false == esMayuscula(placa[0])) {
        return errores.push(mostrarTexto("lblErrores", "El primer caracter debe ser una letra Mayuscula"));
    }else if (placa.length >= 2 && false == esMayuscula(placa[1])) {
        return errores.push(mostrarTexto("lblErrores", "El segundo caracter debe ser una letra Mayuscula"));
    }
    else if (placa.length >= 3 && false == esMayuscula(placa[2])) {
        return errores.push(mostrarTexto("lblErrores", "El tercer caracter debe ser una letra Mayuscula"));
    }
    else if (placa.length >= 4 && false == esGuion(placa[3])) {
        return errores.push(mostrarTexto("lblErrores","El cuarto caracter debe ser un guion"));
    }
    else if (placa.length >= 5 && false == esDigito(placa[4])) {
        return errores.push(mostrarTexto("lblErrores","El quinto caracter debe ser un digito"));
    }
    else if (placa.length >= 6 && false == esDigito(placa[5])) {
        return errores.push(mostrarTexto("lblErrores","El sexto caracter debe ser un digito"));
    }
    else if (placa.length >= 7 && false == esDigito(placa[6])) {
        return errores.push(mostrarTexto("lblErrores","El septimo caracter debe ser un digito"));
    }
    else if (placa.length == 8 && false == esDigito(placa[7])) {
        return errores.push(mostrarTexto("","El octavo caracter debe ser un digito"));
    }
    else if (errores.length > 0) {
        return errores.join(mostrarTexto("lblErrores",", "));
    } else {
        return null;
    }

}

const PROVINCIAS = {
  'A': 'Azuay',
  'B': 'Bolivar', 
  'C': 'Carchi',
  'E': 'Esmeraldas',
  'G': 'Guayas',
  'H': 'Chimborazo',
  'I': 'Imbabura',
  'J': 'Loja',
  'K': 'Cañar',
  'L': 'Los Rios',
  'M': 'Manabí',
  'N': 'Napo',
  'O': 'El Oro',
  'P': 'Pichincha',
  'Q': 'Orellana',
  'R': 'Pastaza',
  'S': 'Morona Santiago',
  'T': 'Tungurahua',
  'U': 'Sucumbios',
  'V': 'Galapagos',
  'W': 'Cotopaxi',
  'X': 'Zamora Chinchipe',
  'Y': 'Santa Elena',
  'Z': 'Santo Domingo'
}

obtenerProvincia = function(placa){
    let primeraLetra = placa.charAt(0);
    if(placa != null){
        return mostrarTexto("lblProvincia",PROVINCIAS[primeraLetra]);
    }else{
        mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
        return null;
    }
}

const vehiculos = {
    'A': 'Vehiculos comerciale',
    'Z': 'Vehiculos comerciale',
    'E': 'Gubernamental',
    'X': 'Vehiculo de uso oficial',
    'S': 'Vehiculos de gobierno provincial',
    'M': 'Vehiculos municipales',
    'B': 'Vehiculo Particular',
    'C': 'Vehiculo Particular',
    'D': 'Vehiculo Particular',
    'F': 'Vehiculo Particular',
    'G': 'Vehiculo Particular',
    'H': 'Vehiculo Particular',
    'I': 'Vehiculo Particular',
    'J': 'Vehiculo Particular',
    'K': 'Vehiculo Particular',
    'L': 'Vehiculo Particular',
    'N': 'Vehiculo Particular',
    'Ñ': 'Vehiculo Particular',
    'O': 'Vehiculo Particular',
    'P': 'Vehiculo Particular',
    'Q': 'Vehiculo Particular',
    'R': 'Vehiculo Particular',
    'T': 'Vehiculo Particular',
    'U': 'Vehiculo Particular',
    'V': 'Vehiculo Particular',
    'W': 'Vehiculo Particular',
    'Y': 'Vehiculo Particular'

}
obtenerTipoVehiculo = function(placa){
    let segundaLetra = placa.charAt(1);
    if(placa != null){
        return mostrarTexto("lblVechiculo",vehiculos[segundaLetra]);
    }else{
        mostrarTexto("lblVechiculo","VEHICULO INCORRECTO")
        return null
    }
}