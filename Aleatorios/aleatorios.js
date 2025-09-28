aleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}

generarAleatorios = function () {
    let aleatorios = [];
    let valorAleatorio;
    let valorIngresado = recuperarInt("txtNum");
    if (valorIngresado < 5 || valorIngresado > 20) {
        alert("DEBE SER UN NUMERO ENTRE 5 Y 20");
    }
    if (valorIngresado >= 5 & valorIngresado <= 20) {
        for (let i = 0; i < valorIngresado; i++) {
            console.log(i);
            valorAleatorio = aleatorio();
            aleatorios = valorAleatorio;
        }
    }
    mostrarResultados(aleatorios);
}

mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById("tabla");
    let contenidoTabla = "<table><tr><th> ALEATORIO </th></tr>";
    let miArreglo = parseInt(arregloNumeros);
    for(let i = 0; i <= miArreglo;i++){
        contenidoTabla += "<tr><td>";
        contenidoTabla += miArreglo;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
