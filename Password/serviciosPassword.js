esMayuscula = function (caracter) {
    let esMayuscula = caracter.charCodeAt(0);
    if (esMayuscula >= 65 && esMayuscula <= 90) {
        return true;
    }
    return false
}

esDigito = function (caracter) {
    let esDigito = caracter.charCodeAt(0);
    if (esDigito >= 48 && esDigito <= 57) {
        return true;
    }
    return false;
}

esCaracter = function (caracter) {
    let esCaracter = caracter.charCodeAt(0);
    if (esCaracter == 45 || esCaracter == 42 || esCaracter == 95) {
        return true;
    }
    return false
}

contarMayusculas = function (cadena) {
    let letra;
    let contadorMayusculas = 0;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas++;
        }
    }
    return contadorMayusculas;
}

contarDigitos = function (cadena) {
    let digito;
    let contadorDigito = 0;
    for (let i = 0; i < cadena.length; i++) {
        digito = cadena.charAt(i);
        if (esDigito(digito)) {
            contadorDigito++;
        }
    }
    return contadorDigito;
}

contarCaracter = function(cadena){
    let caracter;
    let contadorCaracter = 0;
    for(let i = 0;i < cadena.length; i++){
        caracter = cadena.charAt(i);
        if(esCaracter(caracter)){
            contadorCaracter++;
        }
    }
    return contadorCaracter;
}