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