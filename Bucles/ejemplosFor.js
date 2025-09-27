mostrarNumeros = function(){
    console.log("antes del for");
    for(let i = 0;i < 4;i++){
        console.log(i)
    }
    console.log("Despues del for");
}

mostrarNumeros2 = function(){
    console.log("antes del for");
    for(let indice = 1;indice <= 5; indice++){
        console.log(indice);
    }
    console.log("Despues del for");
}

mostrarPares = function(){
    console.log("antes del for");
    for(let x = 2; x <= 10;x += 2){
        console.log(x);
    }
    console.log("Despues del for");
}

mostrarInverso = function(){
    console.log("antes del for");
    for(let i = 10;i > 0 ;i--){
        console.log(i);
    }
    console.log("Despues del for");
}

hackearNasaPelis = function(){
    //hackeando nasa 0% ... 100%
    for(let hackeando = 0; hackeando <= 100;hackeando += 10){
        console.log("Hackeando Nasa " +  hackeando + "%")
    }
    console.log("La nasa ha sido hackeada XD")
}

mostrarImpares = function(){
    console.log("antes del for");
    for(let imp = 1;imp <= 21;imp += 2){
        console.log(imp);
    }
    console.log("Despues del for");
}