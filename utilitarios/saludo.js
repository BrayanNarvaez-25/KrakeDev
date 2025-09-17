saludar = function(){
    let nombre = recuperarTexto("txt");
    let apellido = recuperarTexto("txtA");
    let edad =  recuperarInt("txtE");
    let estatura = recuperarFloat("txtES");
    let mensajeBienvenida = "Bienvenido" + " " + nombre + " " + apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");
    mostrarTextoCaja("txt","");
}

