probarAtributos = function(){
    let persona = {
        nombre : "Brayan",
        apellido : "Narvaez",
        edad : 17,
        estaVivo : true,
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("No esta vivo");
    }else{
        console.log("si está vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre : "Cuaderno",
        precio : 1.05,
        stock : 10,
    }
    let producto2 = {
        nombre : "Esfero",
        precio : 0.50,
        stock : 15,
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock > producto2.stock){
        console.log("Producto 1 tiene mayor stock")
    }else if(producto2.stock > producto1.stock){
        console.log("Producto 2 tiene mayor stock")
    }else{
        console.log("Ambos tienen el mismo stock")
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero : "5425261298",
        saldo : 0.0,
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula : "17273920350",
        nombre : "Brayan",
    }
    let cliente1 = {};
    cliente1.nombre = "Pepe",
    cliente1.apellido = "Nuñez",
    cliente.cedula = "235671900"
}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo += monto;
}

determinarMayor = function(persona1,persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona2.edad > persona1.edad){
        return persona2;
    }else{
        return null;
    }
}

probarIncrementoSaldo = function(){
    let cuenta = {
        numero : "12345",
        saldo : 25.05
    }
    incrementarSaldo(cuenta,500);
    console.log(cuenta.saldo);
}

probarDeterminarMayor = function(){
    let persona1 = {
        nombre :"Brayan",
        edad : 17
    }
    let persona2 = {
        nombre : "Nelson",
        edad : 15
    }
    let mayor = determinarMayor(persona1,persona2);
    if(mayor != null){
        console.log("El mayor es: " + mayor.nombre)
    }
}