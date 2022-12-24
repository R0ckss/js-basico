

function ganador(usuario, bot){
    if(usuario === bot){
        return resultado = "Es un empate";
    }
    else if(usuario === "piedra" && bot === "tijera"){
        return resultado = "gana usuario";
    }
    else if(usuario === "papel" && bot === "piedra"){
        return resultado = "gana usuario";
    }
    else if(usuario === "tijera" && bot === "papel"){
        return resultado = "gana usuario";
    }
    else{
        return resultado = "Gana bot";
    }
}

