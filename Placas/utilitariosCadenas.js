esMayuscula = function(caracter){
    let esMayuscula = caracter.charCodeAt(0);
    if(esMayuscula >= 65 && esMayuscula <= 90){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let esDigito = caracter.charCodeAt(0);
    if(esDigito >= 48 && esDigito <= 57){
        return true;
    }else{
        return false;
    }
}

esGuion = function(caracter){
    let esGuion = caracter.charCodeAt(0);
    if(esGuion == 45){
        return true
    }else{
        return false;
    }
}