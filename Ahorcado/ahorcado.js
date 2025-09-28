//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";

esMayuscula = function (caracter) {
    let esMayuscula = caracter.charCodeAt(0);
    if (esMayuscula >= 65 && esMayuscula <= 90) {
        return true;
    }
    return false
}

guardarPalabra = function(){
    let palabra = recuperarTexto("txtSecreta");
    if(palabra.length != 5){
        alert("DEBE INGRESAR UNA PALABRA DE EXACTAMENTE 5 LETRAS MAYUSCULAS");
    }
    for(let i = 0;i < palabra.length;i++){
        if(!esMayuscula(palabra[i]))
        alert("DEBE INGRESAR SOLO LETRAS MAYUSCULAS");
    }
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}

mostrarLetra = function(letra,posicion){
    let posicionLetra = posicion.charAt(0)
    if(posicionLetra.length == 0){
        mostrarTexto("div0",letra);
    }
    if(posicionLetra.length == 1){
        mostrarTexto("div1",letra);
    }
    if(posicionLetra.length == 2){
        mostrarTexto("div2",letra);
    }
    if(posicionLetra.length == 3){
        mostrarTexto("div3",letra);
    }
    if(posicionLetra.length == 5){
        mostrarTexto("div5",letra);
    }
}

validar = function(letra){
    let letrasEncontradas = 0;
    let posicion;
    for(let i = 0;i < letra.length;i++){
        posicion = letra.charAt(i);
        if(posicion == letra){
            mostrarLetra(letra,posicion);
            letrasEncontradas++;
        }
    }
}