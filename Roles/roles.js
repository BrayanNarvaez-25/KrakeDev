let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1727392035", nombre: "Brayan", apellido: "Narvaez", sueldo: 800.0 }
]

let esNuevo = false;

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" + "<th> CEDULA </th>" +
        "<th> NOMBRE </th>" + "<th> APELLIDO </th>" + "<th> SUELDO </th>" + "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla += "<tr> <td> " + elementoEmpleado.cedula + " </td>" +
            "<td> " + elementoEmpleado.nombre + " </td>" +
            "<td> " + elementoEmpleado.apellido + " </td>" +
            "<td> " + elementoEmpleado.sueldo + " </td>" + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitar = function () {
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    habilitarComponente("txtSueldo");
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    let cmpEmpleado;
    let empleadoEncontrado = null
    for (let i = 0; i < empleados.length; i++) {
        cmpEmpleado = empleados[i];
        if (cmpEmpleado.cedula == cedula) {
            empleadoEncontrado = cmpEmpleado
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let cmpEmpleado = buscarEmpleado(empleado.cedula);
    if (cmpEmpleado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldoStrign = recuperarTexto("txtSueldo");
    let sueldo = recuperarFloat("txtSueldo");

    let hayErrores = false;

    if (cedula == "") {
        mostrarTexto("lblErrorCedula", "CAMPO OBLIGATORIO");
        hayErrores = true;
    } else if (cedula.length != 10) {
        mostrarTexto("lblErrorCedula", "DEBEN SER EXACTAMENTE 10 DIGITOS");
        hayErrores = true;
    } else if (cedula.length == 10) {
        mostrarTexto("lblErrorCedula", "");
    }

    if (nombre == "") {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO");
        hayErrores = true;
    } else if (esMayuscula(nombre) == false || nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "DEBEN SER AL MENOS 3 CARACTERES Y TODOS MAYUSCULAS");
        hayErrores = true;
    } else if (esMayuscula(nombre) == true || nombre.length >= 3) {
        mostrarTexto("lblErrorNombre", "");
    }

    if (apellido == "") {
        mostrarTexto("lblErrorApellido", "CAMPO OBLIGATORIO");
        hayErrores = true;
    } else if (esMayuscula(apellido) == false || nombre.length < 3) {
        mostrarTexto("lblErrorApellido", "DEBEN SER AL MENOS 3 CARACTERES Y TODOS MAYUSCULAS");
        hayErrores = true;
    } else if (esMayuscula(nombre) == true || nombre.length >= 3) {
        mostrarTexto("lblErrorApellido", "");
    }

    if (sueldoStrign == "") {
        mostrarTexto("lblErrorSueldo", "CAMPO OBLIGATORIO");
        hayErrores = true;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "TIENE QUE SER ENTRE 400 Y 5000");
        hayErrores = true;
    } else if (sueldo > 400 || sueldo < 5000) {
        mostrarTexto("lblErrorSueldo", "");
    }

    if (!hayErrores) {
        if (esNuevo == true) {
            let empleado = {};
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            let empleadoNuevo = agregarEmpleado(empleado);
            if(empleadoNuevo == true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                esNuevo = false;
            }else{
                alert("YA EXISTE UN EMPREADO CON LA CEDULA: " + cedula);
            }
        }
    }
}
