calcularTasaInteres = function(ingesoAnual){
    let ingresoAnualFloat = recuperarFlotante("txt");
    if(ingresoAnualFloat < 300000){ 
        console.log("La tasa es del 16%");
    }else if(ingresoAnualFloat > 300000 && ingresoAnualFloat < 500000){
        console.log("La tasa es del 15%");
    }else if(ingresoAnualFloat > 500000 && ingresoAnualFloat < 1000000){
        console.log("La tasa es del 14%");
    }else if(ingresoAnualFloat > 1000000 && ingresoAnualFloat < 2000000){
        console.log("La tasa es del 13%");
    }else{
        console.log("La tasa es del 12%");
    }
    return ingresoAnualFloat;
}

calcularCapacidadPago = function(edad,ingresos,egresos){
        let edadEntero = recuperarEntero("txte");
        let ingresosFloat = recuperarFlotante("txtI");
        let egresosFloat = recuperarFlotante("txtE");
        if(edadEntero > 50){
            return console.log((ingresosFloat - egresosFloat)*0.30);
        }else{
            return console.log((ingresosFloat - egresosFloat)*0.40)
        }
}

calcularDescuento = function(precio,cantidad){
    let precioFloat = recuperarFlotante("txtP");
    let cantidadEntero = recuperarEntero("txtC");
    if(cantidadEntero < 3){
        return console.log("No recibe descuento");
    }else if(cantidadEntero >= 3 && cantidadEntero <=5){
        return console.log((cantidadEntero * precioFloat)*0.2);
    }else if(cantidadEntero >=6 && cantidadEntero <=11){
        return console.log((cantidadEntero * precioFloat)*0.3);
    }else{
        return console.log((cantidadEntero * precioFloat)*0.4);
    }
}

determinarColesterolLDL = function(nivelColesterol){
    let colesteroFloat = recuperarTexto("txtCO");
    if(colesteroFloat > 120 && colesteroFloat < 170){
        return console.log("Colesterol Total");
    }else if(colesteroFloat >110 && colesteroFloat < 120){
        return console.log("No - HDL")
    }else if(colesteroFloat > 45 && colesteroFloat < 100){
        return console.log("Colesterol LDL");
    }else{
        return console.log("Colesterol HDL");
    }
}

validarClave = function(clave){
    let validarClave = recuperarTexto("txtCLAVE");
    let longitud = validarClave.length;
    if(longitud >= 8 && longitud <= 16){
        return console.log("True");
    }else{
        return console.log("false");
    }
}

esMayuscula = function(caracter){
    let string = recuperarTexto("txtM");
    let esMayuscula = string.charCodeAt(0);
    if(esMayuscula >= 65 && esMayuscula <= 90){
        return console.log("true");
    }else{
        return console.log("false");
    }
}

esMinuscula = function(caracter){
    let string = recuperarTexto("txtMIN");
    let esMinuscula = string.charCodeAt(0);
    if(esMinuscula >= 97 && esMinuscula <= 122){
        return console.log("true");
    }else{
        return console.log("false");
    }
}

esDigito = function(caracter){
    let string = recuperarTexto("txtD");
    let esDigito = string.charCodeAt(0);
    if(esDigito >= 48 && esDigito <= 57){
        return console.log("true");
    }else{
        console.log("false");
    }
}

darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let mateFloat = recuperarFlotante("txtMATE");
    let fisicaFloat = recuperarFlotante("txtFISICA");
    let geoFloat = recuperarFlotante("txtGEO");
    if(mateFloat > 90 || fisicaFloat > 90 || geoFloat > 90 ){
        return console.log("true")
    }else{
        return console.log("false");
    }
}

otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let mateFloat = recuperarFlotante("txtMATE2");
    let fisicaFloat = recuperarFlotante("txtFISICA2");
    let geoFloat = recuperarFlotante("txtGEO2");
    if(mateFloat > 90 || fisicaFloat > 90 && geoFloat > 80){
        return console.log("true");
    }else{
        return console.log("false");
    }
}

dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    let mateFloat = recuperarFlotante("txtMATE3");
    let fisicaFloat = recuperarFlotante("txtFISICA3");
    let geoFloat = recuperarFlotante("txtGEO3");
    if(mateFloat > 90 || fisicaFloat > 90 || geoFloat > 90 && fisicaFloat > mateFloat){
        return console.log("true");
    }else{
        return console.log("false");
    }
}