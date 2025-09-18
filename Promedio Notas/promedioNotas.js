calcularPromedioNotas = function(){
    let n1Float = recuperarFlotante("txtNota1");

    let n2Float = recuperarFlotante("txtNota2");

    let n3Float = recuperarFlotante("txtNota3");
    
    let promedio = calcularPromedio(n1Float,n2Float,n3Float);

    let promRedondeado = promedio.toFixed(2);

    let resultado = cambiarTexto("promedio","Promedio: " + promRedondeado);


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

}