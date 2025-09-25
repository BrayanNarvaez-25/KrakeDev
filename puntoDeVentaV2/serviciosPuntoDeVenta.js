calcularValorDescuento = function (monto, porcentajeDescuento) {
    let descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
}

calcularIva = function (monto) {
    let vIva = monto * 0.12;
    return vIva;
}

calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal
}

calcularTotal = function (subtotal, descuento, iva) {
    let total = (subtotal - descuento) + iva;
    return total;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let porcentaje = 0;
    if (cantidad < 3) {
        mostrarTexto("lblDescuento", "Sin descuento");
    } else if (cantidad <= 5) {
        porcentaje = 0.03;
        mostrarTexto("lblDescuento", "3%");
    } else if (cantidad <= 11) {
        porcentaje = 0.04
        mostrarTexto("lblDescuento", "4%");
    } else {
        porcentaje = 0.05
        mostrarTexto("lblDescuento", "5%");
    }
    let descuento = subtotal * porcentaje
    return descuento;
}


esProductoValido = function (nombreProducto, idComponente) {
    let productoValido = false;
    if (nombreProducto == "") {
        mostrarTexto(idComponente, "CAMPO OBLIGATORIO");
        return productoValido;
    }
    if (nombreProducto.length > 10) {
        mostrarTexto(idComponente, "El nombre del producto no puede tener mas de 10 caracteres");
        return productoValido;
    }
    if (productoValido == false) {
        mostrarTexto(idComponente, "");
        return !productoValido;
    }
}

esCantidadValida = function (cantidad, idComponente) {
    let cantidadValida = false;
    if (isNaN(cantidad)) {
        mostrarTexto(idComponente, "CAMPO OBLIGATORIO");
        return cantidadValida;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponente, "La cantidad debe ser un numero entero entre 0 y 100");
        return cantidadValida;
    }
    if (cantidadValida == false) {
        mostrarTexto(idComponente, "");
        return !cantidadValida;
    }
}

esPrecioValido = function (precio, idComponente) {
    let precioValido = false;
    if (isNaN(precio)) {
        mostrarTexto(idComponente, "CAMPO OBLIGATORIO");
        return precioValido;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponente, "El precio debe ser un numero entre 0 y 50");
        return precioValido;
    }
    if (precioValido == false) {
        mostrarTexto(idComponente, "");
        return !precioValido;
    }
}

