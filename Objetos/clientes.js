let clientes = [
    { cedula: "12345678", nombre: "Pepe", edad: 12 },
    { cedula: "32913912", nombre: "Nemo", edad: 20 },
    { cedula: "43543543", nombre: "Bartolito", edad: 23 }
];

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" + "<th> CEDULA </th>" +
        "<th> NOMBRE </th>" + "<th> EDAD </th>" + "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla += "<tr> <td> " + elementoCliente.cedula + " </td>" +
            "<td> " + elementoCliente.nombre + " </td>" +
            "<td> " + elementoCliente.edad + " </td>" + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

agregarCliente = function (cliente) {
    let resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("cliente agregado");
        mostrarClientes();
    } else {
        alert("Ya existe el cliente con la cedula: " + cliente.cedula);
    }
}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let ValorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = ValorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

ejecutarBusqueda = function(){
    let valorBusqueda = recuperarTexto("cedulaBusqueda");
    let cliente = buscarCliente(valorBusqueda);
    if(cliente == null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);  
    if(clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

guardarCambias = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let ValorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let DatosCliente = {};
    DatosCliente.cedula = valorCedula;
    DatosCliente.nombre = ValorNombre;
    DatosCliente.edad = valorEdad;
    modificarCliente(DatosCliente);
    mostrarClientes();
}