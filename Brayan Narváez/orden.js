let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 },
]

agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre");
    let edadStrign = recuperarTexto("txtEdad");
    let edad = recuperarFloat("txtEdad");
    let hayErrores = false;

    if (nombre == "") {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO");
        hayErrores = true;
    } else if (esMayuscula(nombre) == false || nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "DEBEN SER AL MENOS 3 CARACTERES Y TODOS MAYUSCULAS");
        hayErrores = true;
    } else if (esMayuscula(nombre) == true || nombre.length >= 3) {
        mostrarTexto("lblErrorNombre", "");
    }

    if (edadStrign == "") {
        mostrarTexto("lblErrorEdad", "CAMPO OBLIGATORIO");
        hayErrores = true;
    } else if (edad < 0 || edad > 100) {
        mostrarTexto("lblErrorEdad", "TIENE QUE SER ENTRE 400 Y 5000");
        hayErrores = true;
    } else if (edad > 0 || edad < 100) {
        mostrarTexto("lblErrorEdad", "");
    }

    if (!hayErrores) {
        let nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    }
}

mostrarPersonas = function () {
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table><tr>" + "<th> NOMBRE </th>" +
        "<th> EDAD </th>" + "</tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        contenidoTabla += "<tr>" + "<td> " + elementoPersona.nombre + " </td>" +
            "<td> " + elementoPersona.edad + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarTexto("lblResultado","PERSONA MAYOR: " + mayor.nombre);
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}

determinarMenor = function () {
    let menor = encontrarMenor();
    mostrarTexto("lblResultado2","PERSONA MAYOR: " + menor.nombre);
}

limpiar = function(){
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtEdad","");
    mostrarTexto("lblResultado","PERSONA MAYOR: ");
    mostrarTexto("lblResultado2","PERSONA MENOR: ");
}