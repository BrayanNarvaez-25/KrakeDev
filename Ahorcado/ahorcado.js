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