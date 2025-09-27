validarPassword = function(password){
    let errores = "";
    let validar;
    
    if(password.length < 8){
        errores = "DEBE TENER MINIMO 8 CARACTERES";
        return mostrarTexto("lblErrores",errores);
    }
    
    if(password.length > 16){
        errores = "DEBE TENER MAXIMO 16 CARACTERES";
        return mostrarTexto("lblErrores",errores);
    }

    if(contarMayusculas(password) == 0){
        errores = "DEBE TENER AL MENOS UNA MAYUSCULA";
        return mostrarTexto("lblErrores",errores);
    }

    if(contarDigitos(password) == 0){
        errores = "DEBE TENER AL MENOS UN DIGITO";
        return mostrarTexto("lblErrores",errores);
    }

    if(contarCaracter(password) == 0){
        errores = "DEBE TENER MINIMO UN CARACTER (*,-,_)";
        return mostrarTexto("lblErrores",errores);
    }
    return errores;

}

ejecutarValidacion = function(){
    let validacion = recuperarTexto("txtPassword");
    let resultado = validarPassword(validacion);
    if(resultado == ""){
        mostrarTexto("lblValidar","PASSWORD CORRECTO")
    }
}

limpiar = function(){
    mostrarTextoEnCaja("txtPassword","");
    mostrarTexto("lblErrores","- - - -");
    mostrarTexto("lblValidar","- - - -");
}