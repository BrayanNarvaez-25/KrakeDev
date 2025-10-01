let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1727392035", nombre: "Brayan", apellido: "Narvaez", sueldo: 800.0}
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
            "<td> " + elementoEmpleado.sueldo + " </td>" +"</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitar = function(){
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function(){
    habilitarComponente("txtSueldo");
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
