let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1727392035", nombre: "Brayan", apellido: "Narvaez", sueldo: 800.0 }
]

let roles = []

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
    mostrarRoles();
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
    deshabilitarComponente("btnGuardar2");
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
            if (empleadoNuevo == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                esNuevo = false;
                deshabilitar();
            } else {
                alert("YA EXISTE UN EMPREADO CON LA CEDULA: " + cedula);
                let busqueda = buscarEmpleado(cedula);
                busqueda.nombre = nombre;
                busqueda.apellido = apellido;
                busqueda.sueldo = sueldo;
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleados();
                deshabilitar();
            }
        }
    }
}

ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let busqueda = buscarEmpleado(cedula);
    if (busqueda == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        alert("Cedula: " + busqueda.cedula + " " + "Nombre: " + busqueda.nombre + " " + "Apellido: " + busqueda.apellido + " " + "Sueldo: " + busqueda.sueldo);
    }
    habilitarComponente("txtSueldo");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtCedula");
    deshabilitarComponente("txtBusquedaCedula");
}

limpiar = function () {
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtCedula", "");
    esNuevo = false;
    deshabilitar();
}

buscarPorRol = function () {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let buscar = buscarEmpleado(cedula);
    if (buscar == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTexto("infoCedula", buscar.cedula);
        mostrarTexto("infoNombre", buscar.nombre + " " + buscar.apellido)
        mostrarTexto("infoSueldo", buscar.sueldo);
    }
}

calcularAporteEmpleado = function (sueldo) {
    return parseFloat((sueldo * 0.0945).toFixed(2));
}

calcularValorAPagar = function (sueldo, AporteIESS, descuento) {
    let valorAPagar = sueldo - AporteIESS - descuento;
    return valorAPagar
}

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    if (descuento = recuperarInt("txtDescuentos")) {
        mostrarTexto("lblErrorDescuentos", "El valor del descuento debe ser decimal");
    } else if (descuento >= 0 || descuento <= sueldo && descuento) {
        let AporteIESS = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", AporteIESS);
        let valorAPagar = calcularValorAPagar(sueldo, AporteIESS, descuento);
        mostrarTexto("infoPago", valorAPagar);
        habilitarComponente("btnGuardar2");
    }
}

buscarRol = function (cedula) {
    let cmpRol;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        cmpRol = roles[i];
        if (cmpRol.cedula == cedula) {
            return rolEncontrado = cmpRol;
        }
    }
    return rolEncontrado;
}

agregarRol = function (rol) {
    let cmpRol = buscarRol(rol.cedula);
    if (cmpRol == null) {
        roles.push(rol);
        alert("Rol agregado correctamente");
    } else {
        alert("Rol existente");
    }
}

calcularAporteEmpleador = function (sueldo) {
    return parseFloat((sueldo * 0.1115).toFixed(2));
}

guardarRol = function () {
    let valorAPagar = recuperarTextoDiv("infoPago");
    let aporteIEES = recuperarTextoDiv("infoIESS");
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarTextoDiv("infoSueldo");
    let aporteEmpleador = calcularAporteEmpleador(sueldo);
    let rol = {}
    rol.valorAPagar = valorAPagar;
    rol.aporteIEES = aporteIEES;
    rol.nombre = nombre;
    rol.cedula = cedula;
    rol.sueldo = sueldo;
    rol.aporteEmpleador = aporteEmpleador;
    agregarRol(rol)
    mostrarTotales();
    alert("El rol se ha guardado correctamente");
    deshabilitarComponente("btnGuardar2");
}

mostrarRoles = function(){
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" + "<th> CEDULA </th>" +
        "<th> NOMBRE </th>" + "<th> VALOR A PAGAR </th>" + "<th> APORTE EMPLEADO </th>" +"<th> APORTE EMPLEADOR </th>" + "</tr>";
    let elementoRol;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        contenidoTabla += "<tr> <td> " + elementoRol.cedula + " </td>" +
            "<td> " + elementoRol.nombre + " </td>" +
            "<td> " + elementoRol.valorAPagar + " </td>" +
            "<td> " + elementoRol.aporteIEES + " </td>" +
            "<td> " + elementoRol.aporteEmpleador + " </td>" + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarTotales = function(){
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    for(let i = 0;i < roles.length;i++){
        totalEmpleado += roles[i].aporteIEES;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }
    let totalNomina = parseFloat(totalAPagar) + parseFloat(totalEmpleado) + parseFloat(totalEmpleador);
    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoAporteEmpleado",totalEmpleado);
    mostrarTexto("infoNomina",totalNomina);
    mostrarRoles();
    
}