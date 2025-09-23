calcularPromedioNotas = function(){
    let n1Float = recuperarFlotante("txtNota1");

    let n2Float = recuperarFlotante("txtNota2");

    let n3Float = recuperarFlotante("txtNota3");
    
    let promedio = calcularPromedio(n1Float,n2Float,n3Float);

    let promRedondeado = promedio.toFixed(2);

    let resultado = cambiarTexto("promedio","Promedio: " + promRedondeado);
        
    if(promRedondeado < 5 && promRedondeado >0){
        cambiarTexto("noticia","REPROBADO");
        cambiarImagen("img","negativo.gif");
    }else if(promRedondeado >= 5 && promRedondeado <= 8){
        cambiarTexto("noticia","BUEN TRABAJO");
        cambiarImagen("img","ok.gif");
    }else if(promRedondeado > 8 && promRedondeado <= 10){
        cambiarTexto("noticia", "EXCELENTE");
        cambiarImagen("img","ok.gif");
    }else{
        cambiarTexto("noticia","DATOS INCORRECTOS");
        cambiarImagen("img","pregunta.gif")
    }
    
}

borrar = function(){
    let cmpTxtCaja;

    cmpTxtCaja = document.getElementById("txtNota1");
    cmpTxtCaja.value = "";

    cmpTxtCaja = document.getElementById("txtNota2");
    cmpTxtCaja.value = "";

    cmpTxtCaja = document.getElementById("txtNota3");
    cmpTxtCaja.value = "";

    cmpTxtCaja = document.getElementById("promedio");
    cmpTxtCaja.innerText = "Promedio:";

    cmpTxtCaja = document.getElementById("noticia");
    cmpTxtCaja.innerText = "- - - - -";

    cambiarImagen("img","pregunta.gif");
}