let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter( function (){
    let promedio = promedio >=7;
    return promedio;
});

console.log (aprobados);

let desaprobados = estudiantes.filter(function (){
    let promedio = promedio < 7 ;
    return promedio;
});
console.log (desaprobados);

//let horariosPartida = [12, 14, 18, 21];
//
//let horariosAtrasados = horariosPartida.map( function(hora){
//    return hora -1;
//});
//console.log (horariosAtrasados);

//let listaDeSuperMercado = [
//    'Bife de chorizo', 
//    'Coca Cola', 
//    'Bananas', 
//    'Lechuga', 
//    'Chimichurri', 
//    'Lata de tomates', 
//    'Arvejas', 
//    'Cereales', 
//    'Pechuga de pollo', 
//    'Leche'
//];
//listaDeSuperMercado.forEach(function(valor, indice){
//    console.log (indice);
//    console.log (valor);
//});
    