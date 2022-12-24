function ganador (usuario, bot){
    switch(true){
        case usuario === bot:
            console.log("Es un empate")
            break;

        case usuario === "piedra" && bot === "tijera":
            console.log("Gana Usuario");
            break;

        case usuario === "papel" && bot === "piedra":
            console.log("Gana Usuario");
            break;

        case usuario === "tijera" && bot === "papel":
            console.log("Gana Usuario");
            break;
        
        default:
            console.log("Gana bot");
    }
}