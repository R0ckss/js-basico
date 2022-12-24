var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//*metodo de filter para "recorrer" un array, y lo filtra con la condicion que queramos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});


//**metodo de map para "filtrar" un array 

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

 //***metodo de find, si existe eso que quiero muestralo.

 var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
 });


 //****metodo forEach no genera un nuevo array, hace un filtrado sobre lo que queremos del array

 articulos.forEach(function(articulo){
    console.log(articulo.nombre);
 });

 //*****validacion de true o false; si existe o no lo que queremos buscar

 var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
 });
