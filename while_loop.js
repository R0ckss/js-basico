var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0){
    console.log(estudiantes);//ver solo como se ejecuta el while con la condicion
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}